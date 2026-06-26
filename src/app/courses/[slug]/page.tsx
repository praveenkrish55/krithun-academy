import { notFound } from "next/navigation";
import { CourseDetailsClient } from "@/components/common/course-details-client";

const detailedCourses: Record<string, {
  title: string;
  duration: string;
  eligibility: string;
  syllabus: string[];
  description: string;
}> = {
  "ca-foundation": {
    title: "CA Foundation",
    description: "Build a strong foundation for your CA journey with our comprehensive coaching program.",
    duration: "4 Months",
    eligibility: "12th Standard cleared or appearing",
    syllabus: [
      "Principles and Practice of Accounting",
      "Business Laws and Business Correspondence",
      "Business Mathematics, Logical Reasoning and Statistics",
      "Business Economics and Commercial Knowledge",
      "Weekly Mock Examinations and Performance Analysis",
      "Doubt Solving Workshops and Revision Classes",
    ],
  },
  "ca-intermediate": {
    title: "CA Intermediate",
    description: "Advance your knowledge and achieve more with expert coaching for CA Intermediate.",
    duration: "8 Months",
    eligibility: "CA Foundation cleared or Direct Entry Graduate",
    syllabus: [
      "Advanced Financial Accounting and reporting guidelines",
      "Corporate and Other Laws (Companies Act, Contract Act)",
      "Taxation (Income Tax Law & Goods and Services Tax)",
      "Cost and Management Accounting calculations",
      "Auditing and Ethics auditing procedures",
      "Financial Management and Strategic Management concepts",
    ],
  },
  "cma-foundation": {
    title: "CMA Foundation",
    description: "Kickstart your career in Cost Management with our structured preparation course.",
    duration: "4 Months",
    eligibility: "10+2 cleared or equivalent standard",
    syllabus: [
      "Fundamentals of Business Laws and Business Communication",
      "Fundamentals of Financial and Cost Accounting rules",
      "Fundamentals of Business Mathematics and Statistics",
      "Fundamentals of Business Economics and Management concepts",
      "Structured Chapter Tests and Exam Simulator sessions",
      "Individual student growth counseling",
    ],
  },
  "cma-intermediate": {
    title: "CMA Intermediate",
    description: "Take the next step towards professional Cost Management excellence with intermediate training.",
    duration: "8 Months",
    eligibility: "CMA Foundation cleared or Graduate degree",
    syllabus: [
      "Business Laws and Ethics (Group 1 coverage)",
      "Financial Accounting and Laws and Taxation",
      "Cost Accounting procedures and formulas",
      "Operations Management and Strategic Management (Group 2)",
      "Corporate Accounting and Auditing practices",
      "Financial Management and Business Data Analytics",
    ],
  },
  "tally-prime": {
    title: "Tally Prime",
    description: "Master Tally Prime for real-world business accounting, invoice generation, and automation.",
    duration: "1 Month (Fast Track)",
    eligibility: "Basic accounting rules knowledge",
    syllabus: [
      "Company Creation and Configuration steps",
      "Voucher Entry (Receipts, Payments, Sales, Purchases)",
      "Inventory Management (Stock Groups, Categories, Units)",
      "GST Accounting (tax calculation, e-way billing details)",
      "Bank Reconciliation Statement (BRS) calculations",
      "Trial Balance, Profit & Loss, Balance Sheet reports",
    ],
  },
  "gst-filing": {
    title: "GST Filing",
    description: "Learn GST law and practical return filing processes on live portals.",
    duration: "1 Month",
    eligibility: "Accountants, Commerce Graduates, and Owners",
    syllabus: [
      "GST Law overview (CGST, SGST, IGST calculations)",
      "Input Tax Credit (ITC) reconciliation and verification",
      "GSTR-1 Outward Supply Return Filing steps",
      "GSTR-3B Summary Monthly Return Filing procedures",
      "GST Registration, Amendment and Cancellation portal tasks",
      "TDS on GST and Annual Return GSTR-9 introduction",
    ],
  },
  "practical-accounting": {
    title: "Practical Accounting",
    description: "Gain real-world accounting experience with hands-on corporate ledger training.",
    duration: "2 Months",
    eligibility: "Undergraduates, Graduates or job seekers",
    syllabus: [
      "Real-world business transactions documentation",
      "Manual ledger entries and double-entry balancing",
      "Corporate financial statements preparation",
      "Payroll accounting calculations and TDS deductions",
      "Practical bank transaction reconciliations",
      "Hands-on practice with commercial tax filings",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(detailedCourses).map((slug) => ({
    slug,
  }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = detailedCourses[slug];

  if (!course) {
    notFound();
  }

  return <CourseDetailsClient course={course} />;
}
