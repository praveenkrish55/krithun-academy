"use client";

import { useState } from "react";
import Image from "next/image";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StudentPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("student@krithun.com");
  const [loginPassword, setLoginPassword] = useState("password");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

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

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <button
                      onClick={() => setActiveTab("notifications")}
                      className="p-2 text-slate-500 hover:text-[#0A1D3D] hover:bg-slate-50 rounded-lg relative"
                    >
                      <Bell size={20} />
                      {notifications.filter((n) => !n.read).length > 0 && (
                        <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full animate-ping" />
                      )}
                    </button>
                  </div>
                  <div className="h-8 w-px bg-slate-200" />
                  <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveTab("profile")}>
                    <div className="h-9 w-9 rounded-lg bg-[#0A1D3D] text-[#D09C34] font-bold text-xs flex items-center justify-center">
                      PK
                    </div>
                    <span className="hidden sm:inline text-xs font-bold text-slate-700">Praveen Kumar</span>
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
                      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-40">
                        <div className="flex justify-between items-start">
                          <div className="h-10 w-10 rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] flex items-center justify-center shrink-0">
                            <ClipboardList size={18} />
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Attendance</span>
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
                          <div className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded text-[10px] font-bold uppercase">
                            <TrendingUp size={12} />
                            <span>+15% Study Hours</span>
                          </div>
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

                          <div className="pt-2">
                            <div className="relative">
                              <input
                                type="text"
                                disabled
                                placeholder="Ask about Section 40(a)..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-xs placeholder-slate-500 focus:outline-none pr-10 cursor-not-allowed"
                              />
                              <Button disabled className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 rounded-lg bg-[#D09C34] text-white p-0 shrink-0 flex items-center justify-center border border-white/10">
                                <Sparkles size={12} />
                              </Button>
                            </div>
                          </div>
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
