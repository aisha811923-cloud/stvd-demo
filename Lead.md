# Lead Dispatch & Zero-Dashboard Staff Workflow
**Objective:** Deliver parent inquiries directly to the school office without requiring an internal admin portal.

---

## 1. Google Sheets Webhook Dispatch (Recommended)

Since the school clerical staff already uses spreadsheets, every lead submitted through `<AdmissionsModal />` is piped directly into a Google Sheet in real time.

### Step 1: Google Sheet Apps Script
Open a Google Sheet named `STVDS Admissions 2026-27`, navigate to **Extensions > Apps Script**, and paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Auto-create headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp", 
        "Parent Name", 
        "Phone / WhatsApp", 
        "Child Name", 
        "Grade Applying", 
        "Status", 
        "Counselor Notes"
      ]);
      sheet.getRange("1:1").setFontWeight("bold").setBackground("#0F1E36").setFontColor("#FFFFFF");
    }
    
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.parent_name,
      "'" + data.phone, // Prepend quote so phone numbers don't drop leading zeros
      data.child_name,
      data.grade_applying,
      "New Inquiry",
      data.notes || ""
    ]);
    
    return ContentService.createTextOutput(
      JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
Deploy as Web App -> Set Who has access to "Anyone".

Copy the generated Web App URL and add it to .env.local as GOOGLE_SHEETS_WEBHOOK_URL.

2. Updated API Dispatch Route (src/app/api/admissions/route.ts)
TypeScript
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { parent_name, phone, child_name, grade_applying, notes } = body;

    if (!parent_name || !phone || !child_name) {
      return NextResponse.json(
        { error: "Parent Name, Phone, and Child Name are required." },
        { status: 400 }
      );
    }

    const payload = {
      parent_name,
      phone,
      child_name,
      grade_applying: grade_applying || "Nursery",
      notes: notes || "Website Quick Callback Form",
      created_at: new Date().toISOString(),
    };

    // 1. Silent Supabase backup storage (failsafe)
    if (supabaseUrl && supabaseKey) {
      await supabase.from("admissions_inquiries").insert([payload]).catch(console.error);
    }

    // 2. Direct Google Sheet push for school staff
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        }),
      }).catch((err) => console.error("Google Sheet webhook error:", err));
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
3. Instant WhatsApp Fallback Option
On the client confirmation dialog (AdmissionsModal.tsx), display an immediate action button for parents who prefer instant contact:

TypeScript
<a
  href={`[https://wa.me/919667881122?text=$](https://wa.me/919667881122?text=$){encodeURIComponent(
    `Hello St. Teresa Vidya Deep Admissions Office, I submitted an inquiry for my child ${formData.child_name} for admission into${formData.grade_applying}.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-green-600 text-green-700 font-medium text-sm hover:bg-green-50 transition-colors"
>
  Message Directly on WhatsApp
</a>