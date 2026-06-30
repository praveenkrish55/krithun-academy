"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  CheckSquare,
  FileSpreadsheet,
  Plus,
  BookOpen,
  Calendar,
  ClipboardList,
  Video,
  Radio,
  User,
  Bell,
  Menu,
  X,
  LogOut,
  BrainCircuit,
  Sparkles,
  Lock,
  ArrowRight,
  TrendingUp,
  Download,
  AlertCircle,
  PlayCircle,
  ExternalLink,
  Flame,
  Trophy,
  Target,
  History,
  Clock,
  ChevronDown,
  CheckCircle2,
  Upload,
  Search,
  BookOpenCheck,
  FileText,
  Copy,
  Check,
  Sun,
  Moon,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Simulated Database & Preset values
const diagnosticData: Record<string, { strong: string[]; weak: string[] }> = {
  "All Subjects": {
    strong: ["Consignment Valuation (Accounting)", "ITC Reconciliation (GST)", "Free Consent Law (Business Law)", "Marginal Costing BEP (Costing)"],
    weak: ["TDS Section 40(a) defaults (Income Tax)", "Annuity Present Value (Mathematics)", "WACC Formula (Financial Management)"],
  },
  "Accounting": {
    strong: ["Consignment Ledger Entries", "Provision for Doubtful Debts", "Double Entry Principles"],
    weak: ["Abnormal Loss Valuations", "Consignee Expense Allocations"],
  },
  "GST": {
    strong: ["RCM Mechanics", "Composition Scheme Thresholds", "GSTR-1 Outward Filings"],
    weak: ["GSTR-2B vs 3B ITC Reconciliation", "Rule 37A ITC Reversal Penalties"],
  },
};

const prebuiltPapers: Record<string, string> = {
  "Accounting_50": `# CA Foundation Mock Examination
## Subject: Principles & Practice of Accounting
**Time Allowed**: 1.5 Hours | **Total Marks**: 50 Marks
---
### Section A (Compulsory - 20 Marks)
1. **Explain the treatment of abnormal loss in consignment accounts.** Detail the journal entries required in the books of the consignor when:
   - The goods are fully uninsured. (5 Marks)
   - The insurance company admits 80% of the claim amount. (5 Marks)
2. **Distinguish between Capital expenditure and Revenue expenditure** with reference to the following scenarios:
   - ₹50,000 spent on repairing a second-hand machine before installation.
   - ₹10,000 spent on annual repaint of office buildings. (10 Marks)

### Section B (Attempt any two - 15 Marks each)
3. Prepare a Consignment Account and Consignee's personal ledger account from the following details... [Download Full Sheet to View]`,
  
  "GST_100": `# CA Intermediate Group 1 Exam
## Subject: Indirect Taxes (GST Suite)
**Time Allowed**: 3 Hours | **Total Marks**: 100 Marks
---
### Section A (MCQs & Case Studies - 30 Marks)
1. **Case Scenario 1**: M/s Vasudev & Co, registered in Tamil Nadu, provides corporate catering services to M/s Kovai Towers in Coimbatore... [Download Full Case Study to View]

### Section B (Descriptive - 70 Marks)
2. **State with reasons whether ITC is available** under the CGST Act 2017 in the following cases:
   - Truck purchased by M/s Audit Partners for transportation of raw materials. (5 Marks)
   - Catering services obtained for employees on annual day. (5 Marks)
3. Detail the conditions and due dates for reconciling ITC discrepancies between GSTR-2B and GSTR-3B under Rule 37A. (15 Marks)`,
};

export default function FacultyPortal() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("faculty@krithun.com");
  const [loginPassword, setLoginPassword] = useState("password");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  // Notifications read state simulation
  const [notifications, setNotifications] = useState([
    { id: 1, title: "New Homework Submission", body: "Praveen Kumar submitted his Consignment Account Ledger Worksheet.", date: "Today, 10:15 AM", read: false },
    { id: 2, title: "Class Feedback Posted", body: "Students in Nov 2026 Batch left high feedback ratings (4.9/5) on the recent GST filing class.", date: "Yesterday, 3:40 PM", read: false },
    { id: 3, title: "Mock Quiz Due", body: "Monthly mock quiz scheduled for tomorrow at 9:30 AM requires question allocations.", date: "Yesterday, 9:00 AM", read: true },
  ]);

  // Attendance Roster State
  const [attendanceRoster, setAttendanceRoster] = useState([
    { id: "S001", name: "Praveen Kumar", reg: "KA-2026-0891", present: true, attendancePct: "92%" },
    { id: "S002", name: "Aditya Sharma", reg: "KA-2026-0892", present: true, attendancePct: "95%" },
    { id: "S003", name: "Riya Patel", reg: "KA-2026-0893", present: true, attendancePct: "94%" },
    { id: "S004", name: "Sneha Reddy", reg: "KA-2026-0894", present: false, attendancePct: "88%" },
    { id: "S005", name: "Karthik Subramanian", reg: "KA-2026-0895", present: true, attendancePct: "91%" },
  ]);
  const [attendanceSaveMessage, setAttendanceSaveMessage] = useState("");

  // Assignments Grading State
  const [assignments, setAssignments] = useState([
    { id: "A1", student: "Praveen Kumar", title: "Consignment Ledger Entries Worksheet", subject: "Accounting", score: "", max: 100, graded: false },
    { id: "A2", student: "Aditya Sharma", title: "Consignment Ledger Entries Worksheet", subject: "Accounting", score: "95", max: 100, graded: true },
    { id: "A3", student: "Riya Patel", title: "ITC Reconciliation GSTR-2B Workbook", subject: "GST", score: "90", max: 100, graded: true },
    { id: "A4", student: "Sneha Reddy", title: "TDS Disallowance Rules Review", subject: "Income Tax", score: "", max: 100, graded: false },
  ]);
  const [gradeInput, setGradeInput] = useState<Record<string, string>>({});
  const [gradingSuccessMessage, setGradingSuccessMessage] = useState("");

  // Upload Study Material states
  const [materialTitle, setMaterialTitle] = useState("");
  const [materialSubject, setMaterialSubject] = useState("Accounting");
  const [materialCategory, setMaterialCategory] = useState("Handouts");
  const [materialUploadedList, setMaterialUploadedList] = useState([
    { id: 1, title: "Consignment Ledger Format Guide", subject: "Accounting", category: "Handouts", date: "Today", size: "12.4 MB" },
    { id: 2, title: "ITC GSTR-2B Reconciliation Guide", subject: "GST", category: "Reference Books", date: "Yesterday", size: "8.1 MB" },
  ]);
  const [materialMessage, setMaterialMessage] = useState("");

  // Mock Test Creation states
  const [testTitle, setTestTitle] = useState("");
  const [testSubject, setTestSubject] = useState("Accounting");
  const [testMarks, setTestMarks] = useState("50");
  const [testDuration, setTestDuration] = useState("90");
  const [createdTests, setCreatedTests] = useState([
    { id: 1, title: "Consignment Accounts Quiz 1", subject: "Accounting", marks: 50, duration: 90, status: "Active" },
    { id: 2, title: "GST Input Tax Credit Mock Paper", subject: "GST", marks: 100, duration: 180, status: "Scheduled" },
  ]);
  const [testMessage, setTestMessage] = useState("");

  // Announcements publisher states
  const [annTitle, setAnnTitle] = useState("");
  const [annMessageBody, setAnnMessageBody] = useState("");
  const [announcementsList, setAnnouncementsList] = useState([
    { id: 1, title: "CA Foundation Mock Quiz Grade Updates", body: "Grades for Trial Ledger quiz are now posted inside your Student Portal accounts.", date: "Today, 10:15 AM" },
    { id: 2, title: "GST Filing Workshop Zoom Schedule", body: "Live Zoom links are updated under the live section of portal for tomorrow's session.", date: "Yesterday, 3:40 PM" },
  ]);
  const [annSuccessMsg, setAnnSuccessMsg] = useState("");

  // Live Classes Scheduler states
  const [liveTitle, setLiveTitle] = useState("");
  const [liveSubject, setLiveSubject] = useState("Accounting");
  const [liveTime, setLiveTime] = useState("");
  const [liveClassesList, setLiveClassesList] = useState([
    { id: 1, title: "Principles of Consignment Accounting", subject: "Accounting", time: "Today, 09:30 AM - 11:00 AM", status: "Completed" },
    { id: 2, title: "GST Voucher Ledger Audits", subject: "GST", time: "Tomorrow, 11:30 AM - 01:00 PM", status: "Scheduled" },
  ]);
  const [liveSuccessMsg, setLiveSuccessMsg] = useState("");

  // AI Question Paper Generator States
  const [aiPaperSubject, setAiPaperSubject] = useState("Accounting");
  const [aiPaperMarks, setAiPaperMarks] = useState("50");
  const [aiPaperDifficulty, setAiPaperDifficulty] = useState("Intermediate");
  const [aiPaperTopic, setAiPaperTopic] = useState("");
  const [aiPaperResult, setAiPaperResult] = useState("");
  const [isGeneratingPaper, setIsGeneratingPaper] = useState(false);
  const [copiedPaper, setCopiedPaper] = useState(false);

  // AI MCQ Generator States
  const [aiMcqSubject, setAiMcqSubject] = useState("Accounting");
  const [aiMcqCount, setAiMcqCount] = useState("5");
  const [aiMcqTopic, setAiMcqTopic] = useState("");
  const [aiMcqResult, setAiMcqResult] = useState<Array<{ q: string; a: string; b: string; c: string; d: string; ans: string; exp: string }>>([]);
  const [isGeneratingMcqs, setIsGeneratingMcqs] = useState(false);

  // AI Revision Notes Generator States
  const [aiNotesSubject, setAiNotesSubject] = useState("Accounting");
  const [aiNotesTopic, setAiNotesTopic] = useState("");
  const [aiNotesResult, setAiNotesResult] = useState("");
  const [isGeneratingNotes, setIsGeneratingNotes] = useState(false);
  const [copiedNotes, setCopiedNotes] = useState(false);

  // Diagnostic select filters
  const [selectedDiagSubject, setSelectedDiagSubject] = useState("All Subjects");

  // Authentication logic
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);

    setTimeout(() => {
      if (loginEmail === "faculty@krithun.com" && loginPassword === "password") {
        setIsLoggedIn(true);
      } else {
        setLoginError("Invalid credentials. Use faculty@krithun.com / password.");
      }
      setIsLoggingIn(false);
    }, 1000);
  };

  const markAllNotificationsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  // Toggle present/absent roster
  const toggleRoster = (id: string) => {
    setAttendanceRoster(attendanceRoster.map(s => {
      if (s.id === id) {
        return { ...s, present: !s.present };
      }
      return s;
    }));
  };

  // Save attendance log simulation
  const saveAttendanceRoster = () => {
    setAttendanceSaveMessage("Student Attendance Register saved successfully!");
    setTimeout(() => setAttendanceSaveMessage(""), 3000);
  };

  // Grading logic
  const submitGrade = (id: string) => {
    const score = gradeInput[id];
    if (!score || isNaN(Number(score))) {
      setGradingSuccessMessage("Please input a valid numeric grade.");
      return;
    }
    setAssignments(assignments.map(a => {
      if (a.id === id) {
        return { ...a, score, graded: true };
      }
      return a;
    }));
    setGradingSuccessMessage(`Grade saved successfully for assignment A-${id}!`);
    setTimeout(() => setGradingSuccessMessage(""), 3000);
  };

  // Material upload simulation
  const uploadMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!materialTitle.trim()) return;

    const newMaterial = {
      id: Date.now(),
      title: materialTitle,
      subject: materialSubject,
      category: materialCategory,
      date: "Today",
      size: "4.5 MB",
    };

    setMaterialUploadedList([newMaterial, ...materialUploadedList]);
    setMaterialTitle("");
    setMaterialMessage("Syllabus material uploaded successfully!");
    setTimeout(() => setMaterialMessage(""), 3000);
  };

  // Mock Test Creation Simulation
  const createMockTest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testTitle.trim()) return;

    const newTest = {
      id: Date.now(),
      title: testTitle,
      subject: testSubject,
      marks: Number(testMarks),
      duration: Number(testDuration),
      status: "Active",
    };

    setCreatedTests([newTest, ...createdTests]);
    setTestTitle("");
    setTestMessage("Mock test quiz deployed successfully!");
    setTimeout(() => setTestMessage(""), 3000);
  };

  // Announcement publisher simulation
  const createAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!annTitle.trim() || !annMessageBody.trim()) return;

    const newAnn = {
      id: Date.now(),
      title: annTitle,
      body: annMessageBody,
      date: "Today, Just now",
    };

    setAnnouncementsList([newAnn, ...announcementsList]);
    setAnnTitle("");
    setAnnMessageBody("");
    setAnnSuccessMsg("Announcement published to all student portals!");
    setTimeout(() => setAnnSuccessMsg(""), 3000);
  };

  // Live class zoom scheduler simulation
  const scheduleLiveClass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!liveTitle.trim() || !liveTime.trim()) return;

    const newClass = {
      id: Date.now(),
      title: liveTitle,
      subject: liveSubject,
      time: liveTime,
      status: "Scheduled",
    };

    setLiveClassesList([newClass, ...liveClassesList]);
    setLiveTitle("");
    setLiveTime("");
    setLiveSuccessMsg("Live interactive class session scheduled and synced with student calendars!");
    setTimeout(() => setLiveSuccessMsg(""), 3000);
  };

  // AI Question Paper Generator Simulation
  const handleGeneratePaper = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGeneratingPaper(true);
    setAiPaperResult("");

    setTimeout(() => {
      let resultKey = `${aiPaperSubject}_${aiPaperMarks}`;
      if (!prebuiltPapers[resultKey]) {
        resultKey = "Accounting_50";
      }

      let text = prebuiltPapers[resultKey];
      if (aiPaperTopic) {
        text = text.replace("Mock Examination", `Mock Examination: ${aiPaperTopic}`);
      }

      setAiPaperResult(text);
      setIsGeneratingPaper(false);
    }, 1500);
  };

  // AI MCQ Generator Simulation
  const handleGenerateMcqs = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGeneratingMcqs(true);
    setAiMcqResult([]);

    setTimeout(() => {
      const mockQuestions = [
        {
          q: "Which account is credited when abnormal loss occurs in Consignment accounts?",
          a: "Abnormal Loss Account",
          b: "Consignment Account",
          c: "Consignee Personal Account",
          d: "Trading Account",
          ans: "B",
          exp: "The value of abnormal loss is credited to the Consignment Account to deduce correct profits and debited to the Abnormal Loss Account.",
        },
        {
          q: "Under which GST filing forms do you match input tax credit (ITC) auto-drafted lists?",
          a: "GSTR-1",
          b: "GSTR-3B",
          c: "GSTR-2B",
          d: "GSTR-9",
          ans: "C",
          exp: "GSTR-2B is the auto-drafted static ITC ledger statement used for reconciliation with ledger purchases.",
        },
        {
          q: "Disallowance rates under Section 40(a)(ia) of the Income Tax Act for TDS defaults on residents is set at:",
          a: "10% of expenditure",
          b: "30% of expenditure",
          c: "100% of expenditure",
          d: "50% of expenditure",
          ans: "B",
          exp: "Section 40(a)(ia) disallows 30% of any payment made to residents where TDS was not deducted or paid on time.",
        },
      ];

      setAiMcqResult(mockQuestions);
      setIsGeneratingMcqs(false);
    }, 1500);
  };

  // AI Revision Notes Generator Simulation
  const handleGenerateNotes = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiNotesTopic.trim()) return;
    setIsGeneratingNotes(true);
    setAiNotesResult("");

    setTimeout(() => {
      const generated = `# Revision Quick Sheets: ${aiNotesTopic}
---
### 1. Fundamental Definition
- Core context outlines target definitions from standard ICAI modules.
- Formulates basic legal codes or double entry adjustments (e.g. accounting standards compliance criteria).

### 2. High-Yield Summary
- **Key Regulation Code**: Standardized act guidelines (e.g. Section rates, input credits reconciliation rules).
- **Accounting Adjustment**:
  \`\`\`text
  Adjustments Account .................... Dr.
      To Trading Ledger Account ............................ Cr.
  \`\`\`
- **Critical Threshold**: 100% accuracy in matching invoice values.

### 3. Exam Problem Checklist
- [x] Check for transit additions.
- [ ] Reconcile supplier filing timings.
- [ ] Draft final balance sheet impact.`;

      setAiNotesResult(generated);
      setIsGeneratingNotes(false);
    }, 1500);
  };

  const copyToClipboard = (text: string, type: "paper" | "notes") => {
    navigator.clipboard.writeText(text);
    if (type === "paper") {
      setCopiedPaper(true);
      setTimeout(() => setCopiedPaper(false), 1500);
    } else {
      setCopiedNotes(true);
      setTimeout(() => setCopiedNotes(false), 1500);
    }
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "attendance", label: "Student Attendance", icon: ClipboardList },
    { id: "assignments", label: "Assignments & Grading", icon: CheckSquare },
    { id: "question-bank", label: "Question Bank", icon: BookOpenCheck },
    { id: "upload", label: "Study Material Upload", icon: Upload },
    { id: "mock-test", label: "Mock Test Creation", icon: Target },
    { id: "reports", label: "Performance Reports", icon: TrendingUp },
    { id: "announcements", label: "Announcements", icon: Bell },
    { id: "live", label: "Live Classes", icon: Radio },
    { id: "profile", label: "Faculty Profile", icon: User },
    { id: "ai-paper", label: "AI Question Generator", icon: BrainCircuit, isAi: true },
    { id: "ai-mcq", label: "AI MCQ Generator", icon: BrainCircuit, isAi: true },
    { id: "ai-notes", label: "AI Notes Generator", icon: BrainCircuit, isAi: true },
  ];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${
      isDarkMode ? "bg-[#09182F] text-slate-100" : "bg-slate-50 text-[#334155]"
    }`}>
      
      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          
          // ==========================================================
          // FACULTY PORTAL LOGIN GATE
          // ==========================================================
          <motion.div
            key="login-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#0A1D3D] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(208,156,52,0.12),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,29,61,0.5),transparent_50%)] pointer-events-none" />

            <div className="w-full max-w-md space-y-8 relative z-10">
              
              <div className="text-center">
                <Link href="/" className="inline-flex items-center gap-2 text-[#D09C34] hover:underline font-bold text-xs uppercase tracking-wide mb-6">
                  <ArrowLeft size={16} />
                  <span>Back to Home</span>
                </Link>
                
                <div className="mx-auto h-16 w-56 relative flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-4 mb-4">
                  <div className="text-white font-heading font-extrabold tracking-widest text-sm uppercase flex items-center gap-2">
                    <span className="text-[#D09C34]">KRITHUN</span>
                    <span>FACULTY</span>
                  </div>
                </div>
                <h2 className="text-3xl font-extrabold text-white tracking-tight uppercase font-heading">
                  Faculty Access Gate
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-300">
                  Manage batches, grade assignments, and launch AI revision generators.
                </p>
              </div>

              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-2xl relative text-left">
                {loginError && (
                  <div className="mb-4 p-3 bg-red-55 border border-red-100 text-red-600 text-xs rounded-xl flex items-center gap-2 font-bold uppercase">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{loginError}</span>
                  </div>
                )}

                <form className="space-y-5" onSubmit={handleLogin}>
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Faculty Email</label>
                    <div className="relative">
                      <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#0A1D3D] rounded-xl py-3 pl-10 pr-4 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0A1D3D]"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Password</label>
                    </div>
                    <div className="relative">
                      <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="password"
                        required
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#0A1D3D] rounded-xl py-3 pl-10 pr-4 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0A1D3D]"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <Button
                      type="submit"
                      disabled={isLoggingIn}
                      className="w-full bg-[#0A1D3D] hover:bg-[#D09C34] text-white font-bold text-xs uppercase tracking-wider h-13 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-lg hover:shadow-xl"
                    >
                      {isLoggingIn ? (
                        <span>Authenticating...</span>
                      ) : (
                        <>
                          <span>Secure Login</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 text-white" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>

                <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Faculty Portal Demo Credentials</p>
                  <p className="text-[11px] text-slate-500 mt-1 font-mono">
                    faculty@krithun.com / password
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        ) : (
          
          // ==========================================================
          // FACULTY PORTAL APPLICATION WORKSPACE
          // ==========================================================
          <motion.div
            key="faculty-portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex min-h-screen relative"
          >
            
            {/* 1. Sidebar Navigation */}
            <aside
              className={`fixed inset-y-0 left-0 z-30 w-64 border-r flex flex-col justify-between transition-all duration-300 ease-in-out lg:translate-x-0 ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } ${
                isDarkMode 
                  ? "bg-[#0B1E36] border-slate-800 text-white" 
                  : "bg-white border-slate-200 text-slate-700"
              }`}
            >
              <div className="flex flex-col overflow-y-auto flex-1">
                {/* Sidebar Header */}
                <div className={`h-20 border-b px-6 flex items-center justify-between shrink-0 ${
                  isDarkMode ? "border-slate-800" : "border-slate-100"
                }`}>
                  <div className="font-heading font-extrabold tracking-widest text-sm uppercase flex items-center gap-2">
                    <span className="text-[#D09C34]">KRITHUN</span>
                    <span>FACULTY</span>
                  </div>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className={`p-1 rounded lg:hidden ${isDarkMode ? "hover:bg-white/5" : "hover:bg-slate-100"}`}
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Profile Widget */}
                <div className={`p-5 border-b flex items-center gap-3 shrink-0 ${
                  isDarkMode ? "border-slate-800" : "border-slate-100"
                }`}>
                  <div className="h-10 w-10 rounded-xl bg-[#D09C34] text-white font-extrabold flex items-center justify-center text-sm shadow-inner shrink-0 uppercase">
                    SL
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className={`text-xs font-bold truncate leading-none ${isDarkMode ? "text-white" : "text-slate-800"}`}>CA Swathi Lakshmi</p>
                    <p className="text-[9px] text-slate-400 font-semibold mt-1 uppercase tracking-wider">Auditing & Tax Lead</p>
                  </div>
                </div>

                {/* Sidebar Nav Items */}
                <nav className="flex-1 py-4 px-3 space-y-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        if (window.innerWidth < 1024) {
                          setIsSidebarOpen(false);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 ${
                        activeTab === item.id
                          ? "bg-[#D09C34] text-white shadow-md"
                          : isDarkMode
                            ? "text-slate-300 hover:bg-white/5 hover:text-white"
                            : "text-slate-600 hover:bg-slate-100 hover:text-[#0A1D3D]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon size={16} className={activeTab === item.id ? "text-white" : "text-[#D09C34]"} />
                        <span>{item.label}</span>
                      </div>
                      
                      {item.isAi && (
                        <span className="bg-[#D09C34]/20 text-[#D09C34] border border-[#D09C34]/30 font-bold text-[8px] px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                          AI Tool
                        </span>
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Sidebar Footer */}
              <div className={`p-4 border-t shrink-0 ${isDarkMode ? "border-slate-800" : "border-slate-100"}`}>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-red-500/10 hover:bg-red-50 text-red-400 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300"
                >
                  <LogOut size={16} />
                  <span>Secure Logout</span>
                </button>
              </div>
            </aside>

            {/* Mobile backdrop */}
            {isSidebarOpen && (
              <div
                onClick={() => setIsSidebarOpen(false)}
                className="fixed inset-0 bg-[#0A1D3D]/30 backdrop-blur-sm z-20 lg:hidden"
              />
            )}

            {/* 2. Main content area */}
            <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
              
              {/* Header */}
              <header className={`h-20 border-b px-6 flex items-center justify-between sticky top-0 z-10 shadow-sm shrink-0 transition-colors ${
                isDarkMode ? "border-slate-800 bg-[#0A1D3D]/95 backdrop-blur" : "border-slate-200 bg-white"
              }`}>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className={`p-2 rounded-lg lg:hidden border ${
                      isDarkMode ? "border-slate-800 text-white" : "border-slate-200 text-slate-600"
                    }`}
                  >
                    <Menu size={20} />
                  </button>
                  <h1 className={`text-lg font-bold uppercase tracking-wider font-heading ${
                    isDarkMode ? "text-white" : "text-[#0A1D3D]"
                  }`}>
                    {menuItems.find((item) => item.id === activeTab)?.label}
                  </h1>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`p-2 rounded-lg border transition-colors ${
                      isDarkMode ? "border-slate-800 hover:bg-white/5 text-[#D09C34]" : "border-slate-200 hover:bg-slate-50 text-[#0A1D3D]"
                    }`}
                  >
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                  
                  <div className={`h-8 w-px ${isDarkMode ? "bg-slate-800" : "bg-slate-200"}`} />
                  <div className="flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-lg bg-[#D09C34] text-white font-bold text-xs flex items-center justify-center">
                      SL
                    </div>
                    <span className={`hidden sm:inline text-xs font-bold ${isDarkMode ? "text-slate-200" : "text-slate-700"}`}>CA Swathi Lakshmi</span>
                  </div>
                </div>
              </header>

              {/* Workspace contents */}
              <div className="flex-1 p-6 sm:p-8 max-w-7xl w-full mx-auto space-y-8">
                
                {/* ========================================================== */}
                {/* TAB CONTENT: DASHBOARD OVERVIEW */}
                {/* ========================================================== */}
                {activeTab === "dashboard" && (
                  <div className="space-y-8 text-left">
                    {/* Welcome Banner */}
                    <div className="bg-[#0A1D3D] text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-[#D09C34]/20 shadow-lg">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(208,156,52,0.1),transparent_50%)] pointer-events-none" />
                      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="space-y-2">
                          <h2 className="font-heading text-2xl sm:text-3.5xl font-extrabold uppercase">Good morning, Swathi!</h2>
                          <p className="text-slate-300 text-xs sm:text-sm font-normal max-w-lg leading-relaxed font-sans">
                            All batch reports are compiled. You have 2 pending assignments to grade and a live Zoom workshop starting in 2 hours.
                          </p>
                        </div>
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/10 rounded-2xl border border-white/10 text-xs font-bold uppercase tracking-wider text-[#D09C34]">
                          <Sparkles size={14} />
                          <span>Active Batch: Nov 2026</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      
                      {/* Total Students */}
                      <div className={`border rounded-2xl p-6 shadow-sm flex flex-col justify-between h-40 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <div className="flex justify-between items-start">
                          <div className="h-10 w-10 rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] flex items-center justify-center shrink-0">
                            <Users size={18} />
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Active Students</span>
                        </div>
                        <div className="space-y-1">
                          <p className={`text-3xl font-black leading-none ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>120 Students</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Across 3 courses</p>
                        </div>
                      </div>

                      {/* Weekly Hours */}
                      <div className={`border rounded-2xl p-6 shadow-sm flex flex-col justify-between h-40 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <div className="flex justify-between items-start">
                          <div className="h-10 w-10 rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] flex items-center justify-center shrink-0">
                            <Clock size={18} />
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Weekly Hours</span>
                        </div>
                        <div className="space-y-1">
                          <p className={`text-3xl font-black leading-none ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>18.5 hrs</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Live classes & audits</p>
                        </div>
                      </div>

                      {/* Pending Grades */}
                      <div className={`border rounded-2xl p-6 shadow-sm flex flex-col justify-between h-40 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <div className="flex justify-between items-start">
                          <div className="h-10 w-10 rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] flex items-center justify-center shrink-0">
                            <CheckSquare size={18} />
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Pending Grades</span>
                        </div>
                        <div className="space-y-1">
                          <p className={`text-3xl font-black leading-none ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>2 Reviews</p>
                          <p className="text-[10px] text-[#D09C34] font-bold uppercase mt-1">Click Assignments tab to grade</p>
                        </div>
                      </div>

                      {/* Center Success index */}
                      <div className={`border rounded-2xl p-6 shadow-sm flex flex-col justify-between h-40 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <div className="flex justify-between items-start">
                          <div className="h-10 w-10 rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] flex items-center justify-center shrink-0">
                            <TrendingUp size={18} />
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Batch Success Rate</span>
                        </div>
                        <div className="space-y-1">
                          <p className={`text-3xl font-black leading-none ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>94.2%</p>
                          <p className="text-[10px] text-green-500 font-bold uppercase mt-1">Compared to ICAI standard average</p>
                        </div>
                      </div>

                    </div>

                    {/* Timeline & Announcement splits */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Timeline (8 Columns) */}
                      <div className={`lg:col-span-8 border p-6 sm:p-8 rounded-3xl shadow-sm space-y-6 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <h3 className={`font-heading text-lg font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Today's Teaching Timeline</h3>
                        
                        <div className="relative border-l border-slate-200 pl-6 ml-3 space-y-8">
                          <div className="relative">
                            <span className="absolute -left-[30px] top-1 h-4 w-4 bg-[#D09C34] rounded-full border-4 border-white ring-2 ring-slate-200" />
                            <div>
                              <span className="text-[10px] font-bold text-slate-400 bg-slate-100 py-1 px-2 rounded uppercase font-mono">09:30 AM - 11:00 AM</span>
                              <h4 className={`font-heading text-base font-bold uppercase mt-2 ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>GST Invoice & Credit Reconciliations</h4>
                              <p className="text-slate-400 text-xs mt-1">Status: Completed • Target Course: CA Intermediate G1</p>
                            </div>
                          </div>

                          <div className="relative">
                            <span className="absolute -left-[30px] top-1 h-4 w-4 bg-red-500 rounded-full border-4 border-white ring-2 ring-red-100 animate-pulse" />
                            <div>
                              <span className="text-[10px] font-bold text-red-600 bg-red-50 py-1 px-2 rounded uppercase font-mono">11:30 AM - 01:00 PM • LIVE</span>
                              <h4 className={`font-heading text-base font-bold uppercase mt-2 ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Section 40(a) TDS Penalties Case Studies</h4>
                              <p className="text-slate-400 text-xs mt-1">Status: Active now • Target Course: CA Foundation Regular</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Announcements list quick-view (4 Columns) */}
                      <div className={`lg:col-span-4 border p-6 rounded-3xl shadow-sm space-y-6 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <h3 className={`font-heading text-lg font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Latest Center Feeds</h3>
                        <div className="space-y-4">
                          {announcementsList.map((ann) => (
                            <div key={ann.id} className={`p-4 rounded-2xl border ${
                              isDarkMode ? "bg-[#0A1D3D]/50 border-slate-800" : "bg-slate-50 border-slate-200"
                            }`}>
                              <h4 className={`text-xs font-bold uppercase tracking-wide ${isDarkMode ? "text-[#D09C34]" : "text-[#0A1D3D]"}`}>{ann.title}</h4>
                              <p className="text-[11px] text-slate-400 leading-relaxed mt-2.5">{ann.body}</p>
                              <p className="text-[9px] text-slate-505 font-semibold mt-3 uppercase tracking-wider">{ann.date}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: STUDENT ATTENDANCE */}
                {/* ========================================================== */}
                {activeTab === "attendance" && (
                  <div className={`border p-6 sm:p-8 rounded-3xl shadow-sm text-left space-y-6 ${
                    isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                  }`}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h3 className={`font-heading text-xl font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Student Attendance Registry</h3>
                        <p className="text-slate-400 text-xs mt-0.5">Toggle Present/Absent status for Nov 2026 Batch roster</p>
                      </div>
                      <div className="flex gap-3">
                        <Button 
                          onClick={saveAttendanceRoster}
                          className="bg-[#D09C34] hover:bg-[#0A1D3D] text-white px-5 h-10 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
                        >
                          Save Register Logs
                        </Button>
                      </div>
                    </div>

                    {attendanceSaveMessage && (
                      <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-500 text-xs rounded-xl flex items-center gap-2 font-bold uppercase">
                        <CheckCircle2 size={14} />
                        <span>{attendanceSaveMessage}</span>
                      </div>
                    )}

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className={`text-[10px] font-bold text-slate-400 uppercase border-b ${
                            isDarkMode ? "border-slate-800 bg-[#0A1D3D]/30" : "border-slate-100 bg-slate-55"
                          }`}>
                            <th className="py-4 px-6 text-center w-24">Reg No</th>
                            <th className="py-4 px-6 text-left">Student Name</th>
                            <th className="py-4 px-6 text-center w-40">Attendance Ratio</th>
                            <th className="py-4 px-6 text-center w-36">Present Check</th>
                            <th className="py-4 px-6 text-center w-40">Status</th>
                          </tr>
                        </thead>
                        <tbody className={`text-xs font-semibold divide-y ${
                          isDarkMode ? "text-slate-300 divide-slate-800" : "text-slate-600 divide-slate-100"
                        }`}>
                          {attendanceRoster.map((student) => (
                            <tr key={student.id}>
                              <td className="py-4 px-6 text-center font-mono">{student.reg}</td>
                              <td className="py-4 px-6 font-bold">{student.name}</td>
                              <td className="py-4 px-6 text-center">{student.attendancePct}</td>
                              <td className="py-4 px-6 text-center">
                                <input
                                  type="checkbox"
                                  checked={student.present}
                                  onChange={() => toggleRoster(student.id)}
                                  className="h-4 w-4 text-[#D09C34] focus:ring-[#D09C34] border-slate-300 rounded cursor-pointer"
                                />
                              </td>
                              <td className="py-4 px-6 text-center">
                                <span className={`inline-block py-1 px-2.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                                  student.present ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"
                                }`}>
                                  {student.present ? "Present" : "Absent"}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: ASSIGNMENTS & GRADING */}
                {/* ========================================================== */}
                {activeTab === "assignments" && (
                  <div className={`border p-6 sm:p-8 rounded-3xl shadow-sm text-left space-y-6 ${
                    isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                  }`}>
                    <div>
                      <h3 className={`font-heading text-xl font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Assigned Worksheets & Grading</h3>
                      <p className="text-slate-400 text-xs mt-0.5">Submit marks for student submissions</p>
                    </div>

                    {gradingSuccessMessage && (
                      <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-[#D09C34] text-xs rounded-xl flex items-center gap-2 font-bold uppercase">
                        <CheckCircle2 size={14} />
                        <span>{gradingSuccessMessage}</span>
                      </div>
                    )}

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className={`text-[10px] font-bold text-slate-400 uppercase border-b ${
                            isDarkMode ? "border-slate-800 bg-[#0A1D3D]/30" : "border-slate-100 bg-slate-55"
                          }`}>
                            <th className="py-4 px-6 text-left">Assignment Topic</th>
                            <th className="py-4 px-6 text-left">Student</th>
                            <th className="py-4 px-6 text-left">Subject</th>
                            <th className="py-4 px-6 text-center w-40">Grade Score</th>
                            <th className="py-4 px-6 text-center w-36">Actions</th>
                          </tr>
                        </thead>
                        <tbody className={`text-xs font-semibold divide-y ${
                          isDarkMode ? "text-slate-300 divide-slate-800" : "text-slate-600 divide-slate-100"
                        }`}>
                          {assignments.map((row) => (
                            <tr key={row.id}>
                              <td className="py-4 px-6 font-bold">{row.title}</td>
                              <td className="py-4 px-6">{row.student}</td>
                              <td className="py-4 px-6">{row.subject}</td>
                              <td className="py-4 px-6 text-center">
                                {row.graded ? (
                                  <span className="font-bold text-green-600">{row.score} / {row.max}</span>
                                ) : (
                                  <div className="flex items-center gap-2 justify-center">
                                    <input
                                      type="text"
                                      placeholder="Marks"
                                      value={gradeInput[row.id] || ""}
                                      onChange={(e) => setGradeInput({ ...gradeInput, [row.id]: e.target.value })}
                                      className={`border rounded-lg py-1 px-2.5 text-center text-xs font-bold w-16 focus:outline-none focus:border-[#D09C34] ${
                                        isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-white border-slate-200 text-slate-800"
                                      }`}
                                    />
                                    <span className="text-slate-400 font-bold">/ {row.max}</span>
                                  </div>
                                )}
                              </td>
                              <td className="py-4 px-6 text-center">
                                {row.graded ? (
                                  <span className="text-[10px] text-slate-400 font-bold uppercase">Graded</span>
                                ) : (
                                  <Button
                                    onClick={() => submitGrade(row.id)}
                                    className="bg-[#0A1D3D] hover:bg-[#D09C34] text-white py-1 px-3.5 h-8 text-[10px] font-bold uppercase tracking-wider rounded-xl cursor-pointer"
                                  >
                                    Submit
                                  </Button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: QUESTION BANK */}
                {/* ========================================================== */}
                {activeTab === "question-bank" && (
                  <div className={`border p-6 sm:p-8 rounded-3xl shadow-sm text-left space-y-6 ${
                    isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                  }`}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h3 className={`font-heading text-xl font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Syllabus Question Bank</h3>
                        <p className="text-slate-400 text-xs mt-0.5">Database of active commerce question blocks</p>
                      </div>
                      <div className="relative shrink-0">
                        <select className={`font-bold uppercase text-[10px] rounded-xl py-2 px-3.5 pr-8 appearance-none focus:outline-none focus:border-[#D09C34] cursor-pointer ${
                          isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-[#0A1D3D]"
                        }`}>
                          <option>Accounting (24 questions)</option>
                          <option>GST Indirect Taxes (18 questions)</option>
                          <option>Income Tax (15 questions)</option>
                        </select>
                        <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        { q: "Detail the distinction between Normal Loss and Abnormal Loss in consignment accounts. Write down the accounting treatment for abnormal loss values when claims are admitted.", sub: "Accounting", chap: "Chapter 4: Consignment" },
                        { q: "Explain Reverse Charge Mechanism (RCM) as mandated under the CGST Act 2017. List down 3 services where tax liability falls on the service recipient.", sub: "GST Indirect Tax", chap: "Chapter 2: Supply & RCM" },
                        { q: "Under what scenarios do TDS disallowances trigger under Section 40(a)(ia) of the Income Tax Act 1961? State subsequent allowance parameters.", sub: "Income Tax", chap: "Chapter 5: Business Profits" },
                      ].map((item, idx) => (
                        <div key={idx} className={`p-5 rounded-2xl border relative overflow-hidden ${
                          isDarkMode ? "bg-[#0A1D3D]/40 border-slate-800" : "bg-slate-50 border-slate-100"
                        }`}>
                          <div className="flex justify-between items-start gap-4">
                            <span className="py-1 px-2.5 bg-[#D09C34]/10 border border-[#D09C34]/20 rounded text-[9px] font-bold uppercase text-[#D09C34]">Q-{idx + 1}</span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.chap}</span>
                          </div>
                          <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${isDarkMode ? "text-slate-200" : "text-[#334155]"}`}>{item.q}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: STUDY MATERIAL UPLOAD */}
                {/* ========================================================== */}
                {activeTab === "upload" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                    
                    {/* Upload Form (5 Columns) */}
                    <div className={`lg:col-span-5 border p-6 rounded-3xl shadow-sm space-y-6 ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <h3 className={`font-heading text-lg font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Upload Material</h3>
                      
                      {materialMessage && (
                        <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-500 text-xs rounded-xl flex items-center gap-2 font-bold uppercase">
                          <CheckCircle2 size={14} />
                          <span>{materialMessage}</span>
                        </div>
                      )}

                      <form onSubmit={uploadMaterial} className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Document Title</label>
                          <input
                            type="text"
                            required
                            placeholder="Consignment Abnormal Loss Excel Template"
                            value={materialTitle}
                            onChange={(e) => setMaterialTitle(e.target.value)}
                            className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] ${
                              isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
                            }`}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subject Track</label>
                          <select
                            value={materialSubject}
                            onChange={(e) => setMaterialSubject(e.target.value)}
                            className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] cursor-pointer ${
                              isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-[#0A1D3D]"
                            }`}
                          >
                            <option value="Accounting">Accounting</option>
                            <option value="GST">GST Indirect Taxes</option>
                            <option value="Income Tax">Income Tax</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Category</label>
                          <select
                            value={materialCategory}
                            onChange={(e) => setMaterialCategory(e.target.value)}
                            className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] cursor-pointer ${
                              isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-[#0A1D3D]"
                            }`}
                          >
                            <option value="Handouts">Handouts</option>
                            <option value="Reference Books">Reference Books</option>
                            <option value="Worksheets">Worksheets</option>
                          </select>
                        </div>

                        <div className={`p-6 border border-dashed rounded-xl text-center space-y-2 cursor-pointer hover:border-[#D09C34] transition-colors ${
                          isDarkMode ? "bg-[#09182F] border-slate-800" : "bg-slate-50 border-slate-200"
                        }`}>
                          <Upload size={20} className="mx-auto text-[#D09C34]" />
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Drag & drop files here</p>
                          <p className="text-[9px] text-slate-500 font-semibold uppercase">PDF, XLS up to 25MB</p>
                        </div>

                        <Button type="submit" className="w-full bg-[#D09C34] hover:bg-[#0A1D3D] text-white py-3 h-11 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer">
                          Publish Document
                        </Button>
                      </form>
                    </div>

                    {/* Uploaded lists (7 Columns) */}
                    <div className={`lg:col-span-7 border p-6 rounded-3xl shadow-sm space-y-6 ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <h3 className={`font-heading text-lg font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Uploaded Materials Logs</h3>
                      
                      <div className="divide-y divide-slate-100/10">
                        {materialUploadedList.map((doc) => (
                          <div key={doc.id} className="py-4 flex justify-between items-center gap-4">
                            <div>
                              <h4 className={`text-sm font-bold uppercase ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>{doc.title}</h4>
                              <p className="text-slate-400 text-[10px] mt-1 font-semibold uppercase tracking-wider">{doc.subject} • {doc.category} • Size: {doc.size}</p>
                            </div>
                            <span className="text-[9px] font-bold text-green-700 bg-green-50 border border-green-100 py-1 px-2.5 rounded-full uppercase shrink-0">Active</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: MOCK TEST CREATION */}
                {/* ========================================================== */}
                {activeTab === "mock-test" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                    
                    {/* Setup Form (5 Columns) */}
                    <div className={`lg:col-span-5 border p-6 rounded-3xl shadow-sm space-y-6 ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <h3 className={`font-heading text-lg font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Create Mock Quiz</h3>
                      
                      {testMessage && (
                        <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-500 text-xs rounded-xl flex items-center gap-2 font-bold uppercase">
                          <CheckCircle2 size={14} />
                          <span>{testMessage}</span>
                        </div>
                      )}

                      <form onSubmit={createMockTest} className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Test Title</label>
                          <input
                            type="text"
                            required
                            placeholder="Trial Balance & Ledgers Assessment"
                            value={testTitle}
                            onChange={(e) => setTestTitle(e.target.value)}
                            className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] ${
                              isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
                            }`}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Marks</label>
                            <input
                              type="number"
                              required
                              value={testMarks}
                              onChange={(e) => setTestMarks(e.target.value)}
                              className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] ${
                                isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
                              }`}
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Duration (Mins)</label>
                            <input
                              type="number"
                              required
                              value={testDuration}
                              onChange={(e) => setTestDuration(e.target.value)}
                              className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] ${
                                isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
                              }`}
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subject</label>
                          <select
                            value={testSubject}
                            onChange={(e) => setTestSubject(e.target.value)}
                            className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] cursor-pointer ${
                              isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-[#0A1D3D]"
                            }`}
                          >
                            <option value="Accounting">Accounting</option>
                            <option value="GST">GST Indirect Taxes</option>
                            <option value="Income Tax">Income Tax</option>
                          </select>
                        </div>

                        <Button type="submit" className="w-full bg-[#D09C34] hover:bg-[#0A1D3D] text-white py-3 h-11 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer">
                          Deploy Mock Paper
                        </Button>
                      </form>
                    </div>

                    {/* Active Tests (7 Columns) */}
                    <div className={`lg:col-span-7 border p-6 rounded-3xl shadow-sm space-y-6 ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <h3 className={`font-heading text-lg font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Deployed Mock Tests</h3>
                      
                      <div className="divide-y divide-slate-100/10">
                        {createdTests.map((t) => (
                          <div key={t.id} className="py-4 flex justify-between items-center gap-4">
                            <div>
                              <h4 className={`text-sm font-bold uppercase ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>{t.title}</h4>
                              <p className="text-slate-400 text-[10px] mt-1 font-semibold uppercase tracking-wider">{t.subject} • Marks: {t.marks} • Duration: {t.duration} Mins</p>
                            </div>
                            <span className={`text-[9px] font-bold border py-1 px-2.5 rounded-full uppercase shrink-0 ${
                              t.status === "Active" ? "bg-green-50 text-green-700 border-green-100" : "bg-yellow-50 text-yellow-700 border-yellow-100"
                            }`}>{t.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: PERFORMANCE REPORTS */}
                {/* ========================================================== */}
                {activeTab === "reports" && (
                  <div className="space-y-8 text-left">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Overall Center Performance (8 Columns) */}
                      <div className={`lg:col-span-8 border p-6 sm:p-8 rounded-3xl shadow-sm space-y-6 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div>
                            <h3 className={`font-heading text-lg font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Class Grade Analytics</h3>
                            <p className="text-slate-400 text-xs mt-0.5">Average scoring master indices across active batches</p>
                          </div>
                          <div className="relative shrink-0">
                            <select
                              value={selectedDiagSubject}
                              onChange={(e) => setSelectedDiagSubject(e.target.value)}
                              className={`font-bold uppercase text-[10px] rounded-xl py-2 px-3.5 pr-8 appearance-none focus:outline-none focus:border-[#D09C34] cursor-pointer ${
                                isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-[#0A1D3D]"
                              }`}
                            >
                              <option value="All Subjects">All Subjects</option>
                              <option value="Accounting">Accounting</option>
                              <option value="GST">GST Indirect Taxes</option>
                            </select>
                            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500" />
                          </div>
                        </div>

                        <div className="space-y-4">
                          {[
                            { name: "Accounting Standards Mastery", pct: 86, color: "bg-green-600" },
                            { name: "GST ITC GSTR-2B Reconciliation accuracy", pct: 82, color: "bg-green-600" },
                            { name: "Section 40(a) Tax code application", pct: 75, color: "bg-blue-600" },
                            { name: "Contract Law Offer validity test", pct: 89, color: "bg-green-600" },
                          ].map((item) => (
                            <div key={item.name} className="space-y-1.5 p-3 bg-slate-50/5 border border-slate-100/5 rounded-2xl">
                              <div className="flex justify-between items-center text-xs font-bold">
                                <span className={isDarkMode ? "text-slate-200" : "text-slate-700"}>{item.name}</span>
                                <span className="text-[#D09C34]">{item.pct}%</span>
                              </div>
                              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                                <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: AI Success Index predictions (4 Columns) */}
                      <div className={`lg:col-span-4 border p-6 rounded-3xl shadow-sm space-y-6 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <h3 className={`font-heading text-lg font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>AI Predictive Success</h3>
                        
                        <div className="space-y-4 text-center py-4">
                          <div className="h-28 w-28 mx-auto relative">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                              <path className="text-slate-100/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                              <path className="text-[#D09C34]" strokeWidth="3" strokeDasharray="94, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center text-xl font-black text-[#D09C34]">94%</div>
                          </div>
                          <div className="space-y-1">
                            <h4 className={`text-base font-bold uppercase ${isDarkMode ? "text-white" : "text-slate-800"}`}>Expected Pass Rate</h4>
                            <p className="text-[10px] text-slate-400 font-semibold uppercase leading-relaxed">Model evaluates class streak and average performance</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: ANNOUNCEMENTS */}
                {/* ========================================================== */}
                {activeTab === "announcements" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                    
                    {/* Setup Form (5 Columns) */}
                    <div className={`lg:col-span-5 border p-6 rounded-3xl shadow-sm space-y-6 ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <h3 className={`font-heading text-lg font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Publish Announcement</h3>
                      
                      {annSuccessMsg && (
                        <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-500 text-xs rounded-xl flex items-center gap-2 font-bold uppercase">
                          <CheckCircle2 size={14} />
                          <span>{annSuccessMsg}</span>
                        </div>
                      )}

                      <form onSubmit={createAnnouncement} className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Announcement Title</label>
                          <input
                            type="text"
                            required
                            placeholder="Special Taxation Session Timings"
                            value={annTitle}
                            onChange={(e) => setAnnTitle(e.target.value)}
                            className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] ${
                              isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
                            }`}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Message Body</label>
                          <textarea
                            rows={4}
                            required
                            placeholder="Type details to publish..."
                            value={annMessageBody}
                            onChange={(e) => setAnnMessageBody(e.target.value)}
                            className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] ${
                              isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
                            }`}
                          />
                        </div>

                        <Button type="submit" className="w-full bg-[#D09C34] hover:bg-[#0A1D3D] text-white py-3 h-11 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer">
                          Publish Feed Board
                        </Button>
                      </form>
                    </div>

                    {/* Active Announcements (7 Columns) */}
                    <div className={`lg:col-span-7 border p-6 rounded-3xl shadow-sm space-y-6 ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <h3 className={`font-heading text-lg font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Published Announcements</h3>
                      
                      <div className="space-y-4">
                        {announcementsList.map((ann) => (
                          <div key={ann.id} className={`p-5 rounded-2xl border ${
                            isDarkMode ? "bg-[#0A1D3D]/50 border-slate-800" : "bg-slate-50 border-slate-200"
                          }`}>
                            <h4 className={`text-xs font-bold uppercase ${isDarkMode ? "text-[#D09C34]" : "text-[#0A1D3D]"}`}>{ann.title}</h4>
                            <p className="text-[11px] text-slate-400 leading-relaxed mt-2.5">{ann.body}</p>
                            <p className="text-[9px] text-slate-500 font-semibold mt-3 uppercase tracking-wider">{ann.date}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: LIVE CLASSES TIMELINE */}
                {/* ========================================================== */}
                {activeTab === "live" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                    
                    {/* Setup Form (5 Columns) */}
                    <div className={`lg:col-span-5 border p-6 rounded-3xl shadow-sm space-y-6 ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <h3 className={`font-heading text-lg font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Schedule Live Class</h3>
                      
                      {liveSuccessMsg && (
                        <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-500 text-xs rounded-xl flex items-center gap-2 font-bold uppercase">
                          <CheckCircle2 size={14} />
                          <span>{liveSuccessMsg}</span>
                        </div>
                      )}

                      <form onSubmit={scheduleLiveClass} className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Class Title</label>
                          <input
                            type="text"
                            required
                            placeholder="GST Ledger Voucher Postings Practice"
                            value={liveTitle}
                            onChange={(e) => setLiveTitle(e.target.value)}
                            className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] ${
                              isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
                            }`}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subject Track</label>
                          <select
                            value={liveSubject}
                            onChange={(e) => setLiveSubject(e.target.value)}
                            className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] cursor-pointer ${
                              isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
                            }`}
                          >
                            <option value="Accounting">Accounting</option>
                            <option value="GST">GST Indirect Taxes</option>
                            <option value="Income Tax">Income Tax</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Date & Time Duration</label>
                          <input
                            type="text"
                            required
                            placeholder="Tomorrow, 11:30 AM - 01:00 PM"
                            value={liveTime}
                            onChange={(e) => setLiveTime(e.target.value)}
                            className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] ${
                              isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
                            }`}
                          />
                        </div>

                        <Button type="submit" className="w-full bg-[#D09C34] hover:bg-[#0A1D3D] text-white py-3 h-11 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer">
                          Sync Zoom Scheduler
                        </Button>
                      </form>
                    </div>

                    {/* Timeline Zoom Logs (7 Columns) */}
                    <div className={`lg:col-span-7 border p-6 rounded-3xl shadow-sm space-y-6 ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <h3 className={`font-heading text-lg font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Scheduled Zoom Sessions</h3>
                      
                      <div className="divide-y divide-slate-100/10">
                        {liveClassesList.map((session) => (
                          <div key={session.id} className="py-4 flex justify-between items-center gap-4">
                            <div>
                              <h4 className={`text-sm font-bold uppercase ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>{session.title}</h4>
                              <p className="text-slate-400 text-[10px] mt-1 font-semibold uppercase tracking-wider">{session.time} • Subject: {session.subject}</p>
                            </div>
                            <span className={`text-[9px] font-bold border py-1 px-2.5 rounded-full uppercase shrink-0 ${
                              session.status === "Scheduled" ? "bg-red-50 text-red-600 border-red-100" : "bg-slate-50 text-slate-505 border-slate-200"
                            }`}>{session.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: FACULTY PROFILE */}
                {/* ========================================================== */}
                {activeTab === "profile" && (
                  <div className={`border p-8 rounded-3xl shadow-sm text-left max-w-2xl mx-auto space-y-6 ${
                    isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                  }`}>
                    <h3 className={`font-heading text-lg font-bold uppercase ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Faculty Auditing Registry</h3>
                    
                    <div className="space-y-4 divide-y divide-slate-100/10">
                      <div className="flex justify-between py-2.5">
                        <span className="text-xs font-bold text-slate-400 uppercase">Registration ID</span>
                        <span className="text-xs font-mono font-bold text-[#D09C34]">KA-FAC-012</span>
                      </div>
                      <div className="flex justify-between py-2.5">
                        <span className="text-xs font-bold text-slate-400 uppercase">Full Name</span>
                        <span className={`text-xs font-bold ${isDarkMode ? "text-slate-200" : "text-[#0A1D3D]"}`}>CA Swathi Lakshmi</span>
                      </div>
                      <div className="flex justify-between py-2.5">
                        <span className="text-xs font-bold text-slate-400 uppercase">Specialization Tracks</span>
                        <span className={`text-xs font-bold ${isDarkMode ? "text-slate-200" : "text-[#0A1D3D]"}`}>Indirect Taxation (GST), Auditing Standards</span>
                      </div>
                      <div className="flex justify-between py-2.5">
                        <span className="text-xs font-bold text-slate-400 uppercase">Official Email</span>
                        <span className={`text-xs font-bold ${isDarkMode ? "text-slate-200" : "text-[#0A1D3D]"}`}>swathi@krithunacademy.com</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: AI QUESTION PAPER GENERATOR */}
                {/* ========================================================== */}
                {activeTab === "ai-paper" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                    
                    {/* Input configuration (5 Columns) */}
                    <div className={`lg:col-span-5 border p-6 rounded-3xl shadow-sm space-y-6 ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#D09C34]/10 rounded-full border border-[#D09C34]/20 text-[9px] font-bold uppercase tracking-wider text-[#D09C34]">
                          <BrainCircuit size={10} />
                          <span>AI Paper Generator</span>
                        </div>
                        <h3 className={`font-heading text-lg font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>AI Question Architect</h3>
                      </div>

                      <form onSubmit={handleGeneratePaper} className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Select Subject</label>
                          <select
                            value={aiPaperSubject}
                            onChange={(e) => setAiPaperSubject(e.target.value)}
                            className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] cursor-pointer ${
                              isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-[#0A1D3D]"
                            }`}
                          >
                            <option value="Accounting">Accounting (Principles & Practice)</option>
                            <option value="GST">GST Indirect Taxes</option>
                          </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Marks allocation</label>
                            <select
                              value={aiPaperMarks}
                              onChange={(e) => setAiPaperMarks(e.target.value)}
                              className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] cursor-pointer ${
                                isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-[#0A1D3D]"
                              }`}
                            >
                              <option value="50">50 Marks (Quiz/Internal)</option>
                              <option value="100">100 Marks (Full Mock)</option>
                            </select>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Difficulty Level</label>
                            <select
                              value={aiPaperDifficulty}
                              onChange={(e) => setAiPaperDifficulty(e.target.value)}
                              className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] cursor-pointer ${
                                isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-[#0A1D3D]"
                              }`}
                            >
                              <option value="Foundation">Foundation</option>
                              <option value="Intermediate">Intermediate (CA/CMA Standard)</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Syllabus Topic Focus (Optional)</label>
                          <input
                            type="text"
                            placeholder="e.g. abnormal losses in consignment, ITC GSTR-2B"
                            value={aiPaperTopic}
                            onChange={(e) => setAiPaperTopic(e.target.value)}
                            className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] ${
                              isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
                            }`}
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isGeneratingPaper}
                          className="w-full bg-[#D09C34] hover:bg-[#0A1D3D] text-white py-3 h-11 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer flex items-center justify-center gap-2"
                        >
                          {isGeneratingPaper ? (
                            <>
                              <BrainCircuit className="animate-spin" size={16} />
                              <span>Architecting Paper...</span>
                            </>
                          ) : (
                            <>
                              <Sparkles size={14} />
                              <span>Generate AI Mock Paper</span>
                            </>
                          )}
                        </Button>
                      </form>
                    </div>

                    {/* Paper output (7 Columns) */}
                    <div className={`lg:col-span-7 border p-6 rounded-3xl shadow-sm space-y-6 flex flex-col justify-between min-h-[400px] ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <div className="flex justify-between items-center border-b pb-4 border-slate-100/10">
                        <h4 className={`text-sm font-bold uppercase ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Syllabus Paper Outputs</h4>
                        
                        {aiPaperResult && (
                          <div className="flex gap-2">
                            <button
                              onClick={() => copyToClipboard(aiPaperResult, "paper")}
                              className="text-[10px] bg-slate-500/10 border border-slate-500/20 py-1 px-3 rounded-lg font-bold uppercase tracking-wider text-[#D09C34] hover:bg-[#D09C34] hover:text-white transition-colors"
                            >
                              {copiedPaper ? "Copied!" : "Copy Paper"}
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 py-4 overflow-y-auto max-h-[450px] text-left">
                        {isGeneratingPaper ? (
                          <div className="flex flex-col items-center justify-center h-full space-y-4 py-16 text-slate-400">
                            <BrainCircuit className="animate-spin text-[#D09C34]" size={36} />
                            <p className="text-xs font-bold uppercase tracking-wider animate-pulse">Running AI syllabus compliance validation...</p>
                          </div>
                        ) : aiPaperResult ? (
                          <div className={`text-xs sm:text-sm leading-relaxed space-y-4 font-normal p-4 rounded-xl font-mono ${
                            isDarkMode ? "bg-black/25 text-slate-300" : "bg-slate-50 text-slate-700"
                          }`}>
                            <div dangerouslySetInnerHTML={{
                              __html: aiPaperResult
                                .replace(/# (.*)/g, "<h1 class='text-base font-extrabold uppercase text-[#D09C34] mb-2'>$1</h1>")
                                .replace(/## (.*)/g, "<h2 class='text-sm font-bold uppercase text-slate-400 mb-1'>$1</h2>")
                                .replace(/### (.*)/g, "<h3 class='text-xs font-bold uppercase text-[#D09C34] mt-4 mb-2 border-b border-white/5 pb-1'>$1</h3>")
                                .replace(/- (.*)/g, "<li>$1</li>")
                                .replace(/\n/g, "<br/>")
                            }} />
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full py-16 text-slate-400">
                            <FileText size={42} className="text-[#D09C34] opacity-50 mb-3" />
                            <p className="text-xs font-bold uppercase tracking-wider">No mock question paper generated yet.</p>
                            <p className="text-[10px] text-slate-500 font-semibold uppercase mt-1">Configure layout options and launch builder</p>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: AI MCQ GENERATOR */}
                {/* ========================================================== */}
                {activeTab === "ai-mcq" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                    
                    {/* Input configuration (5 Columns) */}
                    <div className={`lg:col-span-5 border p-6 rounded-3xl shadow-sm space-y-6 ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#D09C34]/10 rounded-full border border-[#D09C34]/20 text-[9px] font-bold uppercase tracking-wider text-[#D09C34]">
                          <BrainCircuit size={10} />
                          <span>AI MCQ Generator</span>
                        </div>
                        <h3 className={`font-heading text-lg font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>AI MCQ Developer</h3>
                      </div>

                      <form onSubmit={handleGenerateMcqs} className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subject Track</label>
                          <select
                            value={aiMcqSubject}
                            onChange={(e) => setAiMcqSubject(e.target.value)}
                            className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] cursor-pointer ${
                              isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-[#0A1D3D]"
                            }`}
                          >
                            <option value="Accounting">Accounting (Principles & Practice)</option>
                            <option value="GST">GST Indirect Taxes</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Question Count</label>
                          <select
                            value={aiMcqCount}
                            onChange={(e) => setAiMcqCount(e.target.value)}
                            className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] cursor-pointer ${
                              isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-[#0A1D3D]"
                            }`}
                          >
                            <option value="3">3 Questions</option>
                            <option value="5">5 Questions</option>
                            <option value="10">10 Questions</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Target Chapter Topic</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. consignment accounts valuation, supply rules"
                            value={aiMcqTopic}
                            onChange={(e) => setAiMcqTopic(e.target.value)}
                            className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] ${
                              isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
                            }`}
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isGeneratingMcqs}
                          className="w-full bg-[#D09C34] hover:bg-[#0A1D3D] text-white py-3 h-11 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer flex items-center justify-center gap-2"
                        >
                          {isGeneratingMcqs ? (
                            <>
                              <BrainCircuit className="animate-spin" size={16} />
                              <span>Developing MCQs...</span>
                            </>
                          ) : (
                            <>
                              <Sparkles size={14} />
                              <span>Generate MCQs</span>
                            </>
                          )}
                        </Button>
                      </form>
                    </div>

                    {/* MCQs output (7 Columns) */}
                    <div className={`lg:col-span-7 border p-6 rounded-3xl shadow-sm space-y-6 flex flex-col justify-between min-h-[400px] ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <div className="flex justify-between items-center border-b pb-4 border-slate-100/10">
                        <h4 className={`text-sm font-bold uppercase ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Generated MCQs List</h4>
                      </div>

                      <div className="flex-1 py-4 overflow-y-auto max-h-[450px] text-left">
                        {isGeneratingMcqs ? (
                          <div className="flex flex-col items-center justify-center h-full space-y-4 py-16 text-slate-400">
                            <BrainCircuit className="animate-spin text-[#D09C34]" size={36} />
                            <p className="text-xs font-bold uppercase tracking-wider animate-pulse">Drafting questions and answer key logs...</p>
                          </div>
                        ) : aiMcqResult.length > 0 ? (
                          <div className="space-y-6">
                            {aiMcqResult.map((q, idx) => (
                              <div key={idx} className={`p-5 rounded-2xl border ${
                                isDarkMode ? "bg-black/20 border-slate-800 text-slate-200" : "bg-slate-50 border-slate-100 text-slate-700"
                              }`}>
                                <h4 className="font-bold text-xs sm:text-sm">{idx + 1}. {q.q}</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                  <div className="py-2 px-3.5 bg-black/10 border border-white/5 rounded-xl text-xs"><strong className="text-[#D09C34] mr-2">A.</strong> {q.a}</div>
                                  <div className="py-2 px-3.5 bg-black/10 border border-white/5 rounded-xl text-xs"><strong className="text-[#D09C34] mr-2">B.</strong> {q.b}</div>
                                  <div className="py-2 px-3.5 bg-black/10 border border-white/5 rounded-xl text-xs"><strong className="text-[#D09C34] mr-2">C.</strong> {q.c}</div>
                                  <div className="py-2 px-3.5 bg-black/10 border border-white/5 rounded-xl text-xs"><strong className="text-[#D09C34] mr-2">D.</strong> {q.d}</div>
                                </div>
                                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] space-y-1">
                                  <p><span className="text-green-500 font-bold uppercase tracking-wider">Correct Answer Option:</span> <strong className="text-white bg-green-600/30 border border-green-600/40 rounded px-1.5 py-0.5 ml-1">{q.ans}</strong></p>
                                  <p className="text-slate-400 mt-2"><strong className="text-slate-300">Explanation:</strong> {q.exp}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full py-16 text-slate-400">
                            <FileText size={42} className="text-[#D09C34] opacity-50 mb-3" />
                            <p className="text-xs font-bold uppercase tracking-wider">No mock MCQs developed yet.</p>
                            <p className="text-[10px] text-slate-500 font-semibold uppercase mt-1">Configure layout parameters and launch developer</p>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: AI REVISION NOTES GENERATOR */}
                {/* ========================================================== */}
                {activeTab === "ai-notes" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                    
                    {/* Input configuration (5 Columns) */}
                    <div className={`lg:col-span-5 border p-6 rounded-3xl shadow-sm space-y-6 ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#D09C34]/10 rounded-full border border-[#D09C34]/20 text-[9px] font-bold uppercase tracking-wider text-[#D09C34]">
                          <BrainCircuit size={10} />
                          <span>AI Notes Generator</span>
                        </div>
                        <h3 className={`font-heading text-lg font-bold uppercase tracking-wide ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>AI Revision Notes Generator</h3>
                      </div>

                      <form onSubmit={handleGenerateNotes} className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subject Track</label>
                          <select
                            value={aiNotesSubject}
                            onChange={(e) => setAiNotesSubject(e.target.value)}
                            className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] cursor-pointer ${
                              isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-[#0A1D3D]"
                            }`}
                          >
                            <option value="Accounting">Accounting (Principles & Practice)</option>
                            <option value="GST">GST Indirect Taxes</option>
                            <option value="Income Tax">Income Tax</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Target Chapter Topic</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. consignment abnormal loss entries, GSTR-2B matching rules"
                            value={aiNotesTopic}
                            onChange={(e) => setAiNotesTopic(e.target.value)}
                            className={`w-full border rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#D09C34] ${
                              isDarkMode ? "bg-[#09182F] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
                            }`}
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isGeneratingNotes}
                          className="w-full bg-[#D09C34] hover:bg-[#0A1D3D] text-white py-3 h-11 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer flex items-center justify-center gap-2"
                        >
                          {isGeneratingNotes ? (
                            <>
                              <BrainCircuit className="animate-spin" size={16} />
                              <span>Developing Notes...</span>
                            </>
                          ) : (
                            <>
                              <Sparkles size={14} />
                              <span>Generate Revision Notes</span>
                            </>
                          )}
                        </Button>
                      </form>
                    </div>

                    {/* Notes output (7 Columns) */}
                    <div className={`lg:col-span-7 border p-6 rounded-3xl shadow-sm space-y-6 flex flex-col justify-between min-h-[400px] ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <div className="flex justify-between items-center border-b pb-4 border-slate-100/10">
                        <h4 className={`text-sm font-bold uppercase ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>Syllabus Revision Notes</h4>
                        
                        {aiNotesResult && (
                          <div className="flex gap-2">
                            <button
                              onClick={() => copyToClipboard(aiNotesResult, "notes")}
                              className="text-[10px] bg-slate-500/10 border border-slate-500/20 py-1 px-3 rounded-lg font-bold uppercase tracking-wider text-[#D09C34] hover:bg-[#D09C34] hover:text-white transition-colors"
                            >
                              {copiedNotes ? "Copied!" : "Copy Notes"}
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 py-4 overflow-y-auto max-h-[450px] text-left">
                        {isGeneratingNotes ? (
                          <div className="flex flex-col items-center justify-center h-full space-y-4 py-16 text-slate-400">
                            <BrainCircuit className="animate-spin text-[#D09C34]" size={36} />
                            <p className="text-xs font-bold uppercase tracking-wider animate-pulse">Running AI notes compiling standards...</p>
                          </div>
                        ) : aiNotesResult ? (
                          <div className={`text-xs sm:text-sm leading-relaxed space-y-4 font-normal p-4 rounded-xl font-mono ${
                            isDarkMode ? "bg-black/25 text-slate-300" : "bg-slate-50 text-slate-700"
                          }`}>
                            <div dangerouslySetInnerHTML={{
                              __html: aiNotesResult
                                .replace(/# (.*)/g, "<h1 class='text-base font-extrabold uppercase text-[#D09C34] mb-2'>$1</h1>")
                                .replace(/### (.*)/g, "<h3 class='text-xs font-bold uppercase text-[#D09C34] mt-4 mb-2 border-b border-white/5 pb-1'>$1</h3>")
                                .replace(/- \*\*(.*?)\*\*:/g, "<li><strong class='text-[#D09C34]'>$1</strong>:</li>")
                                .replace(/- (.*)/g, "<li>$1</li>")
                                .replace(/`([^`]+)`/g, "<code class='bg-black/25 text-[#D09C34] py-0.5 px-1.5 rounded font-mono text-[11px] font-semibold'>$1</code>")
                                .replace(/```text\n([\s\S]+?)\n```/g, "<pre class='bg-black/30 border border-white/5 p-3.5 rounded-xl font-mono text-[10px] sm:text-[11px] leading-relaxed my-2 overflow-x-auto text-[#D09C34]'>$1</pre>")
                                .replace(/\n/g, "<br/>")
                            }} />
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full py-16 text-slate-400">
                            <FileText size={42} className="text-[#D09C34] opacity-50 mb-3" />
                            <p className="text-xs font-bold uppercase tracking-wider">No study notes generated yet.</p>
                            <p className="text-[10px] text-slate-500 font-semibold uppercase mt-1">Configure layout topics and launch compiler</p>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                )}

              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
