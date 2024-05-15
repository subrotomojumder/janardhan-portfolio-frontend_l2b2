'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      {children}
    </div>
  )
}