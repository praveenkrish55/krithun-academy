"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  FileSpreadsheet,
  CheckSquare,
  ClipboardList,
  Video,
  Radio,
  CreditCard,
  Award,
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
  Coins,
  Mic,
  Volume2,
  Wifi,
  WifiOff,
  FileText,
  UserCheck,
  Play,
  Check,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
  "Income Tax": {
    strong: ["Section 80C Deduction Limits", "New Tax Regime Slab Selection"],
    weak: ["Section 40(a)(ia) disallowances", "Resident vs Non-Resident criteria"],
  },
  "Business Law": {
    strong: ["Contract Validity Elements", "Offer vs Invitation to Treat"],
    weak: ["Doctrine of Indoor Management", "Void vs Voidable Contracts details"],
  },
  "Economics": {
    strong: ["Law of Demand and Exceptions", "Price Elasticity calculation"],
    weak: ["Micro vs Macro aggregates", "Monopolistic competition characteristics"],
  },
  "Costing": {
    strong: ["Marginal Costing BEP", "Margin of Safety formulas"],
    weak: ["Standard Costing Variance Analysis", "Overhead absorption rates"],
  },
  "Financial Management": {
    strong: ["NPV capital budgeting", "Payback period metrics"],
    weak: ["WACC formula derivation", "CAPM model cost of equity pricing"],
  },
  "Business Mathematics": {
    strong: ["Compound Interest basics", "Grouped data arithmetic mean"],
    weak: ["Present Value of ordinary annuity", "Grouped data Standard Deviation"],
  },
  "Commerce": {
    strong: ["Sole Proprietorship pros/cons", "Commercial banking functions"],
    weak: ["Direct vs Indirect marketing channels", "Auditing regulatory bodies"],
  },
};

export default function StudentPortal() {
  const router = useRouter();
  const [copilotQuery, setCopilotQuery] = useState("");
  const [selectedDiagSubject, setSelectedDiagSubject] = useState("All Subjects");
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("student@krithun.com");
  const [loginPassword, setLoginPassword] = useState("password");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  // ==========================================
  // NEW GAMIFICATION, OFFLINE & AI HUB STATES
  // ==========================================
  const [coins, setCoins] = useState(350);
  const [streak, setStreak] = useState(12);
  const [showAchievementsDropdown, setShowAchievementsDropdown] = useState(false);
  const [simulatedOffline, setSimulatedOffline] = useState(false);
  const [downloadedAssets, setDownloadedAssets] = useState<Record<string, boolean>>({
    "Accounting Syllabus Guide": true,
    "GST Invoicing Handout": false,
    "Income Tax Slab Sheet": false,
  });

  // AI Tutor States
  const [selectedTutorSubject, setSelectedTutorSubject] = useState("Accounting");
  const [tutorMessages, setTutorMessages] = useState([
    { sender: "ai", text: "Hello! I am your AI Commerce Tutor. I can explain complex problems in Accounting, GST, Income Tax, and Business Law. Try asking me a question or toggle voice mode!", time: "Just now" }
  ]);
  const [tutorInput, setTutorInput] = useState("");
  const [isTutorTyping, setIsTutorTyping] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  // AI Study Planner States
  const [plannerExamDate, setPlannerExamDate] = useState("2026-11-01");
  const [plannerDailyHours, setPlannerDailyHours] = useState("4");
  const [plannerFocusArea, setPlannerFocusArea] = useState("Accounting Ledgers");
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<Array<{ day: string; topic: string; duration: string; completed: boolean }>>([
    { day: "Monday", topic: "Consignment Ledger Entries & Adjustments", duration: "4 hrs", completed: true },
    { day: "Tuesday", topic: "Abnormal Loss Valuations", duration: "4 hrs", completed: false },
    { day: "Wednesday", topic: "ITC Reconciliation GSTR-2B vs GSTR-3B", duration: "4 hrs", completed: false },
    { day: "Thursday", topic: "TDS Section 40(a) Defaults", duration: "4 hrs", completed: false },
    { day: "Friday", topic: "Mock Exam - Group 1 Subjects", duration: "4 hrs", completed: false },
  ]);

  // AI Notes Generator States
  const [notesSubject, setNotesSubject] = useState("Accounting");
  const [notesTopic, setNotesTopic] = useState("");
  const [isGeneratingNotes, setIsGeneratingNotes] = useState(false);
  const [notesResult, setNotesResult] = useState("");

  // AI Mock Tests States
  const [mockSubject, setMockSubject] = useState("Accounting");
  const [mockDifficulty, setMockDifficulty] = useState("Intermediate");
  const [isMockQuizStarted, setIsMockQuizStarted] = useState(false);
  const [currentMockIndex, setCurrentMockIndex] = useState(0);
  const [mockSelectedAnswers, setMockSelectedAnswers] = useState<Record<number, string>>({});
  const [isMockQuizFinished, setIsMockQuizFinished] = useState(false);
  const [mockTimer, setMockTimer] = useState(120); // 2 minutes
  const [mockTimerInterval, setMockTimerInterval] = useState<any>(null);

  // AI Career Hub States
  const [careerSubTab, setCareerSubTab] = useState("resume");
  const [resumeFullName, setResumeFullName] = useState("Praveen Kumar");
  const [resumeSkills, setResumeSkills] = useState("Corporate Accounting, GST Filings, Tally Prime, Audit Assistance");
  const [resumeExperience, setResumeExperience] = useState("Completed CA Article-ship for 1.5 years at Kovai Audit Partners");
  const [isGeneratingResume, setIsGeneratingResume] = useState(false);
  const [generatedResumeHtml, setGeneratedResumeHtml] = useState("");

  // Interview Coach States
  const [isInterviewWebcamOn, setIsInterviewWebcamOn] = useState(false);
  const [interviewAnswerInput, setInterviewAnswerInput] = useState("");
  const [currentInterviewIndex, setCurrentInterviewIndex] = useState(0);
  const [isInterviewChecking, setIsInterviewChecking] = useState(false);
  const [interviewFeedback, setInterviewFeedback] = useState("");
  const interviewQuestions = [
    "Could you explain the process you follow when reconciling input tax credit (ITC) defaults?",
    "How do you distinguish between Capital expenditure and Revenue expenditure in consignment reports?",
    "If a resident supplier defaults on TDS, what are the corporate tax disallowance implications under Section 40(a)(ia)?"
  ];

  // Scholarship Predictor States
  const [scholarshipMarks, setScholarshipMarks] = useState("85");
  const [scholarshipIncome, setScholarshipIncome] = useState("3"); // Lakhs
  const [scholarshipResult, setScholarshipResult] = useState<number | null>(null);

  // ==========================================
  // NEW GAMIFICATION, OFFLINE & AI HUB HANDLERS
  // ==========================================
  const [toastMessage, setToastMessage] = useState("");
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleSendTutorMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg = { sender: "user", text, time: "Just now" };
    setTutorMessages(prev => [...prev, userMsg]);
    setTutorInput("");
    setIsTutorTyping(true);

    setTimeout(() => {
      let response = "That's an excellent question regarding commerce concepts. Let me explain: standard ICAI guidelines define this clearly under double entry adjustment rules. Let's solve it step-by-step!";
      const query = text.toLowerCase();
      if (query.includes("consignment") || query.includes("abnormal")) {
        response = "**Abnormal Loss in Consignment**: Abnormal loss is valued similar to unsold inventory: Cost + proportionate direct expenses of Consignor. Formula: `(Cost of Lost Goods / Total Goods) * Total Expenses`. It is credited to the Consignment A/c and debited to the Profit & Loss A/c.";
      } else if (query.includes("itc") || query.includes("gstr-2b") || query.includes("reconciliation")) {
        response = "**ITC Reconciliation**: Under Rule 37A, you must reconcile GSTR-2B (auto-drafted static ledger) with purchase books. If a supplier fails to file GSTR-1, you must reverse the claimed ITC. If they pay later, you can re-claim it.";
      } else if (query.includes("tds") || query.includes("40(a)")) {
        response = "**Section 40(a)(ia) TDS Default**: If a resident payment requires TDS and you fail to deduct/pay it on time, **30% of the expenditure is disallowed** in the current year. It is allowed in the year you actually deposit the TDS.";
      }

      setTutorMessages(prev => [...prev, { sender: "ai", text: response, time: "Just now" }]);
      setIsTutorTyping(false);
      setCoins(c => c + 15);
      triggerToast("+15 Krithun Coins earned for active learning!");
    }, 1200);
  };

  const toggleVoiceMode = () => {
    setIsVoiceActive(!isVoiceActive);
    if (!isVoiceActive) {
      triggerToast("Voice Mode active. Speak now...");
      setTimeout(() => {
        setIsVoiceActive(false);
        handleSendTutorMessage("How is abnormal loss calculated in consignment accounts?");
      }, 3500);
    } else {
      triggerToast("Voice Mode disabled.");
    }
  };

  const handleGenerateStudyPlan = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGeneratingPlan(true);
    setTimeout(() => {
      setGeneratedPlan([
        { day: "Monday", topic: `Review Focus Area: ${plannerFocusArea}`, duration: `${plannerDailyHours} hrs`, completed: false },
        { day: "Tuesday", topic: "CA/CMA Study Guide revisions & flashcards", duration: `${plannerDailyHours} hrs`, completed: false },
        { day: "Wednesday", topic: "Double-entry consignment accounting worksheets", duration: `${plannerDailyHours} hrs`, completed: false },
        { day: "Thursday", topic: "GST ledger audits & tax regime selectors practice", duration: `${plannerDailyHours} hrs`, completed: false },
        { day: "Friday", topic: "Interactive Mock Exam and AI review", duration: `${plannerDailyHours} hrs`, completed: false },
      ]);
      setIsGeneratingPlan(false);
      setCoins(c => c + 30);
      triggerToast("Custom study planner generated! +30 Coins earned.");
    }, 1200);
  };

  const handleCompileNotes = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notesTopic.trim()) return;
    setIsGeneratingNotes(true);
    setNotesResult("");
    setTimeout(() => {
      const generated = `# Revision Sheet: ${notesTopic}
---
### 1. Core Summary
- **Concept Definition**: Target definitions compiled directly from standard CA Foundation & Intermediate materials.
- **Syntaxes & Formulas**:
  \`\`\`text
  Adjustments Ledger .................... Dr.
      To Trading Account ............................ Cr.
  \`\`\`

### 2. High-Yield Checklist
- [x] Check for inventory transits additions.
- [ ] Reconcile supplier invoice timelines.
- [ ] Confirm double-entry balance sheets alignment.

### 3. Study Priority: High`;
      setNotesResult(generated);
      setIsGeneratingNotes(false);
      setCoins(c => c + 25);
      triggerToast("AI Revision Sheet compiled! +25 Coins earned.");
    }, 1400);
  };

  const mockQuizQuestions = [
    {
      q: "Which account is credited when abnormal loss occurs in Consignment accounts?",
      a: "Abnormal Loss Account",
      b: "Consignment Account",
      c: "Consignee Personal Account",
      d: "Trading Account",
      ans: "B",
      exp: "The value of abnormal loss is credited to the Consignment Account to deduce correct profits and debited to the Abnormal Loss Account."
    },
    {
      q: "Under which GST filing forms do you match input tax credit (ITC) auto-drafted lists?",
      a: "GSTR-1",
      b: "GSTR-3B",
      c: "GSTR-2B",
      d: "GSTR-9",
      ans: "C",
      exp: "GSTR-2B is the auto-drafted static ITC ledger statement used for reconciliation with ledger purchases."
    },
    {
      q: "Disallowance rates under Section 40(a)(ia) of the Income Tax Act for TDS defaults on residents is set at:",
      a: "10% of expenditure",
      b: "30% of expenditure",
      c: "100% of expenditure",
      d: "50% of expenditure",
      ans: "B",
      exp: "Section 40(a)(ia) disallows 30% of any payment made to residents where TDS was not deducted or paid on time."
    }
  ];

  const startMockTest = () => {
    setIsMockQuizStarted(true);
    setIsMockQuizFinished(false);
    setCurrentMockIndex(0);
    setMockSelectedAnswers({});
    setMockTimer(120);
    triggerToast("AI Mock Test started! Ticking timer active.");
  };

  const selectMockAnswer = (optionKey: string) => {
    setMockSelectedAnswers(prev => ({ ...prev, [currentMockIndex]: optionKey }));
  };

  const submitMockTest = () => {
    setIsMockQuizFinished(true);
    let correctCount = 0;
    mockQuizQuestions.forEach((q, idx) => {
      if (mockSelectedAnswers[idx] === q.ans) {
        correctCount++;
      }
    });

    const scorePct = Math.round((correctCount / mockQuizQuestions.length) * 100);
    setCoins(c => c + 50);
    triggerToast(`Mock Quiz completed! Score: ${scorePct}%. +50 Coins earned!`);
  };

  const handleGenerateResume = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGeneratingResume(true);
    setTimeout(() => {
      setGeneratedResumeHtml(`
<div class="p-6 bg-white text-slate-800 border border-slate-100 rounded-2xl font-sans text-left space-y-4 shadow-sm">
  <div class="border-b pb-3 text-center">
    <h3 class="text-xl font-bold uppercase text-[#0A1D3D]">${resumeFullName}</h3>
    <p class="text-xs text-[#D09C34] font-semibold">CA / CMA Aspirant | Coimbatore, TN</p>
  </div>
  <div>
    <h4 class="text-xs font-bold uppercase text-[#0A1D3D] border-b pb-1 mb-1.5">Professional Skills</h4>
    <p class="text-xs leading-relaxed text-slate-600">${resumeSkills}</p>
  </div>
  <div>
    <h4 class="text-xs font-bold uppercase text-[#0A1D3D] border-b pb-1 mb-1.5">Article-ship & Experience</h4>
    <p class="text-xs leading-relaxed text-slate-600">${resumeExperience}</p>
  </div>
  <div>
    <h4 class="text-xs font-bold uppercase text-[#0A1D3D] border-b pb-1 mb-1.5">Education</h4>
    <p class="text-xs text-slate-600 font-semibold">Krithun Academy Professional Batch (2025 - 2026)</p>
    <p class="text-[10px] text-slate-400">Preparation for CA Intermediate Group 1 Certifications</p>
  </div>
</div>
      `);
      setIsGeneratingResume(false);
      setCoins(c => c + 40);
      triggerToast("AI Professional Resume compiled! +40 Coins earned.");
    }, 1200);
  };

  const handleCheckInterviewAnswer = () => {
    if (!interviewAnswerInput.trim()) return;
    setIsInterviewChecking(true);
    setInterviewFeedback("");
    setTimeout(() => {
      let score = "8/10";
      let textFeedback = "Excellent usage of tax rules. You correctly referenced the CGST/ICAI guidelines. To improve, structure your answer using numbered bullet points.";
      if (currentInterviewIndex === 2) {
        textFeedback = "Good job. You correctly mentioned the **30% disallowance** rule under Section 40(a)(ia) for resident payments. To be perfect, add that this disallowance is re-allowed in the fiscal year the TDS is deposited.";
      }
      setInterviewFeedback(`**AI Coach Feedback (${score})**: ${textFeedback}`);
      setIsInterviewChecking(false);
      setCoins(c => c + 50);
      triggerToast("Mock interview answer evaluated! +50 Coins.");
    }, 1400);
  };

  const handlePredictScholarship = (e: React.FormEvent) => {
    e.preventDefault();
    const marks = Number(scholarshipMarks);
    const inc = Number(scholarshipIncome);
    
    let pct = 0;
    if (marks >= 95) pct = 90;
    else if (marks >= 85) pct = 60;
    else if (marks >= 75) pct = 40;
    else if (marks >= 60) pct = 20;

    if (inc <= 2.5) pct += 10;
    if (pct > 100) pct = 100;

    setScholarshipResult(pct);
    triggerToast("Scholarship prediction compiled!");
  };

  const toggleOfflineAsset = (assetName: string) => {
    setDownloadedAssets(prev => {
      const nextVal = !prev[assetName];
      if (nextVal) {
        triggerToast(`"${assetName}" cached offline for mobile study!`);
      } else {
        triggerToast(`"${assetName}" removed from offline storage.`);
      }
      return { ...prev, [assetName]: nextVal };
    });
  };

  // Notifications read state simulation
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Mock Exam Graded", body: "Your CA Foundation Accounting Mock Test has been graded. Result: 85% (Grade: A).", date: "Today, 10:15 AM", read: false },
    { id: 2, title: "New Material Uploaded", body: "CA Swathi Lakshmi uploaded a new PDF: 'GST Invoicing and Ledger Setup Handout'.", date: "Yesterday, 3:40 PM", read: false },
    { id: 3, title: "Live Class Alert", body: "Your live interactive GST Filing workshop starts in 30 minutes.", date: "Yesterday, 9:00 AM", read: true },
    { id: 4, title: "Installment Reminder", body: "Second installment receipt has been posted. Remaining fee balance: ₹10,000.", date: "3 days ago", read: true },
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);

    setTimeout(() => {
      if (loginEmail === "student@krithun.com" && loginPassword === "password") {
        setIsLoggedIn(true);
      } else {
        setLoginError("Invalid username or password. Use student@krithun.com / password.");
      }
      setIsLoggingIn(false);
    }, 1000);
  };

  const markAllNotificationsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "analytics", label: "AI Analytics", icon: TrendingUp },
    { id: "ai-tutor", label: "AI Tutor & Voice", icon: BrainCircuit, isAi: true },
    { id: "ai-planner", label: "AI Study Planner", icon: Calendar, isAi: true },
    { id: "ai-notes", label: "AI Notes Generator", icon: FileText, isAi: true },
    { id: "ai-mock-test", label: "AI Mock Tests", icon: Trophy, isAi: true },
    { id: "ai-career", label: "AI Career & Coach", icon: UserCheck, isAi: true },
    { id: "courses", label: "My Courses", icon: BookOpen },
    { id: "classes", label: "Today's Classes", icon: Calendar },
    { id: "assignments", label: "Assignments", icon: CheckSquare },
    { id: "attendance", label: "Attendance", icon: ClipboardList },
    { id: "materials", label: "Study Materials", icon: FileSpreadsheet },
    { id: "recorded", label: "Recorded Classes", icon: Video },
    { id: "live", label: "Live Classes", icon: Radio },
    { id: "payments", label: "Payments", icon: CreditCard },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell, badgeCount: notifications.filter(n => !n.read).length },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#334155] font-sans antialiased">
      <AnimatePresence mode="wait">
        
        {/* ========================================================== */}
        {/* LOCK SCREEN / SECURE LOGIN GATE */}
        {/* ========================================================== */}
        {!isLoggedIn ? (
          <motion.div
            key="login-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#0A1D3D] relative overflow-hidden"
          >
            {/* Background design elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(208,156,52,0.12),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,29,61,0.5),transparent_50%)] pointer-events-none" />

            <div className="w-full max-w-md space-y-8 relative z-10">
              
              {/* Portal Logo & Header */}
              <div className="text-center">
                <div className="mx-auto h-16 w-48 relative flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-4 mb-4">
                  <div className="text-white font-heading font-extrabold tracking-widest text-lg uppercase flex items-center gap-2">
                    <span className="text-[#D09C34]">KRITHUN</span>
                    <span>PORTAL</span>
                  </div>
                </div>
                <h2 className="text-3xl font-extrabold text-white tracking-tight uppercase font-heading">
                  Secure Student Login
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-300">
                  Access your lessons, schedules, and analytics.
                </p>
              </div>

              {/* Login Form Card */}
              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-2xl relative">
                
                {loginError && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-600 text-xs rounded-xl flex items-center gap-2">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{loginError}</span>
                  </div>
                )}

                <form className="space-y-5 text-left" onSubmit={handleLogin}>
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Student Email</label>
                    <div className="relative">
                      <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#0A1D3D] rounded-xl py-3 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0A1D3D] transition-all"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Password</label>
                      <span className="text-[10px] font-bold text-[#D09C34] hover:underline cursor-pointer uppercase tracking-wider">Forgot?</span>
                    </div>
                    <div className="relative">
                      <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="password"
                        required
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#0A1D3D] rounded-xl py-3 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0A1D3D] transition-all"
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

                {/* Info Credentials Badge */}
                <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Demo Account Details</p>
                  <p className="text-[11px] text-slate-500 mt-1 font-mono">
                    student@krithun.com / password
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        ) : (
          // ==========================================================
          // PORTAL DASHBOARD APPLICATION
          // ==========================================================
          <motion.div
            key="portal-dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex min-h-screen relative"
          >
            
            {/* 1. Responsive Collapsible Sidebar (Notion/Coursera style) */}
            <aside
              className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#0A1D3D] text-white border-r border-[#0A1D3D]/50 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex flex-col overflow-y-auto flex-1">
                {/* Sidebar Header */}
                <div className="h-20 border-b border-white/5 px-6 flex items-center justify-between shrink-0">
                  <div className="font-heading font-extrabold tracking-widest text-sm uppercase flex items-center gap-2">
                    <span className="text-[#D09C34]">KRITHUN</span>
                    <span>STUDENT</span>
                  </div>
                  {/* Close trigger for mobile sidebar */}
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-1 rounded bg-white/5 hover:bg-white/10 lg:hidden text-white"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Profile Widget inside Sidebar */}
                <div className="p-5 border-b border-white/5 flex items-center gap-3 shrink-0">
                  <div className="h-10 w-10 rounded-xl bg-[#D09C34] text-white font-extrabold flex items-center justify-center text-sm shadow-inner shrink-0 uppercase">
                    PK
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="text-xs font-bold text-white truncate leading-none">Praveen Kumar</p>
                    <p className="text-[10px] text-slate-400 font-mono mt-1">Reg: KA-2026-0891</p>
                  </div>
                </div>

                {/* Sidebar Nav Items */}
                <nav className="flex-1 py-4 px-3 space-y-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        // Close sidebar on mobile after tap
                        if (window.innerWidth < 1024) {
                          setIsSidebarOpen(false);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 ${
                        activeTab === item.id
                          ? "bg-[#D09C34] text-white shadow-md"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon size={16} className={activeTab === item.id ? "text-white" : "text-[#D09C34]"} />
                        <span>{item.label}</span>
                      </div>
                      
                      {item.badgeCount !== undefined && item.badgeCount > 0 && (
                        <span className="bg-red-500 text-white font-bold text-[9px] px-2 py-0.5 rounded-full uppercase shrink-0">
                          {item.badgeCount}
                        </span>
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Sidebar Footer (Logout) */}
              <div className="p-4 border-t border-white/5 shrink-0">
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300"
                >
                  <LogOut size={16} />
                  <span>Secure Logout</span>
                </button>
              </div>
            </aside>

            {/* Backdrop filter overlay for mobile sidebar */}
            {isSidebarOpen && (
              <div
                onClick={() => setIsSidebarOpen(false)}
                className="fixed inset-0 bg-[#0A1D3D]/30 backdrop-blur-sm z-20 lg:hidden"
              />
            )}

            {/* 2. Main Content Workspace Area */}
            <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
              
              {/* Dynamic Application Header */}
              <header className="h-20 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-10 shadow-sm shrink-0">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 rounded-lg text-slate-600 hover:bg-slate-50 lg:hidden border border-slate-200"
                  >
                    <Menu size={20} />
                  </button>
                  <h1 className="text-lg font-bold text-[#0A1D3D] uppercase tracking-wider font-heading">
                    {menuItems.find((item) => item.id === activeTab)?.label}
                  </h1>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-4">
                  {/* PWA Simulated Offline Status Toggle */}
                  <button
                    onClick={() => {
                      setSimulatedOffline(!simulatedOffline);
                      triggerToast(
                        !simulatedOffline 
                          ? "Simulated Offline Mode active. SW cache active." 
                          : "Online synchronization restored."
                      );
                    }}
                    className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      simulatedOffline 
                        ? "bg-amber-500/10 border-amber-500 text-amber-500" 
                        : "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 hover:bg-emerald-50"
                    }`}
                    title="Simulate offline status for PWA testing"
                  >
                    {simulatedOffline ? <WifiOff size={12} /> : <Wifi size={12} />}
                    <span className="hidden md:inline">{simulatedOffline ? "Offline" : "Online"}</span>
                  </button>

                  {/* Gamification Streaks */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-600 rounded-xl text-xs font-black uppercase tracking-wider relative group" title="Learning Streak">
                    <Flame size={14} className="text-orange-500 animate-pulse fill-orange-500" />
                    <span>{streak} Days</span>
                  </div>

                  {/* Gamification Coins */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-600 rounded-xl text-xs font-black uppercase tracking-wider relative group" title="Krithun Coins">
                    <Coins size={14} className="text-amber-500 fill-amber-500" />
                    <span>{coins} KC</span>
                  </div>

                  {/* Achievements Badges Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setShowAchievementsDropdown(!showAchievementsDropdown)}
                      className={`p-2 rounded-lg border transition-colors cursor-pointer relative ${
                        showAchievementsDropdown 
                          ? "bg-[#0A1D3D] text-[#D09C34] border-[#0A1D3D]" 
                          : "text-slate-500 hover:text-[#0A1D3D] border-slate-200 hover:bg-slate-50"
                      }`}
                      title="Achievements / Badges"
                    >
                      <Trophy size={18} />
                      <span className="absolute -top-1.5 -right-1.5 bg-[#D09C34] text-white text-[8px] px-1.5 py-0.5 rounded-full font-extrabold uppercase">3</span>
                    </button>
                    
                    {showAchievementsDropdown && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setShowAchievementsDropdown(false)} />
                        <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-slate-100 rounded-2xl shadow-xl p-4 z-50 text-left space-y-3">
                          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b pb-1">Unlocked Achievements</h4>
                          
                          {/* Badge 1: Tax Ninja */}
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-[#D09C34]/15 text-[#D09C34] flex items-center justify-center font-bold text-xs shrink-0">🥷</div>
                            <div>
                              <p className="text-xs font-bold text-slate-800 leading-none">Tax Ninja</p>
                              <p className="text-[9px] text-slate-400 font-medium">Scored &gt;90% on GST filings</p>
                            </div>
                          </div>

                          {/* Badge 2: Ledger Champ */}
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-[#D09C34]/15 text-[#D09C34] flex items-center justify-center font-bold text-xs shrink-0">📊</div>
                            <div>
                              <p className="text-xs font-bold text-slate-800 leading-none">Ledger Champ</p>
                              <p className="text-[9px] text-slate-400 font-medium">Completed 5 ledger worksheets</p>
                            </div>
                          </div>

                          {/* Badge 3: Double Entry Wizard */}
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-[#D09C34]/15 text-[#D09C34] flex items-center justify-center font-bold text-xs shrink-0">🧙‍♂️</div>
                            <div>
                              <p className="text-xs font-bold text-slate-800 leading-none">Entry Wizard</p>
                              <p className="text-[9px] text-slate-400 font-medium">Perfect foundation score card</p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="h-8 w-px bg-slate-200 hidden sm:block" />
                  
                  {/* Notifications Bell */}
                  <div className="relative hidden sm:block">
                    <button
                      onClick={() => setActiveTab("notifications")}
                      className="p-2 text-slate-500 hover:text-[#0A1D3D] hover:bg-slate-50 rounded-lg relative cursor-pointer"
                    >
                      <Bell size={20} />
                      {notifications.filter((n) => !n.read).length > 0 && (
                        <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full animate-ping" />
                      )}
                    </button>
                  </div>
                  <div className="h-8 w-px bg-slate-200" />
                  <div className="flex items-center gap-2.5 cursor-pointer select-none" onClick={() => setActiveTab("profile")}>
                    <div className="h-9 w-9 rounded-lg bg-[#0A1D3D] text-[#D09C34] font-bold text-xs flex items-center justify-center">
                      PK
                    </div>
                    <span className="hidden lg:inline text-xs font-bold text-slate-700">Praveen Kumar</span>
                  </div>
                </div>
              </header>

              {/* Dynamic Panel Workspace */}
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
                          <h2 className="font-heading text-2xl sm:text-3.5xl font-extrabold uppercase">Welcome back, Praveen!</h2>
                          <p className="text-slate-300 text-xs sm:text-sm font-normal max-w-lg leading-relaxed">
                            Your performance indexes look steady. Keep clearing your mock quizzes to maintain your 92% attendance tracker.
                          </p>
                        </div>
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/10 rounded-2xl border border-white/10 text-xs font-bold uppercase tracking-wider text-[#D09C34]">
                          <Sparkles size={14} />
                          <span>Target Exam: Nov 2026 Batch</span>
                        </div>
                      </div>
                    </div>

                    {/* Main Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      
                      {/* Enrolled Course Card */}
                      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-40">
                        <div className="flex justify-between items-start">
                          <div className="h-10 w-10 rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] flex items-center justify-center shrink-0">
                            <BookOpen size={18} />
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Courses</span>
                        </div>
                        <div className="space-y-2">
                          <p className="text-[#0A1D3D] text-2xl font-black leading-none">CA Foundation</p>
                          <div className="space-y-1">
                            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                              <span>Syllabus Completed</span>
                              <span>72%</span>
                            </div>
                            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-[#D09C34] h-full rounded-full" style={{ width: "72%" }} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Attendance Card */}
                      <div
                        onClick={() => setActiveTab("analytics")}
                        className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-40 cursor-pointer hover:border-[#D09C34]/40 hover:shadow-md transition-all group/card"
                      >
                        <div className="flex justify-between items-start">
                          <div className="h-10 w-10 rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] group-hover/card:bg-[#0A1D3D] group-hover/card:text-white transition-all flex items-center justify-center shrink-0">
                            <ClipboardList size={18} />
                          </div>
                          <span className="text-[10px] font-bold text-[#D09C34] uppercase tracking-wider group-hover/card:underline">View Analytics</span>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <div className="space-y-1 text-left">
                            <p className="text-3xl font-black text-[#0A1D3D] leading-none">92%</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Present: 55/60 Classes</p>
                          </div>
                          {/* Circle Radial Progress SVG */}
                          <div className="h-14 w-14 shrink-0 relative">
                            <svg className="w-full h-full transform -rotate-95" viewBox="0 0 36 36">
                              <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                              <path className="text-[#D09C34]" strokeWidth="3" strokeDasharray="92, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Assignments Pending Card */}
                      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-40">
                        <div className="flex justify-between items-start">
                          <div className="h-10 w-10 rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] flex items-center justify-center shrink-0">
                            <CheckSquare size={18} />
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Assignments</span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-3xl font-black text-[#0A1D3D] leading-none">1 Pending</p>
                          <p className="text-[10px] text-red-500 font-bold uppercase mt-1">Due Date: tomorrow 5:00 PM</p>
                        </div>
                      </div>

                      {/* Live Class Card */}
                      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-40">
                        <div className="flex justify-between items-start">
                          <div className="h-10 w-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 relative">
                            <Radio size={18} />
                            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full animate-ping" />
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Next Live Class</span>
                        </div>
                        <div className="space-y-1 text-left">
                          <p className="text-[#0A1D3D] text-sm font-bold uppercase truncate leading-tight">GST Invoice Posting</p>
                          <p className="text-[10px] text-slate-500 font-semibold mt-1">Starts at 11:30 AM (In 2 hours)</p>
                        </div>
                      </div>

                    </div>

                    {/* Chart and AI widget split */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Study Hours Chart (7 Columns) */}
                      <div className="lg:col-span-8 bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm text-left space-y-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-heading text-lg font-bold text-[#0A1D3D] uppercase tracking-wide">Weekly Study Tracker</h3>
                            <p className="text-slate-400 text-xs mt-1">Your learning activity log over the past week</p>
                          </div>
                          <button
                            onClick={() => setActiveTab("analytics")}
                            className="inline-flex items-center gap-1.5 bg-[#D09C34]/15 hover:bg-[#D09C34] hover:text-white text-[#D09C34] px-3 py-1.5 rounded-xl text-[9px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            <span>Full Analytics</span>
                            <ArrowRight size={10} />
                          </button>
                        </div>

                        {/* Styled SVG Chart bars */}
                        <div className="h-48 w-full flex items-end justify-between pt-6 border-b border-slate-100">
                          {/* Mon */}
                          <div className="flex flex-col items-center gap-2 flex-1 group">
                            <span className="text-[10px] font-bold text-[#0A1D3D] opacity-0 group-hover:opacity-100 transition-opacity">4h</span>
                            <div className="w-10 sm:w-12 bg-slate-100 h-28 rounded-t-lg overflow-hidden relative flex items-end">
                              <div className="bg-[#0A1D3D] w-full rounded-t-lg group-hover:bg-[#D09C34] transition-colors" style={{ height: "50%" }} />
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase">Mon</span>
                          </div>
                          
                          {/* Tue */}
                          <div className="flex flex-col items-center gap-2 flex-1 group">
                            <span className="text-[10px] font-bold text-[#0A1D3D] opacity-0 group-hover:opacity-100 transition-opacity">6.5h</span>
                            <div className="w-10 sm:w-12 bg-slate-100 h-28 rounded-t-lg overflow-hidden relative flex items-end">
                              <div className="bg-[#0A1D3D] w-full rounded-t-lg group-hover:bg-[#D09C34] transition-colors" style={{ height: "80%" }} />
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase">Tue</span>
                          </div>

                          {/* Wed */}
                          <div className="flex flex-col items-center gap-2 flex-1 group">
                            <span className="text-[10px] font-bold text-[#0A1D3D] opacity-0 group-hover:opacity-100 transition-opacity">5h</span>
                            <div className="w-10 sm:w-12 bg-slate-100 h-28 rounded-t-lg overflow-hidden relative flex items-end">
                              <div className="bg-[#D09C34] w-full rounded-t-lg transition-colors" style={{ height: "65%" }} />
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase">Wed</span>
                          </div>

                          {/* Thu */}
                          <div className="flex flex-col items-center gap-2 flex-1 group">
                            <span className="text-[10px] font-bold text-[#0A1D3D] opacity-0 group-hover:opacity-100 transition-opacity">3h</span>
                            <div className="w-10 sm:w-12 bg-slate-100 h-28 rounded-t-lg overflow-hidden relative flex items-end">
                              <div className="bg-[#0A1D3D] w-full rounded-t-lg group-hover:bg-[#D09C34] transition-colors" style={{ height: "38%" }} />
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase">Thu</span>
                          </div>

                          {/* Fri */}
                          <div className="flex flex-col items-center gap-2 flex-1 group">
                            <span className="text-[10px] font-bold text-[#0A1D3D] opacity-0 group-hover:opacity-100 transition-opacity">7.5h</span>
                            <div className="w-10 sm:w-12 bg-slate-100 h-28 rounded-t-lg overflow-hidden relative flex items-end">
                              <div className="bg-[#0A1D3D] w-full rounded-t-lg group-hover:bg-[#D09C34] transition-colors" style={{ height: "92%" }} />
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase">Fri</span>
                          </div>
                        </div>

                      </div>

                      {/* Right: AI Widgets Box (4 Columns) */}
                      <div className="lg:col-span-4 space-y-6">
                        
                        {/* AI Copilot Widget */}
                        <div className="bg-[#0A1D3D] text-white p-6 rounded-3xl relative overflow-hidden border border-[#D09C34]/30 shadow-md text-left space-y-4">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(208,156,52,0.1),transparent_50%)] pointer-events-none" />
                          
                          <div className="flex justify-between items-center">
                            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/10 rounded-full border border-white/5 text-[9px] font-bold uppercase tracking-wider text-[#D09C34]">
                              <BrainCircuit size={10} />
                              <span>AI Copilot Widget</span>
                            </div>
                            <span className="text-[8px] font-bold tracking-widest text-[#D09C34] uppercase animate-pulse">Alpha Beta</span>
                          </div>

                          <div className="space-y-1">
                            <h4 className="font-heading text-lg font-bold uppercase tracking-wide">AI Doubt Assistant</h4>
                            <p className="text-slate-400 text-[11px] leading-relaxed">
                              Resolve any immediate accounting doubt with CA standard model.
                            </p>
                          </div>

                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              if (copilotQuery.trim()) {
                                router.push(`/ai-assistant?query=${encodeURIComponent(copilotQuery)}`);
                              } else {
                                router.push("/ai-assistant");
                              }
                            }}
                            className="pt-2"
                          >
                            <div className="relative">
                              <input
                                type="text"
                                value={copilotQuery}
                                onChange={(e) => setCopilotQuery(e.target.value)}
                                placeholder="Ask about Section 40(a)..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-3 text-xs placeholder-slate-500 focus:outline-none pr-10 focus:border-[#D09C34] text-white"
                              />
                              <Button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 rounded-lg bg-[#D09C34] hover:bg-white hover:text-[#0A1D3D] text-white p-0 shrink-0 flex items-center justify-center border border-white/10 cursor-pointer">
                                <Sparkles size={12} />
                              </Button>
                            </div>
                          </form>
                        </div>

                        {/* AI Study Planner Badge */}
                        <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm text-left flex items-center gap-4">
                          <div className="h-10 w-10 rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] flex items-center justify-center shrink-0 border border-slate-50">
                            <Sparkles size={16} />
                          </div>
                          <div className="space-y-0.5">
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide leading-none">Smart Scheduler</p>
                            <h4 className="text-[#0A1D3D] text-sm font-bold uppercase">AI Study Planner</h4>
                            <p className="text-slate-500 text-[11px] font-medium leading-none">Coming soon to portal • 2026 Batch</p>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: AI ANALYTICS */}
                {/* ========================================================== */}
                {activeTab === "analytics" && (
                  <div className="space-y-8 text-left">
                    
                    {/* Header Predictive Banner */}
                    <div className="bg-[#0A1D3D] text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-[#D09C34]/20 shadow-lg flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(208,156,52,0.1),transparent_50%)] pointer-events-none" />
                      <div className="space-y-3 max-w-xl relative z-10">
                        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/10 rounded-full border border-white/5 text-[9px] font-bold uppercase tracking-wider text-[#D09C34]">
                          <Sparkles size={10} className="animate-pulse" />
                          <span>AI Predictive Insights</span>
                        </div>
                        <h2 className="font-heading text-2.5xl sm:text-3.5xl font-extrabold uppercase tracking-tight">Exam Readiness: 86%</h2>
                        <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
                          Your projected pass probability is <strong className="text-white">89% (High)</strong>. AI models analyze your average scores (84.5%), consistent daily streaks, and topic diagnostic accuracy to predict excellent performance in the upcoming CA Foundation Group 1 exam.
                        </p>
                      </div>

                      {/* Learning Streak widget card */}
                      <div className="bg-white/5 border border-white/10 p-5 rounded-2xl relative z-10 w-full lg:w-64 flex items-center gap-4 shrink-0 shadow-inner">
                        <div className="h-12 w-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/20">
                          <Flame size={24} className="fill-orange-400" />
                        </div>
                        <div>
                          <p className="text-[#D09C34] text-xs font-bold uppercase tracking-wider leading-none">Learning Streak</p>
                          <p className="text-2xl font-black text-white mt-1">12 Days Active</p>
                          <p className="text-[9px] text-slate-400 font-semibold mt-1">24 days active this month</p>
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      
                      {/* Prediction / Readiness Ring */}
                      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex items-center justify-between h-40">
                        <div className="space-y-2">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Success Index</span>
                          <h4 className="text-2xl font-black text-[#0A1D3D]">89% Score</h4>
                          <p className="text-[10px] text-green-600 font-bold uppercase flex items-center gap-1">
                            <TrendingUp size={10} />
                            <span>+2.1% this week</span>
                          </p>
                        </div>
                        <div className="h-16 w-16 shrink-0 relative">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            <path className="text-slate-100" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-[#D09C34]" strokeWidth="3.5" strokeDasharray="89, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-extrabold text-[#0A1D3D]">89%</div>
                        </div>
                      </div>

                      {/* Average Marks */}
                      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-40">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Average Marks</span>
                            <h4 className="text-3.5xl font-black text-[#0A1D3D]">84.5%</h4>
                          </div>
                          <div className="h-10 w-10 rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] flex items-center justify-center shrink-0">
                            <Trophy size={18} />
                          </div>
                        </div>
                        {/* Sparkline progress chart representation */}
                        <div className="h-8 w-full pt-2">
                          <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M 0 18 Q 20 12 40 10 T 80 5 T 100 2" fill="none" stroke="#D09C34" strokeWidth="2" />
                            <path d="M 0 18 Q 20 12 40 10 T 80 5 T 100 2 L 100 20 L 0 20 Z" fill="rgba(208,156,52,0.1)" />
                          </svg>
                        </div>
                      </div>

                      {/* Attendance */}
                      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex items-center justify-between h-40">
                        <div className="space-y-2">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Attendance</span>
                          <h4 className="text-2xl font-black text-[#0A1D3D]">92% Track</h4>
                          <p className="text-[10px] text-slate-500 font-semibold uppercase">55/60 classes attended</p>
                        </div>
                        <div className="h-16 w-16 shrink-0 relative">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            <path className="text-slate-100" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-[#0A1D3D]" strokeWidth="3.5" strokeDasharray="92, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-extrabold text-[#0A1D3D]">92%</div>
                        </div>
                      </div>

                      {/* Study Hours */}
                      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-40">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Monthly Study Hours</span>
                            <h4 className="text-3.5xl font-black text-[#0A1D3D]">42.5 hrs</h4>
                          </div>
                          <div className="h-10 w-10 rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] flex items-center justify-center shrink-0">
                            <Clock size={18} />
                          </div>
                        </div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          Avg: 1.8 hrs per day study rate
                        </div>
                      </div>
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Study Hours Weekly Report */}
                      <div className="lg:col-span-6 bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-heading text-lg font-bold text-[#0A1D3D] uppercase tracking-wide">Weekly Activity</h3>
                            <p className="text-slate-400 text-xs mt-0.5">Study hours split across weekdays</p>
                          </div>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D09C34]/10 rounded-xl text-[10px] font-bold uppercase text-[#D09C34] tracking-wider">
                            <span>Current Week</span>
                          </div>
                        </div>

                        {/* Chart Bars */}
                        <div className="h-44 w-full flex items-end justify-between pt-6 border-b border-slate-100">
                          {[
                            { day: "Mon", hrs: "4.0", pct: "53%" },
                            { day: "Tue", hrs: "6.5", pct: "86%" },
                            { day: "Wed", hrs: "5.0", pct: "66%" },
                            { day: "Thu", hrs: "3.0", pct: "40%" },
                            { day: "Fri", hrs: "7.5", pct: "100%" },
                            { day: "Sat", hrs: "5.5", pct: "73%" },
                            { day: "Sun", hrs: "2.0", pct: "26%" },
                          ].map((item) => (
                            <div key={item.day} className="flex flex-col items-center gap-2 flex-1 group">
                              <span className="text-[9px] font-bold text-[#0A1D3D] opacity-0 group-hover:opacity-100 transition-opacity">{item.hrs}h</span>
                              <div className="w-8 sm:w-10 bg-slate-50 h-28 rounded-t-lg overflow-hidden relative flex items-end border border-slate-100/55">
                                <div className="bg-[#0A1D3D] w-full rounded-t-lg group-hover:bg-[#D09C34] transition-colors" style={{ height: item.pct }} />
                              </div>
                              <span className="text-[10px] font-bold text-slate-400 uppercase">{item.day}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Monthly Progress Line Chart */}
                      <div className="lg:col-span-6 bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-heading text-lg font-bold text-[#0A1D3D] uppercase tracking-wide">Monthly Progression</h3>
                            <p className="text-slate-400 text-xs mt-0.5">Syllabus completion percentage growth</p>
                          </div>
                          <div className="inline-flex items-center gap-1 text-green-700 font-bold text-[10px] bg-green-50 py-1 px-2.5 rounded-xl uppercase">
                            <TrendingUp size={12} />
                            <span>Upward Velocity</span>
                          </div>
                        </div>

                        {/* Custom Line SVG Graph */}
                        <div className="h-44 w-full flex flex-col justify-between pt-2">
                          <div className="h-32 w-full relative">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="JuneGradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#D09C34" stopOpacity="0.25"/>
                                  <stop offset="100%" stopColor="#D09C34" stopOpacity="0"/>
                                </linearGradient>
                              </defs>
                              
                              {/* Horizontal lines */}
                              <line x1="0" y1="20" x2="400" y2="20" stroke="#f8fafc" strokeWidth="1.5" />
                              <line x1="0" y1="60" x2="400" y2="60" stroke="#f8fafc" strokeWidth="1.5" />
                              <line x1="0" y1="100" x2="400" y2="100" stroke="#f8fafc" strokeWidth="1.5" />

                              {/* Path Area */}
                              <path d="M 0 100 Q 100 80 200 50 T 400 28 L 400 120 L 0 120 Z" fill="url(#JuneGradient)" />
                              
                              {/* Line Path */}
                              <path d="M 0 100 Q 100 80 200 50 T 400 28" fill="none" stroke="#D09C34" strokeWidth="2.5" />

                              {/* Nodes */}
                              <circle cx="0" cy="100" r="4.5" fill="#0A1D3D" stroke="#D09C34" strokeWidth="2" />
                              <circle cx="133" cy="82" r="4.5" fill="#0A1D3D" stroke="#D09C34" strokeWidth="2" />
                              <circle cx="266" cy="52" r="4.5" fill="#0A1D3D" stroke="#D09C34" strokeWidth="2" />
                              <circle cx="400" cy="28" r="4.5" fill="#0A1D3D" stroke="#D09C34" strokeWidth="2" />
                            </svg>
                          </div>
                          
                          {/* Label Row */}
                          <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase px-1">
                            <span>Mar (15%)</span>
                            <span>Apr (38%)</span>
                            <span>May (60%)</span>
                            <span>Jun (72%)</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Subject Performance Section */}
                    <div className="bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm text-left space-y-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <h3 className="font-heading text-lg font-bold text-[#0A1D3D] uppercase tracking-wide">Subject Performance</h3>
                          <p className="text-slate-400 text-xs mt-0.5">Syllabus mastering accuracy across active modules</p>
                        </div>
                        <span className="text-[10px] font-bold text-[#D09C34] bg-[#D09C34]/10 py-1 px-3 rounded-full uppercase tracking-wider">
                          9 subjects active
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                          { name: "Accounting", score: 88, status: "High Mastered", color: "bg-green-600" },
                          { name: "GST", score: 82, status: "Competent", color: "bg-green-600" },
                          { name: "Income Tax", score: 85, status: "High Mastered", color: "bg-green-600" },
                          { name: "Business Law", score: 76, status: "Proficient", color: "bg-blue-600" },
                          { name: "Economics", score: 90, status: "Excellent", color: "bg-green-600" },
                          { name: "Costing", score: 80, status: "Competent", color: "bg-green-600" },
                          { name: "Financial Management", score: 78, status: "Proficient", color: "bg-blue-600" },
                          { name: "Business Mathematics", score: 72, status: "Needs Review", color: "bg-[#D09C34]" },
                          { name: "Commerce", score: 86, status: "High Mastered", color: "bg-green-600" },
                        ].map((sub) => (
                          <div key={sub.name} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
                            <div className="flex justify-between items-center">
                              <h4 className="text-xs font-bold text-[#0A1D3D] uppercase tracking-wider">{sub.name}</h4>
                              <span className={`text-[8px] font-bold uppercase tracking-wider py-0.5 px-2 rounded-full ${
                                sub.score >= 85 ? "bg-green-50 text-green-700" : sub.score >= 75 ? "bg-blue-50 text-blue-700" : "bg-yellow-50 text-yellow-700"
                              }`}>{sub.status}</span>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between text-[10px] font-bold text-slate-400">
                                <span>Mastery Index</span>
                                <span className="text-[#0A1D3D]">{sub.score}%</span>
                              </div>
                              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                <div className={`h-full rounded-full ${sub.color}`} style={{ width: `${sub.score}%` }} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Diagnostics and Revision Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Diagnostic Analyzer (7 Columns) */}
                      <div className="lg:col-span-7 bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm text-left space-y-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div>
                            <h3 className="font-heading text-lg font-bold text-[#0A1D3D] uppercase tracking-wide">Diagnostic Matrix</h3>
                            <p className="text-slate-400 text-xs mt-0.5">AI evaluated strengths vs topic gaps</p>
                          </div>
                          
                          {/* Subject Selector Dropdown */}
                          <div className="relative shrink-0">
                            <select
                              value={selectedDiagSubject}
                              onChange={(e) => setSelectedDiagSubject(e.target.value)}
                              className="bg-slate-50 border border-slate-200 text-[#0A1D3D] font-bold uppercase text-[10px] rounded-xl py-2 px-3.5 pr-8 appearance-none focus:outline-none focus:border-[#D09C34] cursor-pointer"
                            >
                              {Object.keys(diagnosticData).map((sub) => (
                                <option key={sub} value={sub}>{sub}</option>
                              ))}
                            </select>
                            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500" />
                          </div>
                        </div>

                        {/* Strong & Weak Panels */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                          {/* Strong Areas */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                              <div className="h-6 w-6 rounded-lg bg-green-500/10 text-green-600 flex items-center justify-center">
                                <Trophy size={13} />
                              </div>
                              <h4 className="text-[10px] font-bold uppercase tracking-wider text-green-700">Strong Areas (&gt;85%)</h4>
                            </div>
                            <div className="space-y-2">
                              {diagnosticData[selectedDiagSubject]?.strong.map((item, idx) => (
                                <div key={idx} className="p-3 bg-green-500/5 border border-green-500/10 rounded-xl flex items-center gap-2 text-xs font-semibold text-[#1e293b]">
                                  <CheckCircle2 size={12} className="text-green-600 shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Weak Areas */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                              <div className="h-6 w-6 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center">
                                <AlertCircle size={13} />
                              </div>
                              <h4 className="text-[10px] font-bold uppercase tracking-wider text-red-600">Weak Areas (&lt;75%)</h4>
                            </div>
                            <div className="space-y-2">
                              {diagnosticData[selectedDiagSubject]?.weak.map((item, idx) => (
                                <div key={idx} className="p-3 bg-red-500/5 border border-red-500/10 rounded-xl flex items-center gap-2 text-xs font-semibold text-[#1e293b]">
                                  <AlertCircle size={12} className="text-red-500 shrink-0 animate-pulse" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Revision Checklist (5 Columns) */}
                      <div className="lg:col-span-5 bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm text-left space-y-6">
                        <div>
                          <h3 className="font-heading text-lg font-bold text-[#0A1D3D] uppercase tracking-wide">Revision Tracker</h3>
                          <p className="text-slate-400 text-xs mt-0.5">Syllabus revision checklist tracking</p>
                        </div>

                        <div className="space-y-4 pt-2">
                          {[
                            { title: "CA Accounting Standards", current: 12, total: 15, pct: "80%" },
                            { title: "GST Filing Rules & Forms", current: 8, total: 10, pct: "80%" },
                            { title: "Indian Contract Act Sections", current: 18, total: 25, pct: "72%" },
                            { title: "Cost Volume Profit Formulas", current: 6, total: 6, pct: "100%" },
                          ].map((item) => (
                            <div key={item.title} className="space-y-1.5 p-3 bg-slate-50 border border-slate-100 rounded-2xl">
                              <div className="flex justify-between items-center">
                                <h4 className="text-xs font-bold text-[#0A1D3D] truncate pr-2 uppercase tracking-wide">{item.title}</h4>
                                <span className="text-[10px] font-mono text-[#D09C34] shrink-0 font-bold">{item.current}/{item.total}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                                  <div className="bg-[#D09C34] h-full rounded-full" style={{ width: item.pct }} />
                                </div>
                                <span className="text-[9px] font-bold text-slate-400 shrink-0">{item.pct}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Batch Leaderboard */}
                    <div className="bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm text-left space-y-6">
                      <div>
                        <h3 className="font-heading text-lg font-bold text-[#0A1D3D] uppercase tracking-wide">Batch Leaderboard</h3>
                        <p className="text-slate-400 text-xs mt-0.5">Nov 2026 Coimbatore Center Leaderboard Rankings</p>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase border-b border-slate-100">
                              <th className="py-4 px-6 text-center w-20">Rank</th>
                              <th className="py-4 px-6 text-left">Student Name</th>
                              <th className="py-4 px-6 text-center w-40">Leaderboard Points</th>
                              <th className="py-4 px-6 text-center w-36">Streak (Days)</th>
                              <th className="py-4 px-6 text-center w-40">Status</th>
                            </tr>
                          </thead>
                          <tbody className="text-xs font-semibold text-slate-600 divide-y divide-slate-100">
                            {[
                              { rank: 1, name: "Aditya Sharma", points: 988, streak: 30, medal: "🏆 Gold", status: "Active" },
                              { rank: 2, name: "Riya Patel", points: 965, streak: 18, medal: "🥈 Silver", status: "Active" },
                              { rank: 3, name: "Sneha Reddy", points: 950, streak: 14, medal: "🥉 Bronze", status: "Active" },
                              { rank: 4, name: "Praveen Kumar", points: 942, streak: 12, isCurrent: true, status: "Active" },
                              { rank: 5, name: "Karthik Subramanian", points: 920, streak: 8, status: "Inactive" },
                            ].map((row) => (
                              <tr key={row.rank} className={`transition-colors ${
                                row.isCurrent ? "bg-[#D09C34]/10 font-bold border-y border-[#D09C34]/20" : ""
                              }`}>
                                <td className="py-4 px-6 text-center font-bold">
                                  {row.rank <= 3 ? row.medal : `#${row.rank}`}
                                </td>
                                <td className="py-4 px-6">
                                  <div className="flex items-center gap-3">
                                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center font-bold text-xs uppercase ${
                                      row.isCurrent ? "bg-[#0A1D3D] text-[#D09C34]" : "bg-slate-100 text-slate-600"
                                    }`}>
                                      {row.name.split(" ").map(w => w[0]).join("")}
                                    </div>
                                    <span className={row.isCurrent ? "text-[#0A1D3D] font-extrabold" : ""}>{row.name}</span>
                                    {row.isCurrent && <span className="bg-[#D09C34] text-white text-[8px] font-bold py-0.5 px-2 rounded-full uppercase tracking-wider ml-2">You</span>}
                                  </div>
                                </td>
                                <td className="py-4 px-6 text-center text-[#0A1D3D] font-bold">{row.points} pts</td>
                                <td className="py-4 px-6 text-center font-mono">{row.streak}</td>
                                <td className="py-4 px-6 text-center">
                                  <span className={`inline-block h-2 w-2 rounded-full mr-1.5 ${
                                    row.status === "Active" ? "bg-green-500" : "bg-slate-300"
                                  }`} />
                                  <span className="uppercase text-[9px] font-bold tracking-wider">{row.status}</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: AI TUTOR & VOICE */}
                {/* ========================================================== */}
                {activeTab === "ai-tutor" && (
                  <div className="space-y-6 text-left">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <h2 className="text-xl font-bold uppercase font-heading text-[#0A1D3D]">AI Doubt Assistant</h2>
                        <p className="text-xs text-slate-400 mt-1">Get immediate answers for Accounting, GST, Income Tax, and Business Law.</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <select
                          value={selectedTutorSubject}
                          onChange={(e) => setSelectedTutorSubject(e.target.value)}
                          className="bg-white border border-slate-200 text-slate-700 text-xs rounded-xl py-2 px-3 focus:outline-none"
                        >
                          <option value="Accounting">Accounting</option>
                          <option value="GST">GST & Indirect Taxes</option>
                          <option value="Income Tax">Income Tax</option>
                          <option value="Business Law">Business Law</option>
                        </select>

                        <button
                          onClick={toggleVoiceMode}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                            isVoiceActive
                              ? "bg-red-500 text-white border-red-500 animate-pulse"
                              : "bg-white border-slate-200 text-[#0A1D3D] hover:bg-slate-50"
                          }`}
                        >
                          <Mic size={14} className={isVoiceActive ? "animate-bounce" : ""} />
                          <span>{isVoiceActive ? "Listening..." : "Voice Mode"}</span>
                        </button>
                      </div>
                    </div>

                    {/* Chat Area Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                      
                      {/* Left: Chat history log */}
                      <div className="lg:col-span-3 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between min-h-[450px]">
                        
                        {/* Messages box */}
                        <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
                          {tutorMessages.map((msg, idx) => (
                            <div
                              key={idx}
                              className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                            >
                              <div
                                className={`p-4 rounded-2xl max-w-xl text-xs leading-relaxed ${
                                  msg.sender === "user"
                                    ? "bg-[#0A1D3D] text-white rounded-tr-none"
                                    : "bg-slate-50 text-slate-700 border border-slate-100 rounded-tl-none"
                                }`}
                              >
                                {msg.sender === "ai" ? (
                                  <div className="space-y-2">
                                    <p className="whitespace-pre-line">{msg.text}</p>
                                    <div className="flex justify-between items-center pt-2 border-t border-slate-200/40 text-[9px] text-slate-400 font-semibold uppercase">
                                      <span>TUTOR BOT</span>
                                      <button
                                        onClick={() => {
                                          navigator.clipboard.writeText(msg.text);
                                          triggerToast("Copied answer to clipboard!");
                                        }}
                                        className="hover:text-[#D09C34] flex items-center gap-1 cursor-pointer"
                                      >
                                        <Copy size={10} />
                                        <span>Copy</span>
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <p>{msg.text}</p>
                                )}
                              </div>
                              <span className="text-[9px] text-slate-400 font-mono mt-1 px-1">{msg.time}</span>
                            </div>
                          ))}

                          {isTutorTyping && (
                            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                              <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" />
                              <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                              <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                              <span>AI Tutor compiles references...</span>
                            </div>
                          )}
                        </div>

                        {/* Voice overlay / Wave */}
                        {isVoiceActive && (
                          <div className="my-6 p-4 bg-red-500/5 border border-red-500/10 rounded-2xl flex flex-col items-center justify-center gap-3">
                            <div className="flex gap-1 h-8 items-center">
                              <span className="w-1 bg-red-500 h-4 rounded-full animate-bounce [animation-delay:0.1s]" />
                              <span className="w-1 bg-red-500 h-6 rounded-full animate-bounce [animation-delay:0.3s]" />
                              <span className="w-1 bg-red-500 h-8 rounded-full animate-bounce [animation-delay:0.5s]" />
                              <span className="w-1 bg-red-500 h-5 rounded-full animate-bounce [animation-delay:0.2s]" />
                              <span className="w-1 bg-red-500 h-7 rounded-full animate-bounce [animation-delay:0.4s]" />
                            </div>
                            <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">Listening to audio input (CA/CMA voice model active)...</p>
                          </div>
                        )}

                        {/* Form input */}
                        <div className="pt-4 border-t border-slate-100 flex gap-2">
                          <input
                            type="text"
                            placeholder={`Ask your ${selectedTutorSubject} query...`}
                            value={tutorInput}
                            onChange={(e) => setTutorInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSendTutorMessage(tutorInput)}
                            className="flex-1 bg-slate-50 border border-slate-200 focus:border-[#0A1D3D] rounded-xl py-3 px-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0A1D3D]"
                          />
                          <button
                            onClick={() => handleSendTutorMessage(tutorInput)}
                            className="bg-[#D09C34] hover:bg-[#0A1D3D] hover:scale-105 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-sm cursor-pointer"
                          >
                            Send
                          </button>
                        </div>
                      </div>

                      {/* Right: Suggested Prompts */}
                      <div className="space-y-4">
                        <div className="bg-white border border-slate-100 p-5 rounded-3xl shadow-sm text-left">
                          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b pb-1.5 mb-3">Suggested Doubts</h3>
                          <div className="space-y-2.5">
                            <button
                              onClick={() => handleSendTutorMessage("Explain consignment abnormal loss treatment.")}
                              className="w-full text-left text-[11px] leading-relaxed p-2.5 bg-slate-50 hover:bg-[#D09C34]/10 rounded-xl border border-slate-100 hover:border-[#D09C34]/30 text-slate-600 hover:text-slate-800 transition-all font-semibold cursor-pointer"
                            >
                              "How is abnormal loss calculated in consignment accounts?"
                            </button>
                            <button
                              onClick={() => handleSendTutorMessage("Reconcile GSTR-2B ITC under Rule 37A.")}
                              className="w-full text-left text-[11px] leading-relaxed p-2.5 bg-slate-50 hover:bg-[#D09C34]/10 rounded-xl border border-slate-100 hover:border-[#D09C34]/30 text-slate-600 hover:text-slate-800 transition-all font-semibold cursor-pointer"
                            >
                              "What are Rule 37A ITC reconciliation timelines?"
                            </button>
                            <button
                              onClick={() => handleSendTutorMessage("Section 40(a)(ia) disallowance rules.")}
                              className="w-full text-left text-[11px] leading-relaxed p-2.5 bg-slate-50 hover:bg-[#D09C34]/10 rounded-xl border border-slate-100 hover:border-[#D09C34]/30 text-slate-600 hover:text-slate-800 transition-all font-semibold cursor-pointer"
                            >
                              "Explain Section 40(a)(ia) disallowance for TDS defaults."
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: AI STUDY PLANNER */}
                {/* ========================================================== */}
                {activeTab === "ai-planner" && (
                  <div className="space-y-6 text-left">
                    <div>
                      <h2 className="text-xl font-bold uppercase font-heading text-[#0A1D3D]">Adaptive Study Planner</h2>
                      <p className="text-xs text-slate-400 mt-1">Configure your target exam date and create a calendar schedule optimized for your gaps.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                      
                      {/* Left: Configuration Planner */}
                      <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm space-y-4">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b pb-1.5">Planner Configurations</h3>
                        <form className="space-y-4" onSubmit={handleGenerateStudyPlan}>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Target Exam Date</label>
                            <input
                              type="date"
                              value={plannerExamDate}
                              onChange={(e) => setPlannerExamDate(e.target.value)}
                              className="w-full text-xs rounded-xl py-2.5 px-3 bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none focus:border-[#0A1D3D]"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Daily Study Target (Hours)</label>
                            <input
                              type="number"
                              min="1"
                              max="16"
                              value={plannerDailyHours}
                              onChange={(e) => setPlannerDailyHours(e.target.value)}
                              className="w-full text-xs rounded-xl py-2.5 px-3 bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none focus:border-[#0A1D3D]"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Focus Weakness Area</label>
                            <input
                              type="text"
                              required
                              value={plannerFocusArea}
                              onChange={(e) => setPlannerFocusArea(e.target.value)}
                              className="w-full text-xs rounded-xl py-2.5 px-3 bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0A1D3D]"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isGeneratingPlan}
                            className="w-full bg-[#D09C34] hover:bg-[#0A1D3D] hover:text-white text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 shadow-sm cursor-pointer border border-[#D09C34]"
                          >
                            {isGeneratingPlan ? "Compiling schedules..." : "Generate AI Plan"}
                          </button>
                        </form>
                      </div>

                      {/* Right: Generated Plan Output */}
                      <div className="lg:col-span-2 bg-white border border-slate-100 p-6 rounded-3xl shadow-sm space-y-4">
                        <div className="flex justify-between items-center border-b pb-2">
                          <h3 className="text-xs font-bold text-[#0A1D3D] uppercase tracking-wider">Personalized Weekly Calendar</h3>
                          <span className="text-[9px] font-bold text-[#D09C34] uppercase bg-[#D09C34]/10 py-1 px-2.5 rounded-full">Adaptive Ready</span>
                        </div>

                        <div className="space-y-3">
                          {generatedPlan.map((task, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                            >
                              <div className="flex items-center gap-3.5">
                                <input
                                  type="checkbox"
                                  checked={task.completed}
                                  onChange={() => {
                                    const nextPlan = [...generatedPlan];
                                    nextPlan[idx].completed = !nextPlan[idx].completed;
                                    setGeneratedPlan(nextPlan);
                                    if (nextPlan[idx].completed) {
                                      setCoins(c => c + 10);
                                      triggerToast("Task completed! +10 Coins earned.");
                                    }
                                  }}
                                  className="h-4 w-4 text-[#D09C34] rounded border-slate-300 focus:ring-[#D09C34] cursor-pointer"
                                />
                                <div className="text-left">
                                  <p className="text-xs font-bold text-[#0A1D3D] uppercase tracking-wide leading-tight">{task.day}</p>
                                  <p className={`text-xs mt-1 leading-normal ${task.completed ? "line-through text-slate-400 font-medium" : "text-slate-600 font-bold"}`}>
                                    {task.topic}
                                  </p>
                                </div>
                              </div>
                              <span className="text-[10px] font-bold font-mono text-slate-400 shrink-0">{task.duration}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: AI NOTES GENERATOR */}
                {/* ========================================================== */}
                {activeTab === "ai-notes" && (
                  <div className="space-y-6 text-left">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div>
                        <h2 className="text-xl font-bold uppercase font-heading text-[#0A1D3D]">AI Revision Notes Generator</h2>
                        <p className="text-xs text-slate-400 mt-1">Generate high-yield commerce summaries, acts syntaxes, and ledger format reviews.</p>
                      </div>

                      {/* Network Offline synchronizer label */}
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border ${
                        simulatedOffline 
                          ? "bg-amber-500/10 border-amber-500/30 text-amber-600 animate-pulse" 
                          : "bg-emerald-500/10 border-emerald-500/30 text-emerald-600"
                      }`}>
                        {simulatedOffline ? <WifiOff size={10} /> : <Wifi size={10} />}
                        <span>{simulatedOffline ? "Offline Learning Active" : "Cloud Synced"}</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                      {/* Left: Input parameters */}
                      <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm space-y-4">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b pb-1.5">Parameters</h3>
                        <form className="space-y-4" onSubmit={handleCompileNotes}>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Subject</label>
                            <select
                              value={notesSubject}
                              onChange={(e) => setNotesSubject(e.target.value)}
                              className="w-full text-xs rounded-xl py-2.5 px-3 bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none"
                            >
                              <option value="Accounting">Principles of Accounting</option>
                              <option value="GST">GST indirect taxes</option>
                              <option value="Income Tax">Income Tax slab rules</option>
                              <option value="Business Law">Business Law & Acts</option>
                            </select>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Topic Focus / Keyword</label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. abnormal loss, GSTR-2B ITC, WACC"
                              value={notesTopic}
                              onChange={(e) => setNotesTopic(e.target.value)}
                              className="w-full text-xs rounded-xl py-2.5 px-3 bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:border-[#0A1D3D]"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isGeneratingNotes}
                            className="w-full bg-[#D09C34] hover:bg-[#0A1D3D] hover:text-white text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 shadow-sm cursor-pointer border border-[#D09C34]"
                          >
                            {isGeneratingNotes ? "Compiling references..." : "Generate Notes"}
                          </button>
                        </form>
                      </div>

                      {/* Right: Compiled notes rendering */}
                      <div className="lg:col-span-2 bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm min-h-[350px] flex flex-col justify-between">
                        {notesResult ? (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center border-b pb-2">
                              <h3 className="text-xs font-bold text-[#0A1D3D] uppercase tracking-wider">AI Revision Cheat Sheet</h3>
                              
                              <div className="flex items-center gap-3">
                                {/* Offline caching trigger */}
                                <button
                                  onClick={() => toggleOfflineAsset(`${notesTopic} Guide`)}
                                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                                    downloadedAssets[`${notesTopic} Guide`]
                                      ? "bg-[#D09C34]/15 border-[#D09C34] text-[#D09C34]"
                                      : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                                  }`}
                                  title="Store offline inside PWA cache"
                                >
                                  <Download size={10} />
                                  <span>{downloadedAssets[`${notesTopic} Guide`] ? "Offline Cached" : "Offline Cache"}</span>
                                </button>

                                <button
                                  onClick={() => {
                                    navigator.clipboard.writeText(notesResult);
                                    triggerToast("Copied notes to clipboard!");
                                  }}
                                  className="text-slate-400 hover:text-[#D09C34] flex items-center gap-1 text-[9px] uppercase font-bold cursor-pointer"
                                >
                                  <Copy size={12} />
                                  <span>Copy</span>
                                </button>
                              </div>
                            </div>

                            <div className="p-4 bg-slate-50 border rounded-2xl max-h-[300px] overflow-y-auto text-left font-mono text-xs whitespace-pre-wrap text-slate-700 leading-relaxed">
                              {notesResult}
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center py-20 text-slate-400 space-y-2">
                            <FileText size={48} className="text-slate-300" />
                            <p className="text-xs font-bold uppercase tracking-wider">Configure parameters and compile notes sheets.</p>
                          </div>
                        )}

                        {/* Offline fallback directory */}
                        <div className="pt-4 border-t border-slate-100 mt-6 text-left">
                          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">PWA Offline Available Material</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {Object.keys(downloadedAssets).map((asset) => (
                              <div
                                key={asset}
                                className="flex justify-between items-center p-2 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold"
                              >
                                <span className="truncate">{asset}</span>
                                <button
                                  onClick={() => toggleOfflineAsset(asset)}
                                  className={`text-[9px] font-bold uppercase px-2 py-1 rounded-lg cursor-pointer ${
                                    downloadedAssets[asset]
                                      ? "bg-[#D09C34]/15 text-[#D09C34] hover:bg-[#D09C34]/25"
                                      : "bg-slate-200 text-slate-500 hover:bg-slate-300"
                                  }`}
                                >
                                  {downloadedAssets[asset] ? "Offline Ready" : "Download"}
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: AI MOCK TESTS */}
                {/* ========================================================== */}
                {activeTab === "ai-mock-test" && (
                  <div className="space-y-6 text-left">
                    <div>
                      <h2 className="text-xl font-bold uppercase font-heading text-[#0A1D3D]">AI Practice Mock Exam</h2>
                      <p className="text-xs text-slate-400 mt-1">Duolingo-styled test suite asking target questions with score feedbacks.</p>
                    </div>

                    <div className="max-w-2xl bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between min-h-[350px]">
                      
                      {!isMockQuizStarted ? (
                        /* Initial Screen: Select exam details */
                        <div className="space-y-6 text-center py-8">
                          <div className="mx-auto h-16 w-16 bg-[#D09C34]/15 rounded-full flex items-center justify-center text-[#D09C34]">
                            <Trophy size={32} />
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide">Generate Commerce Mock Test</h3>
                            <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                              Take a quick 3-question mock test. Answers are graded instantly with explanations and earn you coins.
                            </p>
                          </div>

                          <div className="max-w-xs mx-auto space-y-4">
                            <div className="space-y-1 text-left">
                              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Subject Track</label>
                              <select
                                value={mockSubject}
                                onChange={(e) => setMockSubject(e.target.value)}
                                className="w-full text-xs rounded-xl py-2.5 px-3 bg-slate-50 border border-slate-200 focus:outline-none"
                              >
                                <option value="Accounting">Principles of Accounting</option>
                                <option value="GST">GST & Indirect Taxation</option>
                                <option value="Income Tax">Income Tax & Slab Rules</option>
                              </select>
                            </div>

                            <button
                              onClick={startMockTest}
                              className="w-full bg-[#D09C34] hover:bg-[#0A1D3D] hover:text-white text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-sm cursor-pointer border border-[#D09C34]"
                            >
                              Launch AI Mock Exam
                            </button>
                          </div>
                        </div>
                      ) : !isMockQuizFinished ? (
                        /* Exam is Active */
                        <div className="space-y-6">
                          <div className="flex justify-between items-center border-b pb-3 text-slate-400 text-xs font-bold uppercase font-mono">
                            <span>Question {currentMockIndex + 1} of {mockQuizQuestions.length}</span>
                            <span className="text-[#D09C34] animate-pulse">Timer: {mockTimer}s</span>
                          </div>

                          {/* Progress bar */}
                          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#D09C34] transition-all duration-300"
                              style={{ width: `${((currentMockIndex + 1) / mockQuizQuestions.length) * 100}%` }}
                            />
                          </div>

                          {/* Question details */}
                          <div className="space-y-5 text-left">
                            <h4 className="text-sm sm:text-base font-extrabold text-[#0A1D3D] leading-relaxed">
                              {mockQuizQuestions[currentMockIndex].q}
                            </h4>

                            {/* Option buttons */}
                            <div className="grid grid-cols-1 gap-3">
                              {["A", "B", "C", "D"].map((optKey) => {
                                const question = mockQuizQuestions[currentMockIndex];
                                const optText = (question as any)[optKey.toLowerCase()];
                                return (
                                  <button
                                    key={optKey}
                                    onClick={() => selectMockAnswer(optKey)}
                                    className={`w-full p-4 rounded-2xl border text-xs font-bold transition-all text-left flex justify-between items-center cursor-pointer ${
                                      mockSelectedAnswers[currentMockIndex] === optKey
                                        ? "bg-[#0A1D3D] border-[#0A1D3D] text-white shadow-md"
                                        : "bg-slate-50 border-slate-100 hover:border-slate-300 text-slate-600 hover:text-slate-800"
                                    }`}
                                  >
                                    <span>{optKey}. {optText}</span>
                                    {mockSelectedAnswers[currentMockIndex] === optKey && <Check size={14} />}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Footer navigation */}
                          <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                            <button
                              disabled={currentMockIndex === 0}
                              onClick={() => setCurrentMockIndex(prev => prev - 1)}
                              className="text-xs font-bold text-slate-400 hover:text-slate-700 disabled:opacity-40 uppercase cursor-pointer"
                            >
                              Previous
                            </button>

                            {currentMockIndex === mockQuizQuestions.length - 1 ? (
                              <button
                                onClick={submitMockTest}
                                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-xl transition-all shadow-sm cursor-pointer border border-emerald-500"
                              >
                                Submit Exam
                              </button>
                            ) : (
                              <button
                                onClick={() => setCurrentMockIndex(prev => prev + 1)}
                                className="bg-[#0A1D3D] hover:bg-[#D09C34] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-xl transition-all shadow-sm cursor-pointer"
                              >
                                Next Question
                              </button>
                            )}
                          </div>
                        </div>
                      ) : (
                        /* Exam is Finished - Report Screen */
                        <div className="space-y-6">
                          <div className="text-center space-y-3">
                            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-[#0A1D3D]">Practice Exam Report</h3>
                            <div className="h-1 w-12 bg-[#D09C34] mx-auto rounded-full" />
                            <p className="text-xs text-slate-400 font-semibold uppercase">Subject track: {mockSubject}</p>
                          </div>

                          <div className="p-5 bg-slate-50 border rounded-2xl text-left space-y-4">
                            {mockQuizQuestions.map((q, idx) => {
                              const isCorrect = mockSelectedAnswers[idx] === q.ans;
                              return (
                                <div key={idx} className="space-y-1.5 pb-3 border-b last:border-0 last:pb-0">
                                  <p className="text-xs font-bold text-[#0A1D3D] leading-relaxed">
                                    Q{idx + 1}: {q.q}
                                  </p>
                                  <div className="text-[11px] leading-relaxed">
                                    <div className="flex items-center gap-1.5 font-semibold">
                                      <span>Your Answer: </span>
                                      <span className={isCorrect ? "text-emerald-600" : "text-red-500"}>
                                        {mockSelectedAnswers[idx] || "Unanswered"} {isCorrect ? "✓" : "✗"}
                                      </span>
                                    </div>
                                    <div className="text-slate-550 font-medium mt-1 leading-normal">
                                      <strong className="text-slate-600">AI explanation: </strong> {q.exp}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          <button
                            onClick={() => setIsMockQuizStarted(false)}
                            className="bg-[#0A1D3D] hover:bg-[#D09C34] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-sm cursor-pointer"
                          >
                            Return to Setup
                          </button>
                        </div>
                      )}

                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: AI CAREER HUB */}
                {/* ========================================================== */}
                {activeTab === "ai-career" && (
                  <div className="space-y-6 text-left">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h2 className="text-xl font-bold uppercase font-heading text-[#0A1D3D]">AI Career Coach & Placements</h2>
                        <p className="text-xs text-slate-400 mt-1">Generate resumes, practice mock webcam interviews, and find accounting placements.</p>
                      </div>

                      {/* Switcher Buttons */}
                      <div className="flex gap-1.5 bg-slate-100 p-1 rounded-xl self-start border border-slate-200/50">
                        <button
                          onClick={() => setCareerSubTab("resume")}
                          className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                            careerSubTab === "resume" ? "bg-white text-[#0A1D3D] shadow-sm" : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          Resume
                        </button>
                        <button
                          onClick={() => setCareerSubTab("interview")}
                          className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                            careerSubTab === "interview" ? "bg-white text-[#0A1D3D] shadow-sm" : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          Coach
                        </button>
                        <button
                          onClick={() => setCareerSubTab("placements")}
                          className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                            careerSubTab === "placements" ? "bg-white text-[#0A1D3D] shadow-sm" : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          Jobs
                        </button>
                        <button
                          onClick={() => setCareerSubTab("scholarship")}
                          className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                            careerSubTab === "scholarship" ? "bg-white text-[#0A1D3D] shadow-sm" : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          Scholarship
                        </button>
                      </div>
                    </div>

                    {/* View Switch Rendering */}
                    <div className="grid grid-cols-1 gap-6">

                      {/* 1. Resume Builder */}
                      {careerSubTab === "resume" && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                          <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm space-y-4">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b pb-1.5">Resume Fields</h3>
                            <form className="space-y-4" onSubmit={handleGenerateResume}>
                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Full Name</label>
                                <input
                                  type="text"
                                  required
                                  value={resumeFullName}
                                  onChange={(e) => setResumeFullName(e.target.value)}
                                  className="w-full text-xs rounded-xl py-2.5 px-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0A1D3D]"
                                />
                              </div>

                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Key Professional Skills</label>
                                <textarea
                                  required
                                  rows={3}
                                  value={resumeSkills}
                                  onChange={(e) => setResumeSkills(e.target.value)}
                                  className="w-full text-xs rounded-xl py-2.5 px-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0A1D3D]"
                                />
                              </div>

                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Work Experience / Article-ship</label>
                                <textarea
                                  required
                                  rows={3}
                                  value={resumeExperience}
                                  onChange={(e) => setResumeExperience(e.target.value)}
                                  className="w-full text-xs rounded-xl py-2.5 px-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0A1D3D]"
                                />
                              </div>

                              <button
                                type="submit"
                                disabled={isGeneratingResume}
                                className="w-full bg-[#D09C34] hover:bg-[#0A1D3D] hover:text-white text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-sm cursor-pointer border border-[#D09C34]"
                              >
                                {isGeneratingResume ? "Structuring CV..." : "Generate AI Resume"}
                              </button>
                            </form>
                          </div>

                          <div className="lg:col-span-2 bg-slate-50 border border-slate-200 p-6 rounded-3xl min-h-[350px] flex flex-col justify-between">
                            {generatedResumeHtml ? (
                              <div className="space-y-4">
                                <div className="flex justify-between items-center border-b pb-2">
                                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">AI Compiled Professional Resume</h4>
                                  <button
                                    onClick={() => {
                                      triggerToast("Resume details copied to clipboard!");
                                    }}
                                    className="text-[#D09C34] hover:text-[#0A1D3D] flex items-center gap-1 text-[9px] uppercase font-bold cursor-pointer"
                                  >
                                    <Copy size={12} />
                                    <span>Copy CV</span>
                                  </button>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: generatedResumeHtml }} />
                              </div>
                            ) : (
                              <div className="flex flex-col items-center justify-center py-20 text-slate-400 space-y-2">
                                <FileText size={48} className="text-slate-300" />
                                <p className="text-xs font-bold uppercase tracking-wider">Configure resume parameters and compile template.</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* 2. Interview Coach */}
                      {careerSubTab === "interview" && (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                          {/* Left: webcam simulator (5 Columns) */}
                          <div className="lg:col-span-5 bg-[#09182F] rounded-3xl overflow-hidden aspect-[4/3] relative flex flex-col justify-between p-4 text-white border border-slate-800">
                            {isInterviewWebcamOn ? (
                              /* Webcam Active Simulator */
                              <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center relative">
                                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 bg-red-600 rounded-full font-bold text-[8px] uppercase tracking-wider text-white animate-pulse">
                                  <span className="h-1.5 w-1.5 bg-white rounded-full" />
                                  <span>Webcam Active (REC)</span>
                                </div>
                                
                                <div className="h-28 w-28 bg-[#D09C34]/15 rounded-full flex items-center justify-center text-[#D09C34] border border-[#D09C34]/30">
                                  <User size={56} />
                                </div>
                                <p className="text-[10px] text-slate-400 mt-4 uppercase tracking-wider font-semibold">Student audio and speech metrics active</p>
                              </div>
                            ) : (
                              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/80 p-6 space-y-4">
                                <Video size={36} className="text-slate-500" />
                                <div className="space-y-1 text-center">
                                  <p className="text-xs font-bold uppercase text-slate-200">Launch Oral Interview Coach</p>
                                  <p className="text-[10px] text-slate-400">Grant mock webcam permission to receive real-time oral guidance feedback.</p>
                                </div>
                                <button
                                  onClick={() => setIsInterviewWebcamOn(true)}
                                  className="bg-[#D09C34] hover:bg-[#0A1D3D] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-xl transition-all shadow-sm cursor-pointer"
                                >
                                  Enable Webcam
                                </button>
                              </div>
                            )}
                          </div>

                          {/* Right: Interview chat (7 Columns) */}
                          <div className="lg:col-span-7 bg-white border border-slate-100 p-6 rounded-3xl shadow-sm text-left space-y-5">
                            <div className="flex justify-between items-center border-b pb-2">
                              <h3 className="text-xs font-bold text-[#0A1D3D] uppercase tracking-wider">Oral Mock Questions</h3>
                              <span className="text-[9px] font-bold text-[#D09C34] uppercase bg-[#D09C34]/10 py-1 px-2.5 rounded-full">ICAI Mock Interviewer</span>
                            </div>

                            <div className="p-4 bg-slate-50 border rounded-2xl text-xs leading-relaxed text-slate-600 font-semibold italic">
                              "{interviewQuestions[currentInterviewIndex]}"
                            </div>

                            {/* Response Input */}
                            <div className="space-y-3 pt-2">
                              <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Your Answer</label>
                                <textarea
                                  rows={3}
                                  placeholder="Type your response here or speak it..."
                                  value={interviewAnswerInput}
                                  onChange={(e) => setInterviewAnswerInput(e.target.value)}
                                  className="w-full text-xs rounded-xl py-2.5 px-3 bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0A1D3D]"
                                />
                              </div>

                              <div className="flex gap-2">
                                <button
                                  onClick={handleCheckInterviewAnswer}
                                  disabled={isInterviewChecking || !interviewAnswerInput.trim()}
                                  className="bg-[#0A1D3D] hover:bg-[#D09C34] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-xl transition-all shadow-sm cursor-pointer disabled:opacity-40"
                                >
                                  {isInterviewChecking ? "Checking clarity..." : "Analyze Answer"}
                                </button>
                                <button
                                  onClick={() => {
                                    setInterviewAnswerInput("");
                                    setInterviewFeedback("");
                                    setCurrentInterviewIndex(prev => (prev + 1) % interviewQuestions.length);
                                  }}
                                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-xl transition-all cursor-pointer border border-slate-200"
                                >
                                  Next Question
                                </button>
                              </div>
                            </div>

                            {/* Feedback panel */}
                            {interviewFeedback && (
                              <div className="p-4 bg-[#D09C34]/5 border border-[#D09C34]/15 rounded-2xl text-xs leading-relaxed text-slate-700 whitespace-pre-line font-medium text-left">
                                {interviewFeedback}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* 3. Placement Assistant */}
                      {careerSubTab === "placements" && (
                        <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm text-left space-y-4">
                          <div>
                            <h3 className="text-xs font-bold text-[#0A1D3D] uppercase tracking-wider">Krithun Placements & Job Postings</h3>
                            <p className="text-xs text-slate-400 mt-1">Active openings matched to your current student portal GPA grades.</p>
                          </div>

                          <div className="overflow-x-auto">
                            <table className="w-full text-xs text-left border-collapse">
                              <thead>
                                <tr className="border-b text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                  <th className="py-3 px-2">Job Vacancy</th>
                                  <th className="py-3 px-2">Corporate Firm</th>
                                  <th className="py-3 px-2">Salary Estimate</th>
                                  <th className="py-3 px-2">AI Match Index</th>
                                  <th className="py-3 px-2 text-right">Placement Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b hover:bg-slate-50/50">
                                  <td className="py-4 px-2 font-bold text-[#0A1D3D]">Audit Assistant Article-ship</td>
                                  <td className="py-4 px-2 text-slate-400 font-semibold">Kovai Audit Partners, Coimbatore</td>
                                  <td className="py-4 px-2 font-mono">₹6.5 LPA</td>
                                  <td className="py-4 px-2 font-bold text-[#D09C34]">94% Match</td>
                                  <td className="py-4 px-2 text-right">
                                    <button onClick={() => triggerToast("Application submitted to Kovai Partners!")} className="px-3 py-1.5 bg-[#D09C34] text-[#0A1D3D] hover:bg-[#0A1D3D] hover:text-white rounded-lg font-bold text-[9px] uppercase tracking-wider transition-colors cursor-pointer border border-[#D09C34]">
                                      Apply Now
                                    </button>
                                  </td>
                                </tr>
                                <tr className="border-b hover:bg-slate-50/50">
                                  <td className="py-4 px-2 font-bold text-[#0A1D3D]">Direct Taxes Accountant</td>
                                  <td className="py-4 px-2 text-slate-400 font-semibold">Coimbatore Corporate Taxes Corp</td>
                                  <td className="py-4 px-2 font-mono">₹8.0 LPA</td>
                                  <td className="py-4 px-2 font-bold text-slate-400">81% Match</td>
                                  <td className="py-4 px-2 text-right">
                                    <button onClick={() => triggerToast("Application submitted to Corporate Taxes!")} className="px-3 py-1.5 bg-[#D09C34] text-[#0A1D3D] hover:bg-[#0A1D3D] hover:text-white rounded-lg font-bold text-[9px] uppercase tracking-wider transition-colors cursor-pointer border border-[#D09C34]">
                                      Apply Now
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* 4. Scholarship Predictor */}
                      {careerSubTab === "scholarship" && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                          <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm space-y-4">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b pb-1.5">Scholarship Criteria</h3>
                            <form className="space-y-4" onSubmit={handlePredictScholarship}>
                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Average Quiz Score (%)</label>
                                <input
                                  type="number"
                                  min="40"
                                  max="100"
                                  required
                                  value={scholarshipMarks}
                                  onChange={(e) => setScholarshipMarks(e.target.value)}
                                  className="w-full text-xs rounded-xl py-2.5 px-3 bg-slate-50 border border-slate-200 text-slate-855 focus:outline-none focus:border-[#0A1D3D]"
                                />
                              </div>

                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Family Annual Income (Lakhs INR)</label>
                                <input
                                  type="number"
                                  min="1"
                                  max="20"
                                  required
                                  value={scholarshipIncome}
                                  onChange={(e) => setScholarshipIncome(e.target.value)}
                                  className="w-full text-xs rounded-xl py-2.5 px-3 bg-slate-50 border border-slate-200 text-slate-855 focus:outline-none focus:border-[#0A1D3D]"
                                />
                              </div>

                              <button
                                type="submit"
                                className="w-full bg-[#D09C34] hover:bg-[#0A1D3D] hover:text-white text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-sm cursor-pointer border border-[#D09C34]"
                              >
                                Compile Eligibility
                              </button>
                            </form>
                          </div>

                          <div className="lg:col-span-2 bg-white border border-slate-100 p-6 rounded-3xl shadow-sm min-h-[220px] flex flex-col justify-center items-center text-center">
                            {scholarshipResult !== null ? (
                              <div className="space-y-4">
                                <div className="h-16 w-16 bg-[#D09C34]/15 rounded-full flex items-center justify-center text-[#D09C34] mx-auto text-xl font-bold border border-[#D09C34]/30">
                                  {scholarshipResult}%
                                </div>
                                <div className="space-y-1">
                                  <h4 className="font-heading text-lg font-bold text-[#0A1D3D] uppercase">Projected Tuition Waiver</h4>
                                  <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                                    Congratulations! Based on your {scholarshipMarks}% score cards and financial profile, you qualify for a **{scholarshipResult}% scholarship disallowance waiver** on Group 2 enrollments.
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <div className="text-slate-400 text-xs font-bold uppercase tracking-wider space-y-2">
                                <Award size={36} className="mx-auto text-slate-300" />
                                <p>Compile scholarship questionnaire to view projections.</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: MY COURSES */}
                {/* ========================================================== */}
                {activeTab === "courses" && (
                  <div className="space-y-6 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* CA Foundation */}
                      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between h-56 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-[4px] bg-[#D09C34]" />
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <span className="text-[9px] font-bold text-[#D09C34] bg-[#D09C34]/10 px-2.5 py-1 rounded-full uppercase">Enrolled</span>
                            <span className="text-xs font-mono text-slate-400">ID: CA-FND</span>
                          </div>
                          <div>
                            <h3 className="font-heading text-xl font-extrabold text-[#0A1D3D] uppercase">CA Foundation Regular</h3>
                            <p className="text-slate-500 text-xs mt-1.5">Instructor: CA Praveen Kumar, CA Swathi Lakshmi</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-bold text-slate-400 uppercase">
                            <span>Progress</span>
                            <span>72% Completed</span>
                          </div>
                          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div className="bg-[#D09C34] h-full rounded-full" style={{ width: "72%" }} />
                          </div>
                        </div>
                      </div>

                      {/* Tally Prime */}
                      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between h-56 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-[4px] bg-[#0A1D3D]" />
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <span className="text-[9px] font-bold text-[#D09C34] bg-[#D09C34]/10 px-2.5 py-1 rounded-full uppercase">Enrolled</span>
                            <span className="text-xs font-mono text-slate-400">ID: TALLY-PRM</span>
                          </div>
                          <div>
                            <h3 className="font-heading text-xl font-extrabold text-[#0A1D3D] uppercase">Tally Prime Specialist</h3>
                            <p className="text-slate-500 text-xs mt-1.5">Instructor: CMA Arvind Raj</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-bold text-slate-400 uppercase">
                            <span>Progress</span>
                            <span>40% Completed</span>
                          </div>
                          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div className="bg-[#0A1D3D] h-full rounded-full" style={{ width: "40%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: TODAY'S CLASSES */}
                {/* ========================================================== */}
                {activeTab === "classes" && (
                  <div className="bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm text-left space-y-6">
                    <h3 className="font-heading text-lg font-bold text-[#0A1D3D] uppercase tracking-wide">Daily Class Timeline</h3>
                    <div className="relative border-l border-slate-200 pl-6 ml-3 space-y-8">
                      {/* Timeline Item 1 */}
                      <div className="relative">
                        <span className="absolute -left-[30px] top-1 h-4 w-4 bg-[#D09C34] rounded-full border-4 border-white ring-2 ring-slate-200" />
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 bg-slate-100 py-1 px-2 rounded uppercase font-mono">09:30 AM - 11:00 AM</span>
                          <h4 className="font-heading text-base font-bold text-[#0A1D3D] mt-2 uppercase">Principles and Practice of Accounting</h4>
                          <p className="text-slate-500 text-xs mt-1">Topic: Consignment Accounts & Trial Ledger Posting</p>
                          <p className="text-slate-400 text-xs mt-1">Faculty: CA Praveen Kumar</p>
                        </div>
                      </div>

                      {/* Timeline Item 2 */}
                      <div className="relative">
                        <span className="absolute -left-[30px] top-1 h-4 w-4 bg-red-500 rounded-full border-4 border-white ring-2 ring-red-100 animate-pulse" />
                        <div>
                          <span className="text-[10px] font-bold text-red-600 bg-red-50 py-1 px-2 rounded uppercase font-mono">11:30 AM - 01:00 PM • LIVE</span>
                          <h4 className="font-heading text-base font-bold text-[#0A1D3D] mt-2 uppercase">GST Filing & Voucher Invoicing</h4>
                          <p className="text-slate-500 text-xs mt-1">Topic: Hands-on GSTR-1 Ledger uploads via mock portal</p>
                          <p className="text-slate-400 text-xs mt-1">Faculty: CA Swathi Lakshmi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: ASSIGNMENTS */}
                {/* ========================================================== */}
                {activeTab === "assignments" && (
                  <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden text-left">
                    <div className="p-6 border-b border-slate-100">
                      <h3 className="font-heading text-lg font-bold text-[#0A1D3D] uppercase tracking-wide">Assigned Worksheets</h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase border-b border-slate-100">
                            <th className="py-4 px-6 text-left">Assignment Topic</th>
                            <th className="py-4 px-6 text-left">Subject</th>
                            <th className="py-4 px-6 text-left">Due Date</th>
                            <th className="py-4 px-6 text-left">Status</th>
                          </tr>
                        </thead>
                        <tbody className="text-xs font-semibold text-slate-600 divide-y divide-slate-100">
                          <tr>
                            <td className="py-4 px-6 font-bold text-[#0A1D3D]">Consignment Ledger Entries Worksheet</td>
                            <td className="py-4 px-6">CA Accounting</td>
                            <td className="py-4 px-6">Tomorrow, 5:00 PM</td>
                            <td className="py-4 px-6">
                              <span className="py-1 px-2.5 bg-yellow-50 text-yellow-600 border border-yellow-100 rounded-full font-bold uppercase text-[9px]">Pending</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-4 px-6 font-bold text-[#0A1D3D]">Tally Prime Stock Creation Log</td>
                            <td className="py-4 px-6">Tally Prime</td>
                            <td className="py-4 px-6">June 29, 2026</td>
                            <td className="py-4 px-6">
                              <span className="py-1 px-2.5 bg-green-50 text-green-700 border border-green-100 rounded-full font-bold uppercase text-[9px]">Submitted</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-4 px-6 font-bold text-[#0A1D3D]">Journal Entry Fundamentals Quiz 1</td>
                            <td className="py-4 px-6">CA Accounting</td>
                            <td className="py-4 px-6">June 20, 2026</td>
                            <td className="py-4 px-6">
                              <span className="py-1 px-2.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-full font-bold uppercase text-[9px]">Graded: A+</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: ATTENDANCE */}
                {/* ========================================================== */}
                {activeTab === "attendance" && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
                    <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm space-y-4">
                      <h4 className="text-slate-400 text-xs font-bold uppercase">Attendance Score</h4>
                      <div className="flex items-center gap-6">
                        <div className="h-20 w-20 shrink-0 relative">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-[#D09C34]" strokeWidth="3" strokeDasharray="92, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-lg font-black text-[#0A1D3D]">92%</div>
                        </div>
                        <div>
                          <p className="text-[#0A1D3D] text-lg font-extrabold">Good Standing</p>
                          <p className="text-slate-400 text-xs mt-1">Required: 75% for exam authorization</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm lg:col-span-2 space-y-4">
                      <h4 className="text-slate-400 text-xs font-bold uppercase">Academic Attendance Summary</h4>
                      <div className="grid grid-cols-3 gap-4 pt-2">
                        <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                          <p className="text-slate-400 text-[10px] font-bold uppercase">Total Classes</p>
                          <p className="text-2xl font-black text-[#0A1D3D] mt-1">60</p>
                        </div>
                        <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                          <p className="text-slate-400 text-[10px] font-bold uppercase">Present</p>
                          <p className="text-2xl font-black text-green-600 mt-1">55</p>
                        </div>
                        <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                          <p className="text-slate-400 text-[10px] font-bold uppercase">Absent</p>
                          <p className="text-2xl font-black text-red-500 mt-1">5</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: STUDY MATERIALS */}
                {/* ========================================================== */}
                {activeTab === "materials" && (
                  <div className="bg-white border border-slate-100 rounded-3xl shadow-sm text-left">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                      <h3 className="font-heading text-lg font-bold text-[#0A1D3D] uppercase tracking-wide">Downloadable Materials</h3>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {/* Material item 1 */}
                      <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-slate-50/50 transition-colors">
                        <div>
                          <h4 className="font-heading font-bold text-[#0A1D3D] text-base uppercase leading-none">GST Invoice & Ledger Format Guide</h4>
                          <p className="text-slate-400 text-xs mt-2">File type: PDF (12.4 MB) • Added by CA Swathi Lakshmi</p>
                        </div>
                        <Button className="bg-[#0A1D3D] hover:bg-[#D09C34] text-white flex items-center gap-2 text-xs uppercase font-bold py-2 px-4 rounded-xl shadow-sm shrink-0">
                          <Download size={14} />
                          <span>Download</span>
                        </Button>
                      </div>

                      {/* Material item 2 */}
                      <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-slate-50/50 transition-colors">
                        <div>
                          <h4 className="font-heading font-bold text-[#0A1D3D] text-base uppercase leading-none">Consignment Account Ledger entries Workbook</h4>
                          <p className="text-slate-400 text-xs mt-2">File type: PDF (8.1 MB) • Added by CA Praveen Kumar</p>
                        </div>
                        <Button className="bg-[#0A1D3D] hover:bg-[#D09C34] text-white flex items-center gap-2 text-xs uppercase font-bold py-2 px-4 rounded-xl shadow-sm shrink-0">
                          <Download size={14} />
                          <span>Download</span>
                        </Button>
                      </div>

                      {/* Material item 3 */}
                      <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-slate-50/50 transition-colors">
                        <div>
                          <h4 className="font-heading font-bold text-[#0A1D3D] text-base uppercase leading-none">Tally Prime GST Voucher Entry Templates</h4>
                          <p className="text-slate-400 text-xs mt-2">File type: XLS (1.5 MB) • Added by CMA Arvind Raj</p>
                        </div>
                        <Button className="bg-[#0A1D3D] hover:bg-[#D09C34] text-white flex items-center gap-2 text-xs uppercase font-bold py-2 px-4 rounded-xl shadow-sm shrink-0">
                          <Download size={14} />
                          <span>Download</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: RECORDED CLASSES */}
                {/* ========================================================== */}
                {activeTab === "recorded" && (
                  <div className="space-y-6 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      
                      {/* Video Item 1 */}
                      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between h-52 group hover:border-[#D09C34]/30 transition-all duration-300">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded uppercase font-mono">1h 15m</span>
                            <span className="text-[9px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full uppercase">Watched</span>
                          </div>
                          <h4 className="font-heading text-base font-extrabold text-[#0A1D3D] uppercase line-clamp-2">Consignment Accounts - Lecture 2</h4>
                          <p className="text-slate-400 text-xs font-semibold">Faculty: CA Praveen Kumar</p>
                        </div>
                        <button className="flex items-center gap-2 text-xs font-bold text-[#0A1D3D] group-hover:text-[#D09C34] mt-4 self-start transition-colors">
                          <PlayCircle size={18} />
                          <span>Watch Lecture Again</span>
                        </button>
                      </div>

                      {/* Video Item 2 */}
                      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between h-52 group hover:border-[#D09C34]/30 transition-all duration-300">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded uppercase font-mono">45m</span>
                            <span className="text-[9px] font-bold text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded-full uppercase">In Progress</span>
                          </div>
                          <h4 className="font-heading text-base font-extrabold text-[#0A1D3D] uppercase line-clamp-2">TDS Deductions and Default Penalties</h4>
                          <p className="text-slate-400 text-xs font-semibold">Faculty: CA Swathi Lakshmi</p>
                        </div>
                        <button className="flex items-center gap-2 text-xs font-bold text-[#0A1D3D] group-hover:text-[#D09C34] mt-4 self-start transition-colors">
                          <PlayCircle size={18} />
                          <span>Resume Watch</span>
                        </button>
                      </div>

                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: LIVE CLASSES */}
                {/* ========================================================== */}
                {activeTab === "live" && (
                  <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm text-left max-w-2xl mx-auto space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 relative">
                        <Radio size={18} />
                        <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full animate-ping" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-[#0A1D3D] uppercase">Active Live Class</h3>
                        <p className="text-slate-400 text-xs">Join from your browser or the Zoom application</p>
                      </div>
                    </div>

                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
                      <h4 className="font-heading font-extrabold text-[#0A1D3D] text-base uppercase">GST Invoice Creation & Practice Ledger Uploads</h4>
                      <p className="text-slate-500 text-xs">Instructor: CA Swathi Lakshmi • Category: CA Intermediate Group 1</p>
                      <p className="text-[11px] text-slate-400 font-bold uppercase mt-2">Class Status: active now</p>
                    </div>

                    <Button className="w-full bg-[#0A1D3D] hover:bg-[#D09C34] text-white flex items-center justify-center gap-2 h-13 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <span>Launch Zoom Class Link</span>
                      <ExternalLink size={14} />
                    </Button>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: PAYMENTS */}
                {/* ========================================================== */}
                {activeTab === "payments" && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
                    {/* Invoice status card */}
                    <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm space-y-6">
                      <h3 className="font-heading text-lg font-bold text-[#0A1D3D] uppercase">Fee Status</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between border-b border-slate-50 pb-2">
                          <span className="text-xs font-bold text-slate-400 uppercase">Total Fee</span>
                          <span className="text-xs font-bold text-[#0A1D3D]">₹25,000</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-50 pb-2">
                          <span className="text-xs font-bold text-slate-400 uppercase">Total Paid</span>
                          <span className="text-xs font-bold text-green-600">₹15,000</span>
                        </div>
                        <div className="flex justify-between pb-2">
                          <span className="text-xs font-bold text-slate-400 uppercase">Outstanding</span>
                          <span className="text-xs font-bold text-red-500">₹10,000</span>
                        </div>
                      </div>
                    </div>

                    {/* Receipts ledger table */}
                    <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm lg:col-span-2 space-y-4">
                      <h3 className="font-heading text-lg font-bold text-[#0A1D3D] uppercase">Transactions Ledger</h3>
                      <div className="overflow-x-auto pt-2">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase border-b border-slate-100">
                              <th className="py-3 px-4 text-left">Receipt ID</th>
                              <th className="py-3 px-4 text-left">Payment Date</th>
                              <th className="py-3 px-4 text-left">Amount</th>
                              <th className="py-3 px-4 text-left">Method</th>
                            </tr>
                          </thead>
                          <tbody className="text-xs font-semibold text-slate-600 divide-y divide-slate-100">
                            <tr>
                              <td className="py-3 px-4 font-bold text-[#0A1D3D]">REC-01292</td>
                              <td className="py-3 px-4">June 20, 2026</td>
                              <td className="py-3 px-4 text-green-600">₹15,000</td>
                              <td className="py-3 px-4">UPI (Razorpay)</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 font-bold text-slate-400">REC-01300</td>
                              <td className="py-3 px-4 font-normal text-slate-400">Pending</td>
                              <td className="py-3 px-4 text-red-500">₹10,000</td>
                              <td className="py-3 px-4 text-slate-400">Installment Due</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: CERTIFICATES */}
                {/* ========================================================== */}
                {activeTab === "certificates" && (
                  <div className="bg-white border border-slate-100 rounded-3xl shadow-sm text-left">
                    <div className="p-6 border-b border-slate-100">
                      <h3 className="font-heading text-lg font-bold text-[#0A1D3D] uppercase tracking-wide">Earned Credentials</h3>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {/* Certificate 1 */}
                      <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-slate-50/50 transition-colors">
                        <div className="flex gap-4 items-center">
                          <div className="h-11 w-11 rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] flex items-center justify-center shrink-0 border border-slate-50">
                            <Award size={20} />
                          </div>
                          <div>
                            <h4 className="font-heading font-bold text-[#0A1D3D] text-base uppercase leading-none">Tally Prime Specialist Certification</h4>
                            <p className="text-slate-400 text-xs mt-2">Completed: June 20, 2026 • Credential ID: KP-TALLY-10928</p>
                          </div>
                        </div>
                        <Button className="bg-[#0A1D3D] hover:bg-[#D09C34] text-white flex items-center gap-2 text-xs uppercase font-bold py-2 px-4 rounded-xl shadow-sm shrink-0">
                          <Download size={14} />
                          <span>Download PDF</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: PROFILE */}
                {/* ========================================================== */}
                {activeTab === "profile" && (
                  <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm text-left max-w-2xl mx-auto space-y-6">
                    <h3 className="font-heading text-lg font-bold text-[#0A1D3D] uppercase">Student Profile Registry</h3>
                    <div className="space-y-4 divide-y divide-slate-100">
                      <div className="flex justify-between py-2.5">
                        <span className="text-xs font-bold text-slate-400 uppercase">Registration No</span>
                        <span className="text-xs font-mono font-bold text-[#0A1D3D]">KA-2026-0891</span>
                      </div>
                      <div className="flex justify-between py-2.5">
                        <span className="text-xs font-bold text-slate-400 uppercase">Full Name</span>
                        <span className="text-xs font-bold text-[#0A1D3D]">Praveen Kumar</span>
                      </div>
                      <div className="flex justify-between py-2.5">
                        <span className="text-xs font-bold text-slate-400 uppercase">Enrolled Course</span>
                        <span className="text-xs font-bold text-[#0A1D3D]">CA Foundation (Nov 2026 Batch)</span>
                      </div>
                      <div className="flex justify-between py-2.5">
                        <span className="text-xs font-bold text-slate-400 uppercase">Email</span>
                        <span className="text-xs font-bold text-[#0A1D3D]">student@krithun.com</span>
                      </div>
                      <div className="flex justify-between py-2.5">
                        <span className="text-xs font-bold text-slate-400 uppercase">Hotline Phone</span>
                        <span className="text-xs font-bold text-[#0A1D3D]">+91 99445 55639</span>
                      </div>
                      <div className="flex justify-between py-2.5">
                        <span className="text-xs font-bold text-slate-400 uppercase">Coimbatore Address</span>
                        <span className="text-xs font-bold text-[#0A1D3D]">2nd Floor, Kovai Towers, Coimbatore</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB CONTENT: NOTIFICATIONS */}
                {/* ========================================================== */}
                {activeTab === "notifications" && (
                  <div className="bg-white border border-slate-100 rounded-3xl shadow-sm text-left">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                      <h3 className="font-heading text-lg font-bold text-[#0A1D3D] uppercase tracking-wide">Notification Center</h3>
                      {notifications.some(n => !n.read) && (
                        <button
                          onClick={markAllNotificationsRead}
                          className="text-[10px] font-bold text-[#D09C34] hover:underline uppercase tracking-wider"
                        >
                          Mark all as read
                        </button>
                      )}
                    </div>
                    <div className="divide-y divide-slate-100">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-6 space-y-2 transition-colors relative ${
                            !notification.read ? "bg-[#D09C34]/5" : "hover:bg-slate-50/50"
                          }`}
                        >
                          {!notification.read && (
                            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#D09C34]" />
                          )}
                          <div className="flex justify-between items-start gap-4">
                            <h4 className="font-heading font-bold text-[#0A1D3D] text-base uppercase leading-none">{notification.title}</h4>
                            <span className="text-[10px] font-semibold text-slate-400 shrink-0">{notification.date}</span>
                          </div>
                          <p className="text-[#334155] text-xs leading-relaxed font-normal">{notification.body}</p>
                        </div>
                      ))}
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
