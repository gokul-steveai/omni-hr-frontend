"use client";

import { UserRole } from "@/types/user";
import { Card } from "@/components/ui/Card";
import { Alert } from "@/components/ui/Alert";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

interface AuthCardProps {
  authMode: "login" | "register";
  setAuthMode: (mode: "login" | "register") => void;
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  firstName: string;
  setFirstName: (val: string) => void;
  lastName: string;
  setLastName: (val: string) => void;
  role: UserRole;
  setRole: (role: UserRole) => void;
  isLoading: boolean;
  errorMsg: string | null;
  successMsg: string | null;
  onSubmit: (e: React.FormEvent) => void;
}

export function AuthCard({
  authMode,
  setAuthMode,
  email,
  setEmail,
  password,
  setPassword,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  role,
  setRole,
  isLoading,
  errorMsg,
  successMsg,
  onSubmit,
}: AuthCardProps) {
  return (
    <Card>
      {/* Auth Mode Tabs */}
      <div className="flex border-b border-slate-800 pb-4 mb-6">
        <button
          type="button"
          onClick={() => setAuthMode("login")}
          className={`flex-1 py-2 text-sm font-semibold border-b-2 text-center transition-all ${
            authMode === "login"
              ? "border-indigo-500 text-white"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={() => setAuthMode("register")}
          className={`flex-1 py-2 text-sm font-semibold border-b-2 text-center transition-all ${
            authMode === "register"
              ? "border-indigo-500 text-white"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          Create Account
        </button>
      </div>

      {errorMsg && (
        <Alert variant="error" className="mb-6">
          {errorMsg}
        </Alert>
      )}

      {successMsg && (
        <Alert variant="success" className="mb-6">
          {successMsg}
        </Alert>
      )}

      {authMode === "login" ? (
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLoading={isLoading}
          onSubmit={onSubmit}
        />
      ) : (
        <RegisterForm
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          role={role}
          setRole={setRole}
          isLoading={isLoading}
          onSubmit={onSubmit}
        />
      )}
    </Card>
  );
}
