"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  Send,
  Mic,
  Copy,
  Check,
  Bookmark,
  Share2,
  Plus,
  Moon,
  Sun,
  ArrowLeft,
  ChevronDown,
  MessageSquare,
  Volume2,
  Trash2,
  GraduationCap,
  ArrowRight,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AIAssistantPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState("Accounting");
  const [isListening, setIsListening] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // Notifications and utility actions states
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);
  const [shareText, setShareText] = useState("");

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Subject options
  const subjects = [
    "Accounting",
    "GST",
    "Income Tax",
    "Business Law",
    "Economics",
    "Costing",
    "Financial Management",
    "Business Mathematics",
    "Commerce",
  ];

  // Conversation history state
  const [historyThreads, setHistoryThreads] = useState([
    { id: 1, title: "TDS defaults Section 40(a)", subject: "Income Tax" },
    { id: 2, title: "Consignment abnormal loss entries", subject: "Accounting" },
    { id: 3, title: "GSTR-2B vs 3B matching rules", subject: "GST" },
    { id: 4, title: "CAPM valuation formula", subject: "Financial Management" },
  ]);

  const [activeThreadId, setActiveThreadId] = useState<number | null>(null);

  // Messages logs state
  const [messages, setMessages] = useState<Array<{ id: number; role: "user" | "assistant"; content: string }>>([]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isGenerating]);

  // Suggested Prompts based on selected subject
  const suggestedPrompts: Record<string, string[]> = {
    Accounting: [
      "Explain the treatment of abnormal loss in Consignment Accounts.",
      "What is the difference between double entry and single entry accounting?",
      "Explain the journal entry for creating a provision for doubtful debts.",
    ],
    GST: [
      "How do I reconcile ITC discrepancies between GSTR-2B and GSTR-3B?",
      "Explain the concept of reverse charge mechanism (RCM) under GST.",
      "What are the eligibility criteria for opting into the GST Composition Scheme?",
    ],
    "Income Tax": [
      "Explain Section 40(a)(ia) disallowance rules regarding TDS default.",
      "What is the difference between tax deductions (Section 80C) and tax exemptions?",
      "Explain the tax slabs under the New Tax Regime for the current assessment year.",
    ],
    "Business Law": [
      "What elements are required to constitute a valid contract under the Indian Contract Act?",
      "Explain the difference between void and voidable contracts with examples.",
      "What is the doctrine of indoor management under Companies Act 2013?",
    ],
    Economics: [
      "Explain the Law of Demand and list key exceptions.",
      "What is the difference between microeconomics and macroeconomics?",
      "Explain the concept of price elasticity of demand and its degrees.",
    ],
    Costing: [
      "What is Marginal Costing and how does it support decision making?",
      "Explain standard costing vs budgeting and variance analysis.",
      "What is the break-even point and how is the Margin of Safety calculated?",
    ],
    "Financial Management": [
      "What is the formula for calculating Weighted Average Cost of Capital (WACC)?",
      "Explain the Capital Asset Pricing Model (CAPM) for cost of equity.",
      "What is Net Present Value (NPV) and how is it used in capital budgeting?",
    ],
    "Business Mathematics": [
      "How do I calculate standard deviation and variance for grouped data?",
      "Explain simple interest vs compound interest formulas and applications.",
      "What is annuity and how to calculate the present value of an ordinary annuity?",
    ],
    Commerce: [
      "What are the primary functions of commercial banks?",
      "Explain sole proprietorship vs partnership formats with advantages.",
      "What is the difference between direct marketing and indirect marketing channels?",
    ],
  };

  // Preset detailed answers for mock response engine
  const simulatedAnswers: Record<string, string> = {
    "Explain the treatment of abnormal loss in Consignment Accounts.": `### Abnormal Loss in Consignment Accounts

In consignment accounting, an **Abnormal Loss** occurs due to accidental or avoidable causes (e.g., fire, theft, transit damage). It is treated differently from normal loss because it does not increase the unit value of the remaining stock.

#### Key Accounting Steps:

1. **Calculation of Loss Value**:
   $$\\text{Value of Abnormal Loss} = \\text{Cost of Goods Lost} + \\text{Consignor's Proportionate Expenses} + \\text{Consignee's Transit Expenses (if any)}$$

2. **Accounting Ledger Entry**:
   The value of abnormal loss is credited to the **Consignment Account** and debited to the **Abnormal Loss Account**:
   \`\`\`text
   Abnormal Loss A/c .................... Dr.  [Total Value of Loss]
       To Consignment A/c ............................ Cr.  [Total Value of Loss]
   \`\`\`

3. **Handling Insurance Claims**:
   - If the goods were insured, the insurance company's admitted claim is credited to the Abnormal Loss Account:
     \`\`\`text
     Insurance Co. / Bank A/c ............. Dr.  [Claim Admitted]
     Profit & Loss A/c (Net Loss) ......... Dr.  [Unadjusted Bal]
         To Abnormal Loss A/c .......................... Cr.  [Total Value of Loss]
     \`\`\`

*Tip: Normal loss is never credited to the consignment account. Its cost is absorbed by the good units remaining.*`,

    "How do I reconcile ITC discrepancies between GSTR-2B and GSTR-3B?": `### Reconciling ITC (GSTR-2B vs. GSTR-3B)

Reconciliation between the auto-drafted **GSTR-2B** (which lists available Input Tax Credit from vendor filings) and the **GSTR-3B** (where you claim ITC) is a mandatory audit task to avoid tax notices.

#### Step-by-Step Reconciliation Protocol:

1. **Download Documents**: Download the invoice-level GSTR-2B from the GST portal and fetch your purchase ledger data for the corresponding tax period.
2. **Key Match Parameters**: Align invoices based on:
   - **GSTIN** of the supplier
   - **Invoice Number** and **Invoice Date**
   - **Taxable Value** and **Tax Amount** (CGST, SGST, IGST)
3. **Categorize Discrepancies**:
   - **Mismatched Invoice Date**: Vendor filed invoice in a subsequent month. (Claim ITC in the month it reflects in GSTR-2B).
   - **Missing Vendor Filings**: Vendor hasn't filed GSTR-1. (Follow up with the supplier; ITC cannot be claimed under Rule 36(4)).
   - **Data Entry Error**: Discrepancies in invoice values between purchase register and GSTR-2B.
4. **Actionable Correction**: Only claim eligible ITC as reflected in GSTR-2B. If excess ITC is claimed in GSTR-3B, it must be reversed with interest (Rule 37A).`,

    "Explain Section 40(a)(ia) disallowance rules regarding TDS default.": `### Section 40(a)(ia) of the Income Tax Act

Under the Indian Income Tax Act, **Section 40(a)(ia)** stipulates the consequences of default in deducting or paying Tax Deducted at Source (TDS) on payments made to residents.

#### Key Provisions and Disallowance Rates:

- **Disallowance Rate**: If an assessee is required to deduct TDS on payments (like rent, commissions, professional fees, contractor charges) but fails to deduct it, or deducts it but does not pay it to the Government before the due date of filing the income tax return, **30% of the corresponding expense is disallowed** (added back to business income).
- **Subsequent Allowance**: The disallowed 30% expense will be allowed as a deduction in the financial year in which the TDS is subsequently paid to the Government.

#### Practical Illustration:
If a firm pays rent of **₹1,00,000** to a landlord but defaults on TDS:
- **Disallowance (Current FY)**: 30% of ₹1,00,000 = **₹30,000** is disallowed and added to taxable profit.
- **TDS Paid in Next FY**: The ₹30,000 expense is allowed as a deduction in that next fiscal year.`,

    "What elements are required to constitute a valid contract under the Indian Contract Act?": `### Valid Contract Requirements (Indian Contract Act, 1872)

Section 10 of the Indian Contract Act, 1872 outlines the essential elements that transform an agreement into a legally binding contract.

#### 6 Core Essentials for Validity:

1. **Offer and Acceptance**: There must be a lawful offer by one party and an absolute, unconditional acceptance of that offer by the other.
2. **Intention to Create Legal Relationship**: Social or domestic agreements do not constitute contracts. There must be an intention to create binding legal obligations.
3. **Lawful Consideration**: The agreement must be supported by consideration (something in return, or *Quid Pro Quo*), which must be lawful.
4. **Capacity of Parties**: The parties must be legally capable of contracting. They must:
   - Be of the age of majority (18+).
   - Be of sound mind.
   - Not be disqualified by any law.
5. **Free Consent**: Consent must be free and not induced by coercion, undue influence, fraud, misrepresentation, or mistake (Sections 13-22).
6. **Lawful Object**: The purpose of the contract must not be illegal, immoral, or opposed to public policy.`,
  };

  const handleSend = (text: string, subjectOverride?: string) => {
    if (!text.trim()) return;

    const currentSubject = subjectOverride || selectedSubject;

    // Create user message
    const userMsg = { id: Date.now(), role: "user" as const, content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsGenerating(true);

    // Create thread in history if chat was empty
    if (messages.length === 0) {
      const newThread = {
        id: Date.now(),
        title: text.length > 28 ? text.substring(0, 28) + "..." : text,
        subject: currentSubject,
      };
      setHistoryThreads((prev) => [newThread, ...prev]);
      setActiveThreadId(newThread.id);
    }

    // Simulate AI generation delay
    setTimeout(() => {
      // Find matching mock response, or generate generic response
      let responseContent = "";
      if (simulatedAnswers[text]) {
        responseContent = simulatedAnswers[text];
      } else {
        responseContent = `### AI Study Assistant Response

That's a great question on **${currentSubject}**! Based on the Krithun Academy curriculum guidelines, here is a detailed breakdown of your query:

1. **Key Concept**: When analyzing "${text}", we focus on core exam patterns and legal sections.
2. **Academic Context**: In professional commerce examinations (CA / CMA), questions on this topic typically carry **5 to 8 marks** and require a clear structured format:
   - State the relevant section/standard code (e.g. AS/Ind AS for Accounting, section acts for Tax).
   - Write out calculations or double-entry formats clearly.
   - Draw a brief conclusion explaining the transaction impact.
3. **Recommended Study Paths**: 
   - Check out our reference textbook chapter for detailed case studies.
   - Practice related mock test questions inside your Student Portal dashboard.

Would you like me to generate a step-by-step numerical example for this concept?`;
      }

      const aiMsg = { id: Date.now() + 1, role: "assistant" as const, content: responseContent };
      setMessages((prev) => [...prev, aiMsg]);
      setIsGenerating(false);
    }, 1000);
  };

  // Handle initial query from URL search params safely without Suspense issues
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const query = params.get("query");
      if (query) {
        let subject = "Accounting";
        if (query.toLowerCase().includes("itc") || query.toLowerCase().includes("gstr") || query.toLowerCase().includes("gst")) {
          subject = "GST";
        } else if (query.toLowerCase().includes("section 40") || query.toLowerCase().includes("tds") || query.toLowerCase().includes("tax") || query.toLowerCase().includes("income")) {
          subject = "Income Tax";
        } else if (query.toLowerCase().includes("abnormal loss") || query.toLowerCase().includes("consignment")) {
          subject = "Accounting";
        } else if (query.toLowerCase().includes("contract") || query.toLowerCase().includes("void") || query.toLowerCase().includes("law")) {
          subject = "Business Law";
        } else if (query.toLowerCase().includes("wacc") || query.toLowerCase().includes("capm") || query.toLowerCase().includes("npv") || query.toLowerCase().includes("valuation")) {
          subject = "Financial Management";
        }

        setSelectedSubject(subject);
        handleSend(query, subject);

        // Clean up URL parameters
        window.history.replaceState({}, "", window.location.pathname);
      }
    }
  }, []);

  const startNewChat = () => {
    setMessages([]);
    setActiveThreadId(null);
  };

  // Mock Voice input simulation
  const startVoiceInput = () => {
    if (isListening) return;

    setIsListening(true);
    setInputMessage("");

    setTimeout(() => {
      // Input a mock voice question based on the selected subject
      let mockVoiceText = "";
      if (selectedSubject === "Financial Management") {
        mockVoiceText = "What is the formula for calculating WACC?";
      } else if (selectedSubject === "GST") {
        mockVoiceText = "How do I reconcile ITC discrepancies between GSTR-2B and GSTR-3B?";
      } else {
        mockVoiceText = "Explain the treatment of abnormal loss in Consignment Accounts.";
      }
      
      setInputMessage(mockVoiceText);
      setIsListening(false);
    }, 2000);
  };

  // Utilities functions
  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const toggleBookmark = (id: number) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const shareThread = () => {
    setShareText("Thread link copied!");
    setTimeout(() => setShareText(""), 1500);
  };

  const deleteThread = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setHistoryThreads((prev) => prev.filter((t) => t.id !== id));
    if (activeThreadId === id) {
      startNewChat();
    }
  };

  return (
    <div className={`min-h-screen flex flex-col lg:flex-row transition-colors duration-200 ${
      isDarkMode ? "bg-[#09182F] text-slate-100" : "bg-white text-[#334155]"
    }`}>
      
      {/* ========================================================== */}
      {/* 1. Left Sidebar: Thread History & Config */}
      {/* ========================================================== */}
      <aside className={`w-full lg:w-72 flex flex-col justify-between shrink-0 border-b lg:border-b-0 lg:border-r transition-colors ${
        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-[#F8FAFC] border-slate-200"
      }`}>
        
        {/* Sidebar Header */}
        <div className={`h-20 px-6 border-b flex items-center justify-between transition-colors ${
          isDarkMode ? "border-slate-800" : "border-slate-200"
        }`}>
          <Link href="/portal" className="flex items-center gap-2 text-[#D09C34] hover:underline font-bold text-xs uppercase tracking-wide">
            <ArrowLeft size={16} />
            <span>Portal</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? "hover:bg-white/5 text-[#D09C34]" : "hover:bg-slate-200 text-[#0A1D3D]"
              }`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        {/* Subjects Selector & History */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 text-left">
          
          {/* New Chat Button */}
          <button
            onClick={startNewChat}
            className="w-full flex items-center justify-center gap-2.5 py-3 border border-dashed rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] bg-[#D09C34] text-white border-transparent shadow"
          >
            <Plus size={16} />
            <span>New Study Session</span>
          </button>

          {/* Subject Dropdown Area */}
          <div className="space-y-2">
            <label className={`text-[10px] font-bold uppercase tracking-wider block ${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            }`}>Active Subject</label>
            <div className="relative">
              <select
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  startNewChat();
                }}
                className={`w-full border rounded-xl py-3 px-4 text-xs font-bold uppercase tracking-wider focus:outline-none appearance-none cursor-pointer ${
                  isDarkMode 
                    ? "bg-[#09182F] border-slate-800 text-white focus:border-[#D09C34]" 
                    : "bg-white border-slate-200 text-slate-700 focus:border-[#0A1D3D]"
                }`}
              >
                {subjects.map((sub) => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
            </div>
          </div>

          {/* History Lists */}
          <div className="space-y-3">
            <h4 className={`text-[10px] font-bold uppercase tracking-wider ${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            }`}>Conversation Logs</h4>
            
            <div className="space-y-1">
              {historyThreads.map((thread) => (
                <div
                  key={thread.id}
                  onClick={() => {
                    setActiveThreadId(thread.id);
                    setSelectedSubject(thread.subject);
                    // Prepopulate with a mock history load
                    setMessages([
                      { id: 1, role: "user", content: `Query on ${thread.subject}: ${thread.title}` },
                      { id: 2, role: "assistant", content: `This is your loaded session for **${thread.subject}** regarding *"${thread.title}"*.\n\nReview the core equations or ask a follow-up question in the input bar below.` }
                    ]);
                  }}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-colors group ${
                    activeThreadId === thread.id
                      ? "bg-[#D09C34]/15 border border-[#D09C34]/30 text-[#D09C34]"
                      : isDarkMode
                        ? "border border-transparent hover:bg-white/5 text-slate-300"
                        : "border border-transparent hover:bg-slate-100 text-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <MessageSquare size={14} className="shrink-0 text-[#D09C34]" />
                    <div className="truncate text-left">
                      <p className="text-xs font-bold leading-none truncate">{thread.title}</p>
                      <p className="text-[9px] text-slate-400 font-semibold mt-1 uppercase tracking-wider">{thread.subject}</p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => deleteThread(thread.id, e)}
                    className="p-1 rounded opacity-0 group-hover:opacity-100 hover:bg-red-500/10 text-slate-400 hover:text-red-500 transition-all"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </aside>

      {/* ========================================================== */}
      {/* 2. Main Chat Workspace */}
      {/* ========================================================== */}
      <div className="flex-1 flex flex-col justify-between min-h-[500px] lg:h-screen relative overflow-hidden">
        
        {/* Chat Header */}
        <header className={`h-20 border-b px-6 flex items-center justify-between shrink-0 transition-colors ${
          isDarkMode ? "border-slate-800 bg-[#0A1D3D]/30" : "border-slate-200 bg-white"
        }`}>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#D09C34]/10 text-[#D09C34] flex items-center justify-center shadow-inner">
              <BrainCircuit size={20} />
            </div>
            <div className="text-left">
              <h1 className="text-sm sm:text-base font-extrabold uppercase tracking-wide">Krithun AI Tutor</h1>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Active Subject: {selectedSubject}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {shareText && (
              <span className="text-[10px] bg-green-50 text-green-700 border border-green-100 py-1 px-2 rounded-lg font-bold uppercase animate-fade-in">
                {shareText}
              </span>
            )}
            <button
              onClick={shareThread}
              className={`p-2 rounded-lg border transition-colors ${
                isDarkMode ? "border-slate-800 hover:bg-white/5 text-slate-400" : "border-slate-200 hover:bg-slate-50 text-slate-500"
              }`}
              title="Share Session"
            >
              <Share2 size={16} />
            </button>
          </div>
        </header>

        {/* Dynamic Messages & Empty State Workspace */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          
          <AnimatePresence mode="wait">
            {messages.length === 0 ? (
              
              // EMPTY STATE - SUGGESTIONS AND PROMPTS
              <motion.div
                key="empty-state"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="max-w-2xl mx-auto py-12 text-center space-y-12"
              >
                {/* Greeting */}
                <div className="space-y-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D09C34]/10 text-[#D09C34] shadow-inner mb-2 animate-bounce">
                    <Sparkles size={28} />
                  </div>
                  <h2 className="font-heading text-2.5xl sm:text-4xl font-extrabold uppercase tracking-tight">
                    What would you like to study?
                  </h2>
                  <p className="text-slate-400 text-xs sm:text-sm font-normal max-w-md mx-auto">
                    Select a subject in the sidebar, or pick one of the active curriculum prompts below to start your study session.
                  </p>
                </div>

                {/* Suggested Prompts List */}
                <div className="space-y-3 text-left">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D09C34] text-center mb-6">
                    SUGGESTED STUDY TOPICS
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {suggestedPrompts[selectedSubject]?.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(prompt)}
                        className={`p-4 border rounded-2xl text-xs sm:text-sm font-semibold leading-relaxed transition-all duration-200 hover:scale-[1.01] hover:border-[#D09C34]/50 flex items-center justify-between text-left group cursor-pointer ${
                          isDarkMode 
                            ? "bg-[#0B1E36]/40 border-slate-800 text-slate-300 hover:bg-[#0B1E36]" 
                            : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100/50"
                        }`}
                      >
                        <span>{prompt}</span>
                        <ArrowRight size={14} className="text-[#D09C34] opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>

              </motion.div>
            ) : (
              
              // MESSAGES CHAT LOG
              <div className="max-w-3xl mx-auto space-y-6">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-4 items-start ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {/* Bot Icon */}
                    {msg.role === "assistant" && (
                      <div className="h-9 w-9 rounded-xl bg-[#D09C34]/15 text-[#D09C34] flex items-center justify-center shrink-0 border border-slate-100/10 shadow-sm">
                        <BrainCircuit size={18} />
                      </div>
                    )}

                    <div className={`p-5 rounded-2xl max-w-[85%] text-left space-y-4 shadow-sm border ${
                      msg.role === "user"
                        ? isDarkMode
                          ? "bg-slate-800 border-slate-700 text-white rounded-tr-none"
                          : "bg-slate-100 border-slate-200 text-slate-800 rounded-tr-none"
                        : isDarkMode
                          ? "bg-[#0B1E36] border-slate-800 text-slate-200 rounded-tl-none"
                          : "bg-white border-slate-100 text-slate-700 rounded-tl-none"
                    }`}>
                      {/* Markdown Text Render Simulator */}
                      <div 
                        className="text-xs sm:text-sm leading-relaxed space-y-3 font-normal"
                        dangerouslySetInnerHTML={{
                          __html: msg.content
                            .replace(/### (.*)/g, "<h3 class='text-sm sm:text-base font-extrabold uppercase text-[#D09C34] mt-2 mb-1'>$1</h3>")
                            .replace(/#### (.*)/g, "<h4 class='text-xs font-bold uppercase text-slate-400 mt-1'>$1</h4>")
                            .replace(/- \*\*(.*?)\*\*:/g, "<li><strong class='text-white'>$1</strong>:</li>")
                            .replace(/\* (.*)/g, "<p class='italic text-[#D09C34] text-[11px] mt-2'>$1</p>")
                            .replace(/`([^`]+)`/g, "<code class='bg-black/20 text-[#D09C34] py-0.5 px-1.5 rounded font-mono text-[11px] font-semibold'>$1</code>")
                            .replace(/```text\n([\s\S]+?)\n```/g, "<pre class='bg-black/25 border border-white/5 p-3.5 rounded-xl font-mono text-[10px] sm:text-[11px] leading-relaxed my-2 overflow-x-auto text-[#D09C34]'>$1</pre>")
                            .replace(/\n/g, "<br/>")
                        }}
                      />

                      {/* Assistant Actions Bar */}
                      {msg.role === "assistant" && (
                        <div className="flex items-center gap-3 pt-3 border-t border-slate-100/10 text-slate-400 text-xs">
                          {/* Copy */}
                          <button
                            onClick={() => copyToClipboard(msg.content, msg.id)}
                            className="hover:text-white flex items-center gap-1.5 font-bold uppercase tracking-wider text-[9px] transition-colors"
                          >
                            {copiedId === msg.id ? (
                              <>
                                <Check size={11} className="text-green-500" />
                                <span className="text-green-500">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy size={11} />
                                <span>Copy</span>
                              </>
                            )}
                          </button>

                          <div className="h-3 w-px bg-slate-100/10" />

                          {/* Bookmark */}
                          <button
                            onClick={() => toggleBookmark(msg.id)}
                            className="hover:text-white flex items-center gap-1.5 font-bold uppercase tracking-wider text-[9px] transition-colors"
                          >
                            <Bookmark size={11} className={bookmarkedIds.includes(msg.id) ? "fill-[#D09C34] text-[#D09C34]" : ""} />
                            <span>{bookmarkedIds.includes(msg.id) ? "Bookmarked" : "Bookmark"}</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* User Icon */}
                    {msg.role === "user" && (
                      <div className="h-9 w-9 rounded-xl bg-[#0A1D3D] text-[#D09C34] flex items-center justify-center shrink-0 border border-[#D09C34]/20 shadow-sm">
                        <User size={18} />
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Simulated Generator Typing Loader */}
                {isGenerating && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-4 items-start justify-start"
                  >
                    <div className="h-9 w-9 rounded-xl bg-[#D09C34]/15 text-[#D09C34] flex items-center justify-center shrink-0">
                      <BrainCircuit size={18} className="animate-spin" />
                    </div>
                    <div className={`p-4 rounded-2xl max-w-[80%] text-left space-y-1.5 shadow-sm border ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800 text-slate-400" : "bg-white border-slate-100 text-slate-500"
                    }`}>
                      <div className="flex gap-1 items-center py-1">
                        <span className="h-2 w-2 bg-[#D09C34] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="h-2 w-2 bg-[#D09C34] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="h-2 w-2 bg-[#D09C34] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={chatEndRef} />
              </div>
            )}
          </AnimatePresence>

        </div>

        {/* ========================================================== */}
        {/* Input Control Box */}
        {/* ========================================================== */}
        <footer className={`p-6 border-t transition-colors shrink-0 ${
          isDarkMode ? "border-slate-800 bg-[#0B1E36]/30" : "border-slate-200 bg-white"
        }`}>
          <div className="max-w-3xl mx-auto relative">
            
            {/* Listening Wave Overlay */}
            <AnimatePresence>
              {isListening && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="absolute inset-0 bg-[#D09C34] text-white rounded-2xl flex items-center justify-center gap-4 z-10 px-4 shadow-lg border border-[#D09C34]/20"
                >
                  <Volume2 className="animate-ping" size={18} />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">Listening to Voice Tutor...</span>
                  <div className="flex gap-1 items-center">
                    <span className="h-1.5 w-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputMessage);
              }}
              className="flex gap-3"
            >
              {/* Mic Icon Button */}
              <button
                type="button"
                onClick={startVoiceInput}
                className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                  isDarkMode 
                    ? "bg-[#09182F] border-slate-800 hover:bg-[#D09C34]/10 text-slate-300 hover:text-[#D09C34]" 
                    : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-500"
                }`}
                title="Voice Input Dictation"
              >
                <Mic size={18} />
              </button>

              {/* Text Input */}
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={`Ask a doubt in ${selectedSubject}...`}
                className={`w-full border rounded-xl py-3 px-4 text-xs sm:text-sm focus:outline-none transition-all ${
                  isDarkMode 
                    ? "bg-[#09182F] border-slate-800 focus:border-[#D09C34] text-white" 
                    : "bg-slate-50 border-slate-200 focus:border-[#0A1D3D] text-slate-800"
                }`}
              />

              {/* Send Button */}
              <Button
                type="submit"
                disabled={!inputMessage.trim() || isGenerating}
                className="h-12 w-12 bg-[#D09C34] hover:bg-[#0A1D3D] text-white p-0 rounded-xl flex items-center justify-center shadow shrink-0 cursor-pointer"
              >
                <Send size={16} className="text-white" />
              </Button>
            </form>

            {/* Disclaimer footer */}
            <p className="text-[10px] text-slate-500 font-semibold text-center mt-3 uppercase tracking-wider leading-none">
              Krithun Study Assistant generates responses based on verified syllabus outlines.
            </p>
          </div>
        </footer>

      </div>

    </div>
  );
}
