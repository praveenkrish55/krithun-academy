"use client";

import { useEffect, useState } from "react";
import { WifiOff } from "lucide-react";

export function PwaProvider({ children }: { children: React.ReactNode }) {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    // Register Service Worker
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          // Service worker registered
        })
        .catch((err) => {
          // SW registration failed
        });
    }

    // Monitor Network status
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Initial check
    if (typeof navigator !== "undefined") {
      setIsOffline(!navigator.onLine);
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      {isOffline && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-amber-500 text-[#0A1D3D] py-2 px-4 text-center font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-2 shadow-md">
          <WifiOff size={13} className="animate-pulse" />
          <span>Offline learning mode active. Offline modules are fully operational.</span>
        </div>
      )}
      {children}
    </>
  );
}
