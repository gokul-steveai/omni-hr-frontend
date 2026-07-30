"use client";

import { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useAuthStore } from "@/store/use-auth-store";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const { user, logout } = useAuthStore();

  return (
    <main className="min-h-screen bg-[#0A0D14] text-slate-100 flex flex-col font-sans relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Header user={user} onLogout={logout} />

      <div className="flex-1 max-w-7xl w-full mx-auto px-6 py-12 flex flex-col justify-center">
        {children}
      </div>

      <Footer />
    </main>
  );
}
