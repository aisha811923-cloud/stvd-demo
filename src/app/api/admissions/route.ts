import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase configuration environment variables.");
}

const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VALID_GRADES = [
  "Nursery", "LKG", "UKG", "HKG", "LKG & UKG",
  "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Classes 1–5",
  "Class 6", "Class 7", "Class 8", "Classes 6–8",
  "Class 9", "Class 10", "Classes 9–10",
  "Class 11 - Science", "Class 11 - Commerce", "Class 11 - Arts",
  "Class 12 - Science", "Class 12 - Commerce", "Class 12 - Arts",
  "Class 11–12 Science", "Class 11–12 Commerce", "Class 11–12 Humanities",
  "Class 11-12 Science", "Class 11-12 Commerce", "Class 11-12 Humanities",
];

/**
 * Sanitize string inputs to neutralize any HTML injection or scripts
 */
function sanitizeInput(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/<[^>]*>?/gm, "") // Strip HTML tags
    .replace(/[<>]/g, "")      // Strip remaining angle brackets
    .trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));

    // Bot Honeypot: if hidden website field is populated, silently deflect bots
    if (body.website) {
      return NextResponse.json(
        { success: true, message: "Inquiry successfully received." },
        { status: 200 }
      );
    }

    // Extract & sanitize parameters (supporting both camelCase and snake_case)
    const parentName = sanitizeInput(body.parentName || body.parent_name);
    const studentName = sanitizeInput(body.studentName || body.child_name);
    const rawPhone = typeof body.phone === "string" ? body.phone : "";
    const sanitizedPhone = rawPhone.replace(/\D/g, "");
    const gradeApplying = sanitizeInput(body.gradeApplying || body.grade_applying || body.grade);
    const rawEmail = typeof body.email === "string" ? body.email.trim() : "";
    const email = rawEmail ? sanitizeInput(rawEmail) : "";
    const rawNotes = typeof body.notes === "string" ? body.notes : "";
    const notes = sanitizeInput(rawNotes).slice(0, 500);

    // 1. Validate Parent Name (2 to 100 characters)
    if (!parentName || parentName.length < 2 || parentName.length > 100) {
      return NextResponse.json(
        { success: false, error: "Parent or Guardian Name is required (2 to 100 characters)." },
        { status: 400 }
      );
    }

    // 2. Validate Student Name (2 to 100 characters)
    if (!studentName || studentName.length < 2 || studentName.length > 100) {
      return NextResponse.json(
        { success: false, error: "Student Name is required (2 to 100 characters)." },
        { status: 400 }
      );
    }

    // 3. Validate Contact Number (10 to 15 digits)
    if (!sanitizedPhone || sanitizedPhone.length < 10 || sanitizedPhone.length > 15) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid contact number (at least 10 digits)." },
        { status: 400 }
      );
    }

    // 4. Validate Grade Applying (must match allowed institutional grades)
    if (!gradeApplying || !VALID_GRADES.includes(gradeApplying)) {
      return NextResponse.json(
        { success: false, error: "Please select a valid academic grade." },
        { status: 400 }
      );
    }

    // 5. Validate Email if provided
    if (email && !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Generate unique, audit-traceable inquiry ID and timestamp
    const timestamp = new Date().toISOString();
    const inquiryId = `STVDS-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // Format notes to cleanly include unique inquiry tracking ID, optional email, and inquirer remarks
    const formattedNotes = [
      `Ref: ${inquiryId}`,
      notes,
      email ? `Email: ${email}` : null,
      rawPhone && rawPhone.trim() !== sanitizedPhone ? `Original Contact: ${rawPhone.trim()}` : null,
    ]
      .filter(Boolean)
      .join(" | ") || "Website Admissions Callback Form";

    const recordPayload = {
      parent_name: parentName,
      child_name: studentName,
      phone: sanitizedPhone,
      grade_applying: gradeApplying,
      notes: formattedNotes,
      status: "pending_callback",
    };

    // 1. Commit record to Supabase if configured (halt and return 500 if persistence fails)
    if (supabase) {
      const { error: dbError } = await supabase
        .from("admissions_inquiries")
        .insert([recordPayload]);

      if (dbError) {
        console.error("Database persistence failed:", dbError);
        return NextResponse.json(
          { success: false, error: "Unable to record inquiry. Please contact the admissions desk directly." },
          { status: 500 }
        );
      }
    }

    // 2. Forward to Google Sheets Webhook if configured
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquiry_id: inquiryId,
          ...recordPayload,
          created_at: timestamp,
          ist_timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        }),
      }).catch((err) => console.error("Google Sheets webhook dispatch error:", err));
    }

    // Return standardized HTTP 200 payload
    return NextResponse.json(
      {
        success: true,
        inquiryId,
        timestamp,
        message: "Admissions inquiry successfully received.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admissions submission server error:", error);
    return NextResponse.json(
      { success: false, error: "Unable to process inquiry. Please call the admissions office directly at +91 9667881122." },
      { status: 500 }
    );
  }
}
