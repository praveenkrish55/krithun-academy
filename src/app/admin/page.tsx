"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  Coins,
  BookOpen,
  Globe,
  MessageSquare,
  FileText,
  Bell,
  BrainCircuit,
  TrendingUp,
  Plus,
  Search,
  Menu,
  X,
  LogOut,
  Lock,
  ArrowRight,
  ArrowLeft,
  Sun,
  Moon,
  CheckCircle2,
  AlertCircle,
  Clock,
  Settings,
  Check,
  FilePlus2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("admin@krithun.com");
  const [loginPassword, setLoginPassword] = useState("password");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  // Success message toasts simulation
  const [toastMessage, setToastMessage] = useState("");

  // ==========================================
  // SIMULATED DATABASE STATE
  // ==========================================
  
  // 1. Students Manager State
  const [students, setStudents] = useState([
    { id: "STU-001", name: "Praveen Kumar", reg: "KA-2026-0891", email: "praveen@outlook.com", course: "CA Intermediate", status: "Active", dateJoined: "2026-03-12" },
    { id: "STU-002", name: "Aditya Sharma", reg: "KA-2026-0892", email: "aditya.sharma@gmail.com", course: "CA Foundation", status: "Active", dateJoined: "2026-04-01" },
    { id: "STU-003", name: "Riya Patel", reg: "KA-2026-0893", email: "riya.patel@yahoo.com", course: "CMA Foundation", status: "Active", dateJoined: "2026-04-10" },
    { id: "STU-004", name: "Sneha Reddy", reg: "KA-2026-0894", email: "sneha.reddy@gmail.com", course: "CA Intermediate", status: "Suspended", dateJoined: "2026-04-15" },
    { id: "STU-005", name: "Karthik Subramanian", reg: "KA-2026-0895", email: "karthik.s@gmail.com", course: "Practical Accounting", status: "Active", dateJoined: "2026-05-02" },
  ]);
  const [studentSearch, setStudentSearch] = useState("");

  // 2. Faculty Manager State
  const [faculty, setFaculty] = useState([
    { id: "FAC-001", name: "CA Swathi Lakshmi", role: "Auditing & Tax Lead", batches: 3, rating: "4.9", payout: "₹95,000", status: "Active" },
    { id: "FAC-002", name: "CA Praveen Kumar", role: "Direct Taxation Head", batches: 2, rating: "4.8", payout: "₹85,000", status: "Active" },
    { id: "FAC-003", name: "CA Nandhini S", role: "Corporate Law Expert", batches: 2, rating: "4.7", payout: "₹78,000", status: "Active" },
    { id: "FAC-004", name: "CMA Arvind Raj", role: "Strategic Cost Analyst", batches: 1, rating: "4.9", payout: "₹65,000", status: "Active" },
  ]);
  const [facultySearch, setFacultySearch] = useState("");

  // 3. Admissions Requests Pipeline State
  const [admissions, setAdmissions] = useState([
    { id: "ADM-901", name: "Vikram Malhotra", email: "vikram.m@gmail.com", phone: "+91 98450 12345", course: "CA Foundation", status: "Pending", dateApplied: "2026-06-24" },
    { id: "ADM-902", name: "Meera Krishnan", email: "meera.k@gmail.com", phone: "+91 97410 98765", course: "CA Intermediate", status: "Pending", dateApplied: "2026-06-25" },
    { id: "ADM-903", name: "Ananya Deshmukh", email: "ananya.d@gmail.com", phone: "+91 88920 33445", course: "GST Filing", status: "Approved", dateApplied: "2026-06-22" },
    { id: "ADM-904", name: "Rohan Kapoor", email: "rohan.k@gmail.com", phone: "+91 99001 55667", course: "CMA Intermediate", status: "Rejected", dateApplied: "2026-06-20" },
  ]);

  // 4. Payments Ledger State
  const [payments, setPayments] = useState([
    { id: "TXN-8801", studentName: "Praveen Kumar", course: "CA Intermediate", amount: "₹45,000", method: "UPI / GPay", date: "2026-06-24", status: "Completed" },
    { id: "TXN-8802", studentName: "Aditya Sharma", course: "CA Foundation", amount: "₹35,000", method: "Net Banking", date: "2026-06-25", status: "Completed" },
    { id: "TXN-8803", studentName: "Ananya Deshmukh", course: "GST Filing", amount: "₹15,000", method: "Credit Card", date: "2026-06-25", status: "Completed" },
    { id: "TXN-8804", studentName: "Meera Krishnan", course: "CA Intermediate", amount: "₹45,000", method: "UPI / PhonePe", date: "2026-06-26", status: "Pending" },
    { id: "TXN-8805", studentName: "Sneha Reddy", course: "CA Intermediate", amount: "₹45,000", method: "UPI", date: "2026-04-15", status: "Failed" },
  ]);

  // 5. Course Manager State
  const [courses, setCourses] = useState([
    { id: 1, name: "CA Foundation", slug: "ca-foundation", duration: "6 Months", price: "₹35,000", status: "Published" },
    { id: 2, name: "CA Intermediate", slug: "ca-intermediate", duration: "9 Months", price: "₹45,000", status: "Published" },
    { id: 3, name: "CMA Foundation", slug: "cma-foundation", duration: "6 Months", price: "₹32,000", status: "Published" },
    { id: 4, name: "CMA Intermediate", slug: "cma-intermediate", duration: "9 Months", price: "₹42,000", status: "Published" },
    { id: 5, name: "GST Filing & Returns", slug: "gst-filing", duration: "2 Months", price: "₹15,000", status: "Published" },
    { id: 6, name: "Tally Prime Professional", slug: "tally-prime", duration: "3 Months", price: "₹18,000", status: "Published" },
    { id: 7, name: "Practical Accounting", slug: "practical-accounting", duration: "4 Months", price: "₹22,000", status: "Published" },
  ]);
  const [newCourseName, setNewCourseName] = useState("");
  const [newCourseDuration, setNewCourseDuration] = useState("");
  const [newCoursePrice, setNewCoursePrice] = useState("");

  // 6. Testimonials State
  const [testimonials, setTestimonials] = useState([
    { id: 1, student: "Rahul Nair", course: "CA Intermediate", quote: "The faculty at Krithun Academy helped me understand complex tax problems with extreme clarity.", stars: 5, status: "Approved" },
    { id: 2, student: "Sneha G", course: "CMA Intermediate", quote: "Highly interactive live classes and extremely comprehensive mock quizzes. Strongly recommended!", stars: 5, status: "Approved" },
    { id: 3, student: "Amit Verma", course: "GST Filing", quote: "The practical GST workshop was highly applicable to my current corporate accounting role.", stars: 4, status: "Pending Review" },
  ]);

  // 7. Blogs Manager State
  const [blogs, setBlogs] = useState([
    { id: 1, title: "How to Clear CA Foundation in First Attempt", author: "CA Swathi Lakshmi", category: "Strategy", date: "2026-06-20", views: 245 },
    { id: 2, title: "Understanding ITC Reconciliations under GST Rule 37A", author: "CA Praveen Kumar", category: "Direct Taxation", date: "2026-06-25", views: 180 },
  ]);
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogCategory, setNewBlogCategory] = useState("Strategy");
  const [newBlogBody, setNewBlogBody] = useState("");

  // 8. Announcements State
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: "CA Intermediate Nov 2026 Batch Kickoff", date: "2026-06-24", audience: "All Students" },
    { id: 2, title: "GST Reconciliations Class Rescheduled", date: "2026-06-25", audience: "Nov 2026 Batch" },
  ]);
  const [newAnnTitle, setNewAnnTitle] = useState("");
  const [newAnnAudience, setNewAnnAudience] = useState("All Students");

  // 9. Website Alert Banner & Hotlines Settings
  const [alertBannerText, setAlertBannerText] = useState("Admissions Open for 2026 Batch | Limited Seats Available");
  const [hotlinePhone, setHotlinePhone] = useState("+91 99445 55639");
  const [hotlineEmail, setHotlineEmail] = useState("info@krithunacademy.com");

  // ==========================================
  // HANDLERS AND COMPILATIONS
  // ==========================================

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);

    setTimeout(() => {
      if (loginEmail === "admin@krithun.com" && loginPassword === "password") {
        setIsLoggedIn(true);
        triggerToast("Welcome back, Chief Administrator!");
      } else {
        setLoginError("Invalid credentials. Use admin@krithun.com / password.");
      }
      setIsLoggingIn(false);
    }, 900);
  };

  const toggleStudentStatus = (id: string) => {
    setStudents(students.map(s => {
      if (s.id === id) {
        const nextStatus = s.status === "Active" ? "Suspended" : "Active";
        triggerToast(`Student ${s.name} is now ${nextStatus}`);
        return { ...s, status: nextStatus };
      }
      return s;
    }));
  };

  const toggleFacultyStatus = (id: string) => {
    setFaculty(faculty.map(f => {
      if (f.id === id) {
        const nextStatus = f.status === "Active" ? "Inactive" : "Active";
        triggerToast(`Faculty ${f.name} marked ${nextStatus.toLowerCase()}`);
        return { ...f, status: nextStatus };
      }
      return f;
    }));
  };

  const handleAdmissionDecision = (id: string, decision: "Approved" | "Rejected") => {
    setAdmissions(admissions.map(adm => {
      if (adm.id === id) {
        if (decision === "Approved") {
          const newStu = {
            id: `STU-0${students.length + 10}`,
            name: adm.name,
            reg: `KA-2026-0${895 + students.length}`,
            email: adm.email,
            course: adm.course,
            status: "Active",
            dateJoined: new Date().toISOString().split("T")[0],
          };
          setStudents(prev => [...prev, newStu]);

          const newTx = {
            id: `TXN-8${805 + payments.length}`,
            studentName: adm.name,
            course: adm.course,
            amount: "₹15,000",
            method: "UPI Deposit",
            date: new Date().toISOString().split("T")[0],
            status: "Completed",
          };
          setPayments(prev => [...prev, newTx]);

          triggerToast(`Approved! ${adm.name} added to roster.`);
        } else {
          triggerToast(`Application from ${adm.name} rejected.`);
        }
        return { ...adm, status: decision };
      }
      return adm;
    }));
  };

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourseName.trim() || !newCoursePrice.trim()) return;

    const slug = newCourseName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    const newCourseObj = {
      id: Date.now(),
      name: newCourseName,
      slug,
      duration: newCourseDuration || "3 Months",
      price: newCoursePrice,
      status: "Published",
    };

    setCourses([...courses, newCourseObj]);
    setNewCourseName("");
    setNewCourseDuration("");
    setNewCoursePrice("");
    triggerToast(`Course "${newCourseName}" published successfully!`);
  };

  const toggleCourseStatus = (id: number) => {
    setCourses(courses.map(c => {
      if (c.id === id) {
        const nextStatus = c.status === "Published" ? "Draft" : "Published";
        triggerToast(`Course "${c.name}" status updated to ${nextStatus}`);
        return { ...c, status: nextStatus };
      }
      return c;
    }));
  };

  const toggleTestimonialStatus = (id: number) => {
    setTestimonials(testimonials.map(t => {
      if (t.id === id) {
        const nextStatus = t.status === "Approved" ? "Pending Review" : "Approved";
        triggerToast(`Testimonial from ${t.student} is now ${nextStatus}`);
        return { ...t, status: nextStatus };
      }
      return t;
    }));
  };

  const handleAddBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBlogTitle.trim() || !newBlogBody.trim()) return;

    const newBlog = {
      id: Date.now(),
      title: newBlogTitle,
      author: "Chief Administrator",
      category: newBlogCategory,
      date: new Date().toISOString().split("T")[0],
      views: 12,
    };

    setBlogs([newBlog, ...blogs]);
    setNewBlogTitle("");
    setNewBlogBody("");
    triggerToast(`Blog post published: "${newBlogTitle}"`);
  };

  const handleAddAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAnnTitle.trim()) return;

    const newAnn = {
      id: Date.now(),
      title: newAnnTitle,
      date: new Date().toISOString().split("T")[0],
      audience: newAnnAudience,
    };

    setAnnouncements([newAnn, ...announcements]);
    setNewAnnTitle("");
    triggerToast(`Announcement broadcasted to ${newAnnAudience}!`);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    triggerToast("Website banner alerts & hotlines saved successfully!");
  };

  const totalRevenue = payments
    .filter(p => p.status === "Completed")
    .reduce((acc, curr) => acc + parseInt(curr.amount.replace(/[^0-9]/g, "")), 0);

  const pendingRevenue = payments
    .filter(p => p.status === "Pending")
    .reduce((acc, curr) => acc + parseInt(curr.amount.replace(/[^0-9]/g, "")), 0);

  const activeStudentsCount = students.filter(s => s.status === "Active").length;
  const pendingAdmissionsCount = admissions.filter(a => a.status === "Pending").length;
  
  const sidebarItems = [
    { id: "dashboard", label: "Overview", icon: LayoutDashboard },
    { id: "students", label: "Students", icon: Users, badge: students.length },
    { id: "faculty", label: "Faculty", icon: UserCheck },
    { id: "admissions", label: "Admissions", icon: BookOpen, badge: pendingAdmissionsCount, badgeAlert: true },
    { id: "payments", label: "Payments & Revenue", icon: Coins },
    { id: "courses", label: "Courses Manager", icon: BookOpen },
    { id: "website", label: "Website Manager", icon: Globe },
    { id: "testimonials", label: "Testimonials", icon: MessageSquare },
    { id: "blogs", label: "Blogs Editor", icon: FileText },
    { id: "announcements", label: "Announcements", icon: Bell },
    { id: "ai-usage", label: "AI Usage Metrics", icon: BrainCircuit },
    { id: "analytics", label: "Analytics Center", icon: TrendingUp },
  ];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${
      isDarkMode ? "bg-[#09182F] text-slate-100" : "bg-slate-50 text-[#334155]"
    }`}>
      
      {/* Toast Alert overlay */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#D09C34] text-[#0A1D3D] px-6 py-3.5 rounded-2xl font-bold uppercase tracking-wider text-xs shadow-2xl flex items-center gap-2.5 border border-[#D09C34]/40"
          >
            <CheckCircle2 size={16} />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          
          // ==========================================================
          // ENTERPRISE LOGIN GATE
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
                    <span>ADMIN</span>
                  </div>
                </div>
                <h2 className="text-3xl font-extrabold text-white tracking-tight uppercase font-heading">
                  Enterprise Gate
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-300">
                  Secure administration interface for student registry & revenue ledgers.
                </p>
              </div>

              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-2xl relative text-left">
                {loginError && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-600 text-xs rounded-xl flex items-center gap-2 font-bold uppercase">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{loginError}</span>
                  </div>
                )}

                <form className="space-y-5" onSubmit={handleLogin}>
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Admin Email</label>
                    <div className="relative">
                      <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
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
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Security Pin / Password</label>
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
                        <span>Validating access tokens...</span>
                      ) : (
                        <>
                          <span>Secure Access</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 text-white" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>

                <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Demo Credentials</p>
                  <p className="text-[11px] text-slate-500 mt-1 font-mono">
                    admin@krithun.com / password
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        ) : (
          
          // ==========================================================
          // ENTERPRISE WORKSPACE
          // ==========================================================
          <motion.div
            key="admin-portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex min-h-screen relative"
          >
            
            {/* Sidebar Navigation */}
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
                    <span>ADMIN</span>
                  </div>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className={`p-1 rounded lg:hidden ${isDarkMode ? "hover:bg-white/5" : "hover:bg-slate-100"}`}
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Profile widget */}
                <div className={`p-5 border-b flex items-center gap-3 shrink-0 ${
                  isDarkMode ? "border-slate-800" : "border-slate-100"
                }`}>
                  <div className="h-10 w-10 rounded-xl bg-[#0A1D3D] text-[#D09C34] border border-[#D09C34]/40 font-extrabold flex items-center justify-center text-sm shadow-inner shrink-0 uppercase">
                    AD
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className={`text-xs font-bold truncate leading-none ${isDarkMode ? "text-white" : "text-slate-800"}`}>Administrator</p>
                    <p className="text-[9px] text-slate-400 font-semibold mt-1 uppercase tracking-wider">Enterprise Controller</p>
                  </div>
                </div>

                {/* Navigation items */}
                <nav className="flex-1 py-4 px-3 space-y-1">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        if (window.innerWidth < 1024) {
                          setIsSidebarOpen(false);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 ${
                        activeTab === item.id
                          ? "bg-[#D09C34] text-[#0A1D3D] shadow-md"
                          : isDarkMode
                            ? "text-slate-300 hover:bg-white/5 hover:text-white"
                            : "text-slate-600 hover:bg-slate-100 hover:text-[#0A1D3D]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon size={16} className={activeTab === item.id ? "text-[#0A1D3D]" : "text-[#D09C34]"} />
                        <span>{item.label}</span>
                      </div>
                      
                      {item.badge !== undefined && item.badge > 0 && (
                        <span className={`font-bold text-[9px] px-2 py-0.5 rounded-full shrink-0 ${
                          item.badgeAlert 
                            ? "bg-red-500 text-white animate-pulse" 
                            : isDarkMode ? "bg-white/10 text-white" : "bg-slate-200 text-slate-700"
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Sidebar footer */}
              <div className={`p-4 border-t shrink-0 ${isDarkMode ? "border-slate-800" : "border-slate-100"}`}>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-red-500/10 hover:bg-red-500 hover:text-white text-red-400 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300"
                >
                  <LogOut size={16} />
                  <span>Exit Console</span>
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

            {/* Main content viewport */}
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
                    {sidebarItems.find((item) => item.id === activeTab)?.label} Control
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
                    <div className="h-9 w-9 rounded-lg bg-[#D09C34] text-[#0A1D3D] font-bold text-xs flex items-center justify-center">
                      AD
                    </div>
                    <span className={`hidden sm:inline text-xs font-bold ${isDarkMode ? "text-slate-200" : "text-slate-700"}`}>Console Admin</span>
                  </div>
                </div>
              </header>

              {/* Workspace viewport scroll area */}
              <main className="flex-1 p-6 sm:p-8 max-w-7xl w-full mx-auto space-y-8">
                
                {/* ========================================================== */}
                {/* TAB: DASHBOARD OVERVIEW */}
                {/* ========================================================== */}
                {activeTab === "dashboard" && (
                  <div className="space-y-8 text-left">
                    
                    {/* Welcome Banner */}
                    <div className="bg-[#0A1D3D] text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-[#D09C34]/20 shadow-lg">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(208,156,52,0.1),transparent_50%)] pointer-events-none" />
                      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="space-y-2">
                          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase">Krithun Executive Command</h2>
                          <p className="text-slate-300 text-xs sm:text-sm font-normal max-w-lg leading-relaxed font-sans">
                            System metrics: Stable. Total collected revenue stands at **₹{(totalRevenue/1000).toFixed(0)}k**. You have **{pendingAdmissionsCount}** pending admission applications requiring review.
                          </p>
                        </div>
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#D09C34]/15 border border-[#D09C34]/30 rounded-2xl text-xs font-bold uppercase tracking-wider text-[#D09C34]">
                          <Clock size={14} className="animate-pulse" />
                          <span>Console Status: Online</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      
                      {/* Revenue card */}
                      <div className={`border rounded-2xl p-6 shadow-sm flex flex-col justify-between h-36 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <div className="flex justify-between items-start">
                          <div className="h-9 w-9 rounded-lg bg-[#D09C34]/10 text-[#D09C34] flex items-center justify-center shrink-0">
                            <Coins size={18} />
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Total Revenue</span>
                        </div>
                        <div>
                          <p className={`text-2.5xl font-black leading-none ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>₹{totalRevenue.toLocaleString()}</p>
                          <p className="text-[10px] text-slate-400 font-semibold uppercase mt-1">Pending Ledger: ₹{pendingRevenue.toLocaleString()}</p>
                        </div>
                      </div>

                      {/* Students card */}
                      <div className={`border rounded-2xl p-6 shadow-sm flex flex-col justify-between h-36 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <div className="flex justify-between items-start">
                          <div className="h-9 w-9 rounded-lg bg-[#D09C34]/10 text-[#D09C34] flex items-center justify-center shrink-0">
                            <Users size={18} />
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Active Students</span>
                        </div>
                        <div>
                          <p className={`text-2.5xl font-black leading-none ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>{activeStudentsCount} / {students.length}</p>
                          <p className="text-[10px] text-slate-400 font-semibold uppercase mt-1">Total registered students roster</p>
                        </div>
                      </div>

                      {/* Faculty card */}
                      <div className={`border rounded-2xl p-6 shadow-sm flex flex-col justify-between h-36 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <div className="flex justify-between items-start">
                          <div className="h-9 w-9 rounded-lg bg-[#D09C34]/10 text-[#D09C34] flex items-center justify-center shrink-0">
                            <UserCheck size={18} />
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Active Faculty</span>
                        </div>
                        <div>
                          <p className={`text-2.5xl font-black leading-none ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>{faculty.filter(f => f.status === "Active").length} Instructors</p>
                          <p className="text-[10px] text-slate-400 font-semibold uppercase mt-1">Across CA/CMA divisions</p>
                        </div>
                      </div>

                      {/* Course count */}
                      <div className={`border rounded-2xl p-6 shadow-sm flex flex-col justify-between h-36 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <div className="flex justify-between items-start">
                          <div className="h-9 w-9 rounded-lg bg-[#D09C34]/10 text-[#D09C34] flex items-center justify-center shrink-0">
                            <BookOpen size={18} />
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Published Programs</span>
                        </div>
                        <div>
                          <p className={`text-2.5xl font-black leading-none ${isDarkMode ? "text-white" : "text-[#0A1D3D]"}`}>{courses.filter(c => c.status === "Published").length} Courses</p>
                          <p className="text-[10px] text-slate-400 font-semibold uppercase mt-1">Total database: {courses.length}</p>
                        </div>
                      </div>

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      
                      {/* Left/Middle: Recent Admissions Pipeline */}
                      <div className={`border rounded-2xl p-6 shadow-sm lg:col-span-2 space-y-4 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <div className="flex justify-between items-center">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-[#D09C34]">Recent Admissions Pipeline</h3>
                          <button onClick={() => setActiveTab("admissions")} className="text-[10px] font-bold uppercase text-[#D09C34] hover:underline flex items-center gap-1">
                            <span>Manage Applications</span>
                            <ArrowRight size={10} />
                          </button>
                        </div>

                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className={`border-b text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? "border-slate-800 text-slate-400" : "border-slate-100 text-slate-500"}`}>
                                <th className="py-3 px-2">Applicant</th>
                                <th className="py-3 px-2">Selected Course</th>
                                <th className="py-3 px-2">Applied Date</th>
                                <th className="py-3 px-2">Pipeline Status</th>
                                <th className="py-3 px-2 text-right">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {admissions.slice(0, 3).map((adm) => (
                                <tr key={adm.id} className={`border-b ${isDarkMode ? "border-slate-800/50 hover:bg-white/5" : "border-slate-100 hover:bg-slate-50"}`}>
                                  <td className="py-3 px-2 font-bold">{adm.name}</td>
                                  <td className="py-3 px-2 text-slate-400">{adm.course}</td>
                                  <td className="py-3 px-2">{adm.dateApplied}</td>
                                  <td className="py-3 px-2">
                                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                                      adm.status === "Approved" 
                                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                                        : adm.status === "Rejected"
                                          ? "bg-red-500/10 text-red-400 border border-red-500/20"
                                          : "bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse"
                                    }`}>
                                      {adm.status}
                                    </span>
                                  </td>
                                  <td className="py-3 px-2 text-right">
                                    {adm.status === "Pending" ? (
                                      <div className="flex justify-end gap-1.5">
                                        <button
                                          onClick={() => handleAdmissionDecision(adm.id, "Approved")}
                                          className="p-1 rounded bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white transition-colors"
                                          title="Approve student"
                                        >
                                          <Check size={12} />
                                        </button>
                                        <button
                                          onClick={() => handleAdmissionDecision(adm.id, "Rejected")}
                                          className="p-1 rounded bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white transition-colors"
                                          title="Reject student"
                                        >
                                          <X size={12} />
                                        </button>
                                      </div>
                                    ) : (
                                      <span className="text-[10px] text-slate-500 font-semibold uppercase">Decided</span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Right: Quick Actions panel */}
                      <div className={`border rounded-2xl p-6 shadow-sm space-y-5 text-left flex flex-col justify-between ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-wider text-[#D09C34] mb-4">Console Quick Actions</h3>
                          <div className="space-y-3.5">
                            <button
                              onClick={() => { setActiveTab("courses"); }}
                              className="w-full flex items-center gap-3 p-3 rounded-xl border border-dashed border-slate-700 hover:border-[#D09C34] text-xs font-bold uppercase tracking-wide transition-all group cursor-pointer"
                            >
                              <Plus size={14} className="text-[#D09C34] group-hover:scale-125 transition-transform" />
                              <span>Create New Course</span>
                            </button>
                            <button
                              onClick={() => { setActiveTab("announcements"); }}
                              className="w-full flex items-center gap-3 p-3 rounded-xl border border-dashed border-slate-700 hover:border-[#D09C34] text-xs font-bold uppercase tracking-wide transition-all group cursor-pointer"
                            >
                              <Bell size={14} className="text-[#D09C34] group-hover:rotate-12 transition-transform" />
                              <span>Broadcast Notice</span>
                            </button>
                            <button
                              onClick={() => { setActiveTab("blogs"); }}
                              className="w-full flex items-center gap-3 p-3 rounded-xl border border-dashed border-slate-700 hover:border-[#D09C34] text-xs font-bold uppercase tracking-wide transition-all group cursor-pointer"
                            >
                              <FilePlus2 size={14} className="text-[#D09C34] group-hover:translate-x-0.5 transition-transform" />
                              <span>Publish Blog Post</span>
                            </button>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-800/80 text-[10px] text-slate-400 font-medium">
                          Security clearance tokens active. Activity updates logged to memory.
                        </div>
                      </div>

                    </div>

                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB: STUDENTS MANAGER */}
                {/* ========================================================== */}
                {activeTab === "students" && (
                  <div className="space-y-6 text-left">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                      <div>
                        <h2 className="text-xl font-bold uppercase font-heading text-[#D09C34]">Students Database Roster</h2>
                        <p className="text-xs text-slate-400 mt-1">Manage active credentials, enrollment courses, and status toggles.</p>
                      </div>
                      
                      {/* Search */}
                      <div className="relative w-full sm:w-64">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Search students..."
                          value={studentSearch}
                          onChange={(e) => setStudentSearch(e.target.value)}
                          className={`w-full text-xs rounded-xl py-2.5 pl-9 pr-4 focus:outline-none border ${
                            isDarkMode ? "bg-[#0A1D3D] border-slate-800 focus:border-[#D09C34]" : "bg-white border-slate-200 focus:border-[#0A1D3D]"
                          }`}
                        />
                      </div>
                    </div>

                    <div className={`border rounded-2xl p-6 shadow-sm overflow-hidden ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className={`border-b text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? "border-slate-800 text-slate-400" : "border-slate-100 text-slate-500"}`}>
                              <th className="py-3 px-2">Reg ID</th>
                              <th className="py-3 px-2">Student Name</th>
                              <th className="py-3 px-2">Email Address</th>
                              <th className="py-3 px-2">Registered Course</th>
                              <th className="py-3 px-2">Date Joined</th>
                              <th className="py-3 px-2">Status</th>
                              <th className="py-3 px-2 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {students
                              .filter(s => s.name.toLowerCase().includes(studentSearch.toLowerCase()) || s.email.toLowerCase().includes(studentSearch.toLowerCase()))
                              .map((stu) => (
                                <tr key={stu.id} className={`border-b ${isDarkMode ? "border-slate-800/50 hover:bg-white/5" : "border-slate-100 hover:bg-slate-50"}`}>
                                  <td className="py-3 px-2 font-mono text-[10px] font-bold text-[#D09C34]">{stu.reg}</td>
                                  <td className="py-3 px-2 font-bold">{stu.name}</td>
                                  <td className="py-3 px-2 font-mono text-slate-400">{stu.email}</td>
                                  <td className="py-3 px-2 text-slate-400">{stu.course}</td>
                                  <td className="py-3 px-2">{stu.dateJoined}</td>
                                  <td className="py-3 px-2">
                                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                                      stu.status === "Active" 
                                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                    }`}>
                                      {stu.status}
                                    </span>
                                  </td>
                                  <td className="py-3 px-2 text-right">
                                    <button
                                      onClick={() => toggleStudentStatus(stu.id)}
                                      className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                                        stu.status === "Active"
                                          ? "bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-white"
                                          : "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white"
                                      }`}
                                    >
                                      {stu.status === "Active" ? "Suspend" : "Activate"}
                                    </button>
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
                {/* TAB: FACULTY MANAGER */}
                {/* ========================================================== */}
                {activeTab === "faculty" && (
                  <div className="space-y-6 text-left">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                      <div>
                        <h2 className="text-xl font-bold uppercase font-heading text-[#D09C34]">Faculty Directory Manager</h2>
                        <p className="text-xs text-slate-400 mt-1">Review active CA/CMA instructors, assignments counts, and payout aggregates.</p>
                      </div>

                      <div className="relative w-full sm:w-64">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Search faculty..."
                          value={facultySearch}
                          onChange={(e) => setFacultySearch(e.target.value)}
                          className={`w-full text-xs rounded-xl py-2.5 pl-9 pr-4 focus:outline-none border ${
                            isDarkMode ? "bg-[#0A1D3D] border-slate-800 focus:border-[#D09C34]" : "bg-white border-slate-200 focus:border-[#0A1D3D]"
                          }`}
                        />
                      </div>
                    </div>

                    <div className={`border rounded-2xl p-6 shadow-sm overflow-hidden ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className={`border-b text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? "border-slate-800 text-slate-400" : "border-slate-100 text-slate-500"}`}>
                              <th className="py-3 px-2">Faculty ID</th>
                              <th className="py-3 px-2">Instructor Name</th>
                              <th className="py-3 px-2">Designation / Role</th>
                              <th className="py-3 px-2">Active Batches</th>
                              <th className="py-3 px-2">Student Rating</th>
                              <th className="py-3 px-2">Est. Payout</th>
                              <th className="py-3 px-2">Status</th>
                              <th className="py-3 px-2 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {faculty
                              .filter(f => f.name.toLowerCase().includes(facultySearch.toLowerCase()) || f.role.toLowerCase().includes(facultySearch.toLowerCase()))
                              .map((fac) => (
                                <tr key={fac.id} className={`border-b ${isDarkMode ? "border-slate-800/50 hover:bg-white/5" : "border-slate-100 hover:bg-slate-50"}`}>
                                  <td className="py-3 px-2 font-mono text-[10px] font-bold text-[#D09C34]">{fac.id}</td>
                                  <td className="py-3 px-2 font-bold">{fac.name}</td>
                                  <td className="py-3 px-2 text-slate-400 font-semibold">{fac.role}</td>
                                  <td className="py-3 px-2 font-bold">{fac.batches} Batches</td>
                                  <td className="py-3 px-2 font-bold text-[#D09C34]">★ {fac.rating} / 5.0</td>
                                  <td className="py-3 px-2 font-mono">{fac.payout}</td>
                                  <td className="py-3 px-2">
                                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                                      fac.status === "Active" 
                                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                                    }`}>
                                      {fac.status}
                                    </span>
                                  </td>
                                  <td className="py-3 px-2 text-right">
                                    <button
                                      onClick={() => toggleFacultyStatus(fac.id)}
                                      className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                                        fac.status === "Active"
                                          ? "bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white"
                                          : "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white"
                                      }`}
                                    >
                                      {fac.status === "Active" ? "Suspend" : "Activate"}
                                    </button>
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
                {/* TAB: ADMISSIONS PIPELINE */}
                {/* ========================================================== */}
                {activeTab === "admissions" && (
                  <div className="space-y-6 text-left">
                    <div>
                      <h2 className="text-xl font-bold uppercase font-heading text-[#D09C34]">Admissions Lead Pipeline</h2>
                      <p className="text-xs text-slate-400 mt-1">Review student applications, verify requests, and execute enrollments instantly.</p>
                    </div>

                    <div className={`border rounded-2xl p-6 shadow-sm overflow-hidden ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className={`border-b text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? "border-slate-800 text-slate-400" : "border-slate-100 text-slate-500"}`}>
                              <th className="py-3 px-2">Pipeline ID</th>
                              <th className="py-3 px-2">Applicant</th>
                              <th className="py-3 px-2">Target Course</th>
                              <th className="py-3 px-2">Contact Details</th>
                              <th className="py-3 px-2">Applied Date</th>
                              <th className="py-3 px-2">Pipeline Status</th>
                              <th className="py-3 px-2 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {admissions.map((adm) => (
                              <tr key={adm.id} className={`border-b ${isDarkMode ? "border-slate-800/50 hover:bg-white/5" : "border-slate-100 hover:bg-slate-50"}`}>
                                <td className="py-3 px-2 font-mono text-[10px] font-bold text-[#D09C34]">{adm.id}</td>
                                <td className="py-3 px-2 font-bold">{adm.name}</td>
                                <td className="py-3 px-2 text-slate-400 font-semibold">{adm.course}</td>
                                <td className="py-3 px-2 font-mono text-slate-400 leading-normal">
                                  <div>{adm.email}</div>
                                  <div className="text-[10px] text-slate-500 mt-0.5">{adm.phone}</div>
                                </td>
                                <td className="py-3 px-2">{adm.dateApplied}</td>
                                <td className="py-3 px-2">
                                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                                    adm.status === "Approved" 
                                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                                      : adm.status === "Rejected"
                                        ? "bg-red-500/10 text-red-400 border border-red-500/20"
                                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse"
                                  }`}>
                                    {adm.status}
                                  </span>
                                </td>
                                <td className="py-3 px-2 text-right">
                                  {adm.status === "Pending" ? (
                                    <div className="flex justify-end gap-2">
                                      <button
                                        onClick={() => handleAdmissionDecision(adm.id, "Approved")}
                                        className="px-2.5 py-1.5 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white rounded-lg font-bold text-[10px] uppercase transition-colors cursor-pointer"
                                      >
                                        Approve
                                      </button>
                                      <button
                                        onClick={() => handleAdmissionDecision(adm.id, "Rejected")}
                                        className="px-2.5 py-1.5 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white rounded-lg font-bold text-[10px] uppercase transition-colors cursor-pointer"
                                      >
                                        Reject
                                      </button>
                                    </div>
                                  ) : (
                                    <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Processed</span>
                                  )}
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
                {/* TAB: PAYMENTS & REVENUE */}
                {/* ========================================================== */}
                {activeTab === "payments" && (
                  <div className="space-y-8 text-left">
                    <div>
                      <h2 className="text-xl font-bold uppercase font-heading text-[#D09C34]">Financial Payments Ledger</h2>
                      <p className="text-xs text-slate-400 mt-1">Audit tuition transactions, track collection metrics, and review revenue graphs.</p>
                    </div>

                    {/* Revenue SVG Line Graph */}
                    <div className={`border rounded-2xl p-6 shadow-sm ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#D09C34] mb-6">Revenue Progress Curve (Est. Monthly)</h3>
                      <div className="h-56 w-full relative pt-2">
                        <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="revenueGlow" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#D09C34" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#D09C34" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          
                          <line x1="0" y1="50" x2="600" y2="50" stroke={isDarkMode ? "#1e293b" : "#e2e8f0"} strokeWidth="1" strokeDasharray="5,5" />
                          <line x1="0" y1="100" x2="600" y2="100" stroke={isDarkMode ? "#1e293b" : "#e2e8f0"} strokeWidth="1" strokeDasharray="5,5" />
                          <line x1="0" y1="150" x2="600" y2="150" stroke={isDarkMode ? "#1e293b" : "#e2e8f0"} strokeWidth="1" strokeDasharray="5,5" />
                          
                          <path
                            d="M 0 170 Q 100 130 200 145 T 400 90 T 600 35 L 600 200 L 0 200 Z"
                            fill="url(#revenueGlow)"
                          />
                          
                          <path
                            d="M 0 170 Q 100 130 200 145 T 400 90 T 600 35"
                            fill="none"
                            stroke="#D09C34"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                          />
                          
                          <circle cx="200" cy="145" r="5" fill="#D09C34" stroke={isDarkMode ? "#0B1E36" : "#ffffff"} strokeWidth="2" />
                          <circle cx="400" cy="90" r="5" fill="#D09C34" stroke={isDarkMode ? "#0B1E36" : "#ffffff"} strokeWidth="2" />
                          <circle cx="600" cy="35" r="5" fill="#D09C34" stroke={isDarkMode ? "#0B1E36" : "#ffffff"} strokeWidth="2" />
                        </svg>

                        <div className="absolute top-2 left-2 text-[9px] text-slate-500 font-bold uppercase bg-slate-800/10 px-2 py-0.5 rounded font-mono">₹180k</div>
                        <div className="absolute top-24 left-2 text-[9px] text-slate-500 font-bold uppercase bg-slate-800/10 px-2 py-0.5 rounded font-mono">₹90k</div>
                        <div className="absolute bottom-2 left-2 text-[9px] text-slate-500 font-bold uppercase bg-slate-800/10 px-2 py-0.5 rounded font-mono">₹0</div>

                        <div className="flex justify-between items-center text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-3 font-mono">
                          <span>March (₹45k)</span>
                          <span>April (₹75k)</span>
                          <span>May (₹120k)</span>
                          <span>June (₹175k)</span>
                        </div>
                      </div>
                    </div>

                    {/* Payments Table */}
                    <div className={`border rounded-2xl p-6 shadow-sm overflow-hidden ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#D09C34] mb-4">Tuition Transaction Audit Log</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className={`border-b text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? "border-slate-800 text-slate-400" : "border-slate-100 text-slate-500"}`}>
                              <th className="py-3 px-2">Txn ID</th>
                              <th className="py-3 px-2">Student Name</th>
                              <th className="py-3 px-2">Registered Course</th>
                              <th className="py-3 px-2">Amount Paid</th>
                              <th className="py-3 px-2">Payment Method</th>
                              <th className="py-3 px-2">Txn Date</th>
                              <th className="py-3 px-2 text-right">Ledger Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {payments.map((tx) => (
                              <tr key={tx.id} className={`border-b ${isDarkMode ? "border-slate-800/50 hover:bg-white/5" : "border-slate-100 hover:bg-slate-50"}`}>
                                <td className="py-3 px-2 font-mono text-[10px] font-bold text-slate-400">{tx.id}</td>
                                <td className="py-3 px-2 font-bold">{tx.studentName}</td>
                                <td className="py-3 px-2 text-slate-400">{tx.course}</td>
                                <td className="py-3 px-2 font-bold font-mono text-[#D09C34]">{tx.amount}</td>
                                <td className="py-3 px-2 text-slate-400 font-semibold uppercase text-[10px]">{tx.method}</td>
                                <td className="py-3 px-2">{tx.date}</td>
                                <td className="py-3 px-2 text-right">
                                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                                    tx.status === "Completed" 
                                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                                      : tx.status === "Failed"
                                        ? "bg-red-500/10 text-red-400 border border-red-500/20"
                                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse"
                                  }`}>
                                    {tx.status}
                                  </span>
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
                {/* TAB: COURSES MANAGER */}
                {/* ========================================================== */}
                {activeTab === "courses" && (
                  <div className="space-y-8 text-left">
                    <div>
                      <h2 className="text-xl font-bold uppercase font-heading text-[#D09C34]">Course Catalog Manager</h2>
                      <p className="text-xs text-slate-400 mt-1">Publish new training programs, modify course details, and configure database visibility.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                      {/* Left: Course Creator Form */}
                      <div className={`border rounded-2xl p-6 shadow-sm space-y-4 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#D09C34] flex items-center gap-2">
                          <FilePlus2 size={15} />
                          <span>Publish New Program</span>
                        </h3>
                        
                        <form className="space-y-4" onSubmit={handleAddCourse}>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Course Title</label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. CA Foundation Fast-Track"
                              value={newCourseName}
                              onChange={(e) => setNewCourseName(e.target.value)}
                              className={`w-full text-xs rounded-xl py-2.5 px-3 focus:outline-none border ${
                                isDarkMode ? "bg-[#0A1D3D] border-slate-800 focus:border-[#D09C34]" : "bg-slate-50 border-slate-200 focus:border-[#0A1D3D]"
                              }`}
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Duration</label>
                            <input
                              type="text"
                              placeholder="e.g. 6 Months"
                              value={newCourseDuration}
                              onChange={(e) => setNewCourseDuration(e.target.value)}
                              className={`w-full text-xs rounded-xl py-2.5 px-3 focus:outline-none border ${
                                isDarkMode ? "bg-[#0A1D3D] border-slate-800 focus:border-[#D09C34]" : "bg-slate-50 border-slate-200 focus:border-[#0A1D3D]"
                              }`}
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Tuition Price (INR)</label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. ₹35,000"
                              value={newCoursePrice}
                              onChange={(e) => setNewCoursePrice(e.target.value)}
                              className={`w-full text-xs rounded-xl py-2.5 px-3 focus:outline-none border ${
                                isDarkMode ? "bg-[#0A1D3D] border-slate-800 focus:border-[#D09C34]" : "bg-slate-50 border-slate-200 focus:border-[#0A1D3D]"
                              }`}
                            />
                          </div>

                          <button
                            type="submit"
                            className="w-full bg-[#D09C34] hover:bg-[#0A1D3D] hover:text-white text-[#0A1D3D] font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                          >
                            <Plus size={14} />
                            <span>Publish Course</span>
                          </button>
                        </form>
                      </div>

                      {/* Right: Published Courses Table */}
                      <div className={`border rounded-2xl p-6 shadow-sm lg:col-span-2 space-y-4 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#D09C34]">Active Course Directory</h3>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className={`border-b text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? "border-slate-800 text-slate-400" : "border-slate-100 text-slate-500"}`}>
                                <th className="py-3 px-2">Program</th>
                                <th className="py-3 px-2">Duration</th>
                                <th className="py-3 px-2">Price Value</th>
                                <th className="py-3 px-2">Visibility</th>
                                <th className="py-3 px-2 text-right">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {courses.map((course) => (
                                <tr key={course.id} className={`border-b ${isDarkMode ? "border-slate-800/50 hover:bg-white/5" : "border-slate-100 hover:bg-slate-50"}`}>
                                  <td className="py-3 px-2 font-bold">{course.name}</td>
                                  <td className="py-3 px-2 text-slate-400 font-semibold">{course.duration}</td>
                                  <td className="py-3 px-2 font-mono font-bold text-[#D09C34]">{course.price}</td>
                                  <td className="py-3 px-2">
                                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                                      course.status === "Published" 
                                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                                        : "bg-slate-500/10 text-slate-400 border border-slate-500/20"
                                    }`}>
                                      {course.status}
                                    </span>
                                  </td>
                                  <td className="py-3 px-2 text-right">
                                    <button
                                      onClick={() => toggleCourseStatus(course.id)}
                                      className={`px-2.5 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                                        course.status === "Published"
                                          ? "bg-slate-500/10 text-slate-400 hover:bg-slate-500 hover:text-white"
                                          : "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white"
                                      }`}
                                    >
                                      {course.status === "Published" ? "Draft" : "Publish"}
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB: WEBSITE MANAGER */}
                {/* ========================================================== */}
                {activeTab === "website" && (
                  <div className="space-y-8 text-left max-w-2xl">
                    <div>
                      <h2 className="text-xl font-bold uppercase font-heading text-[#D09C34]">Website Configuration Settings</h2>
                      <p className="text-xs text-slate-400 mt-1">Configure global announcements headers, telephone hotlines, and support emails.</p>
                    </div>

                    <div className={`border rounded-2xl p-6 shadow-sm ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <form className="space-y-5" onSubmit={handleSaveSettings}>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Alert Header Text Banner</label>
                          <input
                            type="text"
                            required
                            value={alertBannerText}
                            onChange={(e) => setAlertBannerText(e.target.value)}
                            className={`w-full text-xs rounded-xl py-3 px-3.5 focus:outline-none border ${
                              isDarkMode ? "bg-[#0A1D3D] border-slate-800 focus:border-[#D09C34]" : "bg-slate-50 border-slate-200 focus:border-[#0A1D3D]"
                            }`}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">hotline phone (Header & Footer)</label>
                          <input
                            type="text"
                            required
                            value={hotlinePhone}
                            onChange={(e) => setHotlinePhone(e.target.value)}
                            className={`w-full text-xs rounded-xl py-3 px-3.5 focus:outline-none border ${
                              isDarkMode ? "bg-[#0A1D3D] border-slate-800 focus:border-[#D09C34]" : "bg-slate-50 border-slate-200 focus:border-[#0A1D3D]"
                            }`}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">office support email</label>
                          <input
                            type="email"
                            required
                            value={hotlineEmail}
                            onChange={(e) => setHotlineEmail(e.target.value)}
                            className={`w-full text-xs rounded-xl py-3 px-3.5 focus:outline-none border ${
                              isDarkMode ? "bg-[#0A1D3D] border-slate-800 focus:border-[#D09C34]" : "bg-slate-50 border-slate-200 focus:border-[#0A1D3D]"
                            }`}
                          />
                        </div>

                        <button
                          type="submit"
                          className="bg-[#D09C34] hover:bg-[#0A1D3D] hover:text-white text-[#0A1D3D] font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all duration-300 cursor-pointer shadow-md inline-flex items-center gap-2"
                        >
                          <Settings size={14} />
                          <span>Save Settings</span>
                        </button>
                      </form>
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB: TESTIMONIALS MANAGER */}
                {/* ========================================================== */}
                {activeTab === "testimonials" && (
                  <div className="space-y-6 text-left">
                    <div>
                      <h2 className="text-xl font-bold uppercase font-heading text-[#D09C34]">Student Testimonials Reviewer</h2>
                      <p className="text-xs text-slate-400 mt-1">Approve feedback or toggle visibility on the public landing page.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {testimonials.map((test) => (
                        <div
                          key={test.id}
                          className={`border rounded-2xl p-6 shadow-sm flex flex-col justify-between h-56 transition-all duration-300 relative ${
                            isDarkMode 
                              ? "bg-[#0B1E36] border-slate-800 hover:border-[#D09C34]/40" 
                              : "bg-white border-slate-100 hover:border-[#0A1D3D]/20"
                          }`}
                        >
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h4 className="font-bold text-sm text-[#D09C34]">{test.student}</h4>
                                <p className="text-[10px] text-slate-400 font-semibold uppercase">{test.course}</p>
                              </div>
                              <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider ${
                                test.status === "Approved" 
                                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                                  : "bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse"
                              }`}>
                                {test.status}
                              </span>
                            </div>
                            
                            <div className="flex gap-0.5 mb-3 text-amber-400">
                              {Array.from({ length: test.stars }).map((_, i) => (
                                <span key={i}>★</span>
                              ))}
                            </div>

                            <p className="text-xs text-slate-300 italic line-clamp-3 leading-relaxed">
                              "{test.quote}"
                            </p>
                          </div>

                          <div className="pt-4 border-t border-slate-800/60 mt-4 flex justify-end">
                            <button
                              onClick={() => toggleTestimonialStatus(test.id)}
                              className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                                test.status === "Approved"
                                  ? "bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-white"
                                  : "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white"
                              }`}
                            >
                              {test.status === "Approved" ? "Hide Review" : "Approve Review"}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB: BLOGS MANAGER */}
                {/* ========================================================== */}
                {activeTab === "blogs" && (
                  <div className="space-y-8 text-left">
                    <div>
                      <h2 className="text-xl font-bold uppercase font-heading text-[#D09C34]">Blogs Content Editor</h2>
                      <p className="text-xs text-slate-400 mt-1">Compose strategic guidance posts and review view counts.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                      <div className={`border rounded-2xl p-6 shadow-sm space-y-4 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#D09C34] flex items-center gap-2">
                          <FilePlus2 size={15} />
                          <span>Publish Article</span>
                        </h3>

                        <form className="space-y-4" onSubmit={handleAddBlog}>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Post Title</label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Navigating GST Input Credit audits..."
                              value={newBlogTitle}
                              onChange={(e) => setNewBlogTitle(e.target.value)}
                              className={`w-full text-xs rounded-xl py-2.5 px-3 focus:outline-none border ${
                                isDarkMode ? "bg-[#0A1D3D] border-slate-800 focus:border-[#D09C34]" : "bg-slate-50 border-slate-200 focus:border-[#0A1D3D]"
                              }`}
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Topic Category</label>
                            <select
                              value={newBlogCategory}
                              onChange={(e) => setNewBlogCategory(e.target.value)}
                              className={`w-full text-xs rounded-xl py-2.5 px-3 focus:outline-none border ${
                                isDarkMode ? "bg-[#0A1D3D] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-700"
                              }`}
                            >
                              <option value="Strategy">Strategy & Tips</option>
                              <option value="Direct Taxation">Direct Taxation</option>
                              <option value="GST">GST & Indirect Taxes</option>
                              <option value="Accounting">Accounting entries</option>
                            </select>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Article Body (Markdown)</label>
                            <textarea
                              required
                              rows={5}
                              placeholder="Write your advice content here..."
                              value={newBlogBody}
                              onChange={(e) => setNewBlogBody(e.target.value)}
                              className={`w-full text-xs rounded-xl py-2.5 px-3 focus:outline-none border ${
                                isDarkMode ? "bg-[#0A1D3D] border-slate-800 focus:border-[#D09C34]" : "bg-slate-50 border-slate-200 focus:border-[#0A1D3D]"
                              }`}
                            />
                          </div>

                          <button
                            type="submit"
                            className="w-full bg-[#D09C34] hover:bg-[#0A1D3D] hover:text-white text-[#0A1D3D] font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                          >
                            <Plus size={14} />
                            <span>Publish Article</span>
                          </button>
                        </form>
                      </div>

                      <div className={`border rounded-2xl p-6 shadow-sm lg:col-span-2 space-y-4 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#D09C34]">Active Article Feed</h3>
                        
                        <div className="space-y-3.5">
                          {blogs.map((b) => (
                            <div key={b.id} className={`p-4 rounded-xl border flex justify-between items-center ${
                              isDarkMode ? "border-slate-800 bg-white/2" : "border-slate-100 bg-slate-50"
                            }`}>
                              <div>
                                <span className="bg-[#D09C34]/10 text-[#D09C34] font-bold text-[8px] px-2 py-0.5 rounded-full uppercase tracking-wider">{b.category}</span>
                                <h4 className="font-bold text-sm mt-1.5">{b.title}</h4>
                                <p className="text-[10px] text-slate-400 mt-1">Written by {b.author} | {b.date}</p>
                              </div>

                              <div className="text-right">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block font-mono">{b.views} Views</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB: ANNOUNCEMENTS */}
                {/* ========================================================== */}
                {activeTab === "announcements" && (
                  <div className="space-y-8 text-left">
                    <div>
                      <h2 className="text-xl font-bold uppercase font-heading text-[#D09C34]">Announcement Broadcaster</h2>
                      <p className="text-xs text-slate-400 mt-1">Broadcast notifications to the dashboards of all students and faculty members.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                      <div className={`border rounded-2xl p-6 shadow-sm space-y-4 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#D09C34] flex items-center gap-2">
                          <Bell size={15} />
                          <span>Publish Notice</span>
                        </h3>

                        <form className="space-y-4" onSubmit={handleAddAnnouncement}>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Announcement Title</label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Portal Server Maintenance"
                              value={newAnnTitle}
                              onChange={(e) => setNewAnnTitle(e.target.value)}
                              className={`w-full text-xs rounded-xl py-2.5 px-3 focus:outline-none border ${
                                isDarkMode ? "bg-[#0A1D3D] border-slate-800 focus:border-[#D09C34]" : "bg-slate-50 border-slate-200 focus:border-[#0A1D3D]"
                              }`}
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Target Audience</label>
                            <select
                              value={newAnnAudience}
                              onChange={(e) => setNewAnnAudience(e.target.value)}
                              className={`w-full text-xs rounded-xl py-2.5 px-3 focus:outline-none border ${
                                isDarkMode ? "bg-[#0A1D3D] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-700"
                              }`}
                            >
                              <option value="All Students">All Registered Students</option>
                              <option value="All Faculty">All Faculty members</option>
                              <option value="Nov 2026 Batch">Nov 2026 Batch specifically</option>
                            </select>
                          </div>

                          <button
                            type="submit"
                            className="w-full bg-[#D09C34] hover:bg-[#0A1D3D] hover:text-white text-[#0A1D3D] font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                          >
                            <Plus size={14} />
                            <span>Broadcast Notice</span>
                          </button>
                        </form>
                      </div>

                      <div className={`border rounded-2xl p-6 shadow-sm lg:col-span-2 space-y-4 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#D09C34]">Broadcast Archives</h3>
                        
                        <div className="space-y-3.5">
                          {announcements.map((a) => (
                            <div key={a.id} className={`p-4 rounded-xl border flex justify-between items-center ${
                              isDarkMode ? "border-slate-800 bg-white/2" : "border-slate-100 bg-slate-50"
                            }`}>
                              <div>
                                <h4 className="font-bold text-sm">{a.title}</h4>
                                <p className="text-[10px] text-[#D09C34] font-bold uppercase tracking-wider mt-1">{a.audience}</p>
                              </div>
                              <span className="text-[9px] text-slate-400 font-mono font-bold uppercase tracking-wider">{a.date}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB: AI USAGE METRICS */}
                {/* ========================================================== */}
                {activeTab === "ai-usage" && (
                  <div className="space-y-8 text-left">
                    <div>
                      <h2 className="text-xl font-bold uppercase font-heading text-[#D09C34]">AI Computational Usage Analytics</h2>
                      <p className="text-xs text-slate-400 mt-1">Track LLM tokens, active assistant queries, and computational loads across portals.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className={`border rounded-2xl p-6 shadow-sm ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Tokens Allocated</span>
                        <h4 className="text-3xl font-black text-[#D09C34] mt-2">14.5M</h4>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase font-semibold">Allocated this billing cycle</p>
                      </div>

                      <div className={`border rounded-2xl p-6 shadow-sm ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Active Queries</span>
                        <h4 className="text-3xl font-black text-white mt-2">12,400</h4>
                        <p className="text-[10px] text-[#D09C34] mt-1 uppercase font-semibold">99.8% Success response rating</p>
                      </div>

                      <div className={`border rounded-2xl p-6 shadow-sm ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Most Engaged Tool</span>
                        <h4 className="text-3xl font-black text-white mt-2">AI Doubt Assistant</h4>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase font-semibold">45% of total LLM queries</p>
                      </div>
                    </div>

                    {/* AI Usage SVG Line Chart */}
                    <div className={`border rounded-2xl p-6 shadow-sm ${
                      isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                    }`}>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#D09C34] mb-6">AI API Query Loads (Daily Requests)</h3>
                      <div className="h-56 w-full relative pt-2">
                        <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="aiGlow" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                            </linearGradient>
                          </defs>

                          <line x1="0" y1="50" x2="600" y2="50" stroke={isDarkMode ? "#1e293b" : "#e2e8f0"} strokeWidth="1" strokeDasharray="5,5" />
                          <line x1="0" y1="100" x2="600" y2="100" stroke={isDarkMode ? "#1e293b" : "#e2e8f0"} strokeWidth="1" strokeDasharray="5,5" />
                          <line x1="0" y1="150" x2="600" y2="150" stroke={isDarkMode ? "#1e293b" : "#e2e8f0"} strokeWidth="1" strokeDasharray="5,5" />

                          <path
                            d="M 0 160 Q 75 140 150 90 T 300 120 T 450 50 T 600 25 L 600 200 L 0 200 Z"
                            fill="url(#aiGlow)"
                          />

                          <path
                            d="M 0 160 Q 75 140 150 90 T 300 120 T 450 50 T 600 25"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                          />

                          <circle cx="150" cy="90" r="5" fill="#38bdf8" stroke={isDarkMode ? "#0B1E36" : "#ffffff"} strokeWidth="2" />
                          <circle cx="300" cy="120" r="5" fill="#38bdf8" stroke={isDarkMode ? "#0B1E36" : "#ffffff"} strokeWidth="2" />
                          <circle cx="450" cy="50" r="5" fill="#38bdf8" stroke={isDarkMode ? "#0B1E36" : "#ffffff"} strokeWidth="2" />
                          <circle cx="600" cy="25" r="5" fill="#38bdf8" stroke={isDarkMode ? "#0B1E36" : "#ffffff"} strokeWidth="2" />
                        </svg>

                        <div className="absolute top-2 left-2 text-[9px] text-slate-500 font-bold uppercase bg-slate-800/10 px-2 py-0.5 rounded font-mono">600 Queries</div>
                        <div className="absolute top-24 left-2 text-[9px] text-slate-500 font-bold uppercase bg-slate-800/10 px-2 py-0.5 rounded font-mono">300 Queries</div>
                        <div className="absolute bottom-2 left-2 text-[9px] text-slate-500 font-bold uppercase bg-slate-800/10 px-2 py-0.5 rounded font-mono">0</div>

                        <div className="flex justify-between items-center text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-3 font-mono">
                          <span>June 23 (180 q)</span>
                          <span>June 24 (390 q)</span>
                          <span>June 25 (320 q)</span>
                          <span>June 26 (580 q)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================== */}
                {/* TAB: ANALYTICS CENTER */}
                {/* ========================================================== */}
                {activeTab === "analytics" && (
                  <div className="space-y-8 text-left">
                    <div>
                      <h2 className="text-xl font-bold uppercase font-heading text-[#D09C34]">Enterprise Analytics Center</h2>
                      <p className="text-xs text-slate-400 mt-1">Cross-subject score performance, test metrics, and pass-rate averages.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      
                      {/* Left: Quiz score averages bar chart */}
                      <div className={`border rounded-2xl p-6 shadow-sm space-y-4 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#D09C34]">Subject Exam Performance (Mock Avg Scores)</h3>
                        
                        <div className="space-y-4 pt-2">
                          <div className="space-y-1">
                            <div className="flex justify-between text-[11px] font-semibold">
                              <span>Principles & Practice of Accounting</span>
                              <span className="font-bold text-[#D09C34]">84% Mean</span>
                            </div>
                            <div className="h-3 w-full bg-slate-800/25 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#D09C34] to-[#f59e0b] rounded-full" style={{ width: "84%" }} />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between text-[11px] font-semibold">
                              <span>GST & Indirect Taxes</span>
                              <span className="font-bold text-[#D09C34]">79% Mean</span>
                            </div>
                            <div className="h-3 w-full bg-slate-800/25 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#D09C34] to-[#f59e0b] rounded-full" style={{ width: "79%" }} />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between text-[11px] font-semibold">
                              <span>Income Tax & Direct Credits</span>
                              <span className="font-bold text-[#D09C34]">72% Mean</span>
                            </div>
                            <div className="h-3 w-full bg-slate-800/25 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#D09C34] to-[#f59e0b] rounded-full" style={{ width: "72%" }} />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between text-[11px] font-semibold">
                              <span>Business Law & Contract Acts</span>
                              <span className="font-bold text-[#D09C34]">81% Mean</span>
                            </div>
                            <div className="h-3 w-full bg-slate-800/25 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#D09C34] to-[#f59e0b] rounded-full" style={{ width: "81%" }} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: Batch Passing index projections */}
                      <div className={`border rounded-2xl p-6 shadow-sm space-y-5 ${
                        isDarkMode ? "bg-[#0B1E36] border-slate-800" : "bg-white border-slate-100"
                      }`}>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#D09C34]">Batch Pass-Rate Projected Indexes</h3>
                        
                        <div className="flex items-center gap-6 py-4">
                          <div className="relative h-28 w-28 shrink-0">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                              <path
                                className="text-slate-800"
                                strokeWidth="3"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path
                                className="text-[#D09C34]"
                                strokeWidth="3"
                                strokeDasharray="92, 100"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                              <span className="text-2xl font-black leading-none font-mono">92%</span>
                              <span className="text-[7px] font-bold uppercase text-slate-400 mt-1">Passing index</span>
                            </div>
                          </div>

                          <div className="space-y-2 text-xs leading-relaxed text-slate-300">
                            <h4 className="font-bold text-sm text-[#D09C34] uppercase font-heading">CA Intermediate Nov 2026 Batch</h4>
                            <p>
                              Based on dynamic compilation algorithms of homework submissions, attendance ratios (92%), and mock quiz scoring rates, the AI projects a **92% passing margin** for Group 1.
                            </p>
                            <div className="text-[10px] text-slate-400 font-semibold uppercase mt-1">
                              Confidence margin: +/- 3.5% | Sample registry: 120 students
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

              </main>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
