"use client";

import { Card } from "@/components/ui/Card";
import { Alert } from "@/components/ui/Alert";
import { LoginForm } from "./LoginForm";

interface AuthCardProps {
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  isLoading: boolean;
  errorMsg: string | null;
  onSubmit: (e: React.FormEvent) => void;
}

export function AuthCard({
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  errorMsg,
  onSubmit,
}: AuthCardProps) {
  return (
    <Card>
      <div className="border-b border-slate-800 pb-4 mb-6 text-center">
        <h2 className="text-xl font-bold text-white">Sign In to Workspace</h2>
        <p className="text-xs text-slate-400 mt-1">Employee accounts are provisioned exclusively by HR & System Admins.</p>
      </div>

      {errorMsg && (
        <Alert variant="error" className="mb-6">
          {errorMsg}
        </Alert>
      )}

      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        isLoading={isLoading}
        onSubmit={onSubmit}
      />
    </Card>
  );
}
