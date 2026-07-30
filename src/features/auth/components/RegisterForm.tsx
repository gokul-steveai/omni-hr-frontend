"use client";

import { Mail, Lock, UserPlus, ShieldAlert } from "lucide-react";
import { UserRole } from "@/types/user";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface RegisterFormProps {
  firstName: string;
  setFirstName: (val: string) => void;
  lastName: string;
  setLastName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  role: UserRole;
  setRole: (role: UserRole) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export function RegisterForm({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  onSubmit,
}: RegisterFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <Input
          label="First Name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Jim"
          required
        />
        <Input
          label="Last Name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Halpert"
          required
        />
      </div>

      <Input
        label="Corporate Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={Mail}
        placeholder="you@company.com"
        required
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={Lock}
        placeholder="••••••••••••"
        required
      />

      <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2.5">
        <ShieldAlert className="w-4 h-4 text-indigo-400 shrink-0" />
        <span>Self-registration grants <strong>Employee</strong> access. HR Manager & Lead roles are provisioned by Admins.</span>
      </div>

      <Button type="submit" variant="gradient" isLoading={isLoading} className="w-full mt-2">
        Create Account
        <UserPlus className="w-4 h-4" />
      </Button>
    </form>
  );
}
