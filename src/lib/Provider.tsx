"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Toaster } from 'sonner';

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Toaster />
      {children}
    </div>
  );
}
