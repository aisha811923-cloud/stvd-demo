# Supabase PostgreSQL Data Models

## 1. Admissions Inquiries Table
```sql
create table public.admissions_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  parent_name text not null,
  phone text not null,
  child_name text not null,
  grade_applying text not null,
  notes text,
  status text default 'pending_callback' check (status in ('pending_callback', 'contacted', 'campus_visit_booked', 'enrolled', 'closed')),
  assigned_counselor text,
  followup_date date
);

create index idx_inquiries_status on public.admissions_inquiries(status);
create index idx_inquiries_phone on public.admissions_inquiries(phone);

alter table public.admissions_inquiries enable row level security;

-- Public can only insert inquiries
create policy "Allow public lead submission" 
on public.admissions_inquiries for insert 
with check (true);

-- Authenticated staff can read and update
create policy "Allow staff full access" 
on public.admissions_inquiries for all 
using (auth.role() = 'authenticated');