"use client";

import { CheckCircle2, Calendar, Clock, DollarSign, Building2, UserPlus, Users, ShieldCheck } from "lucide-react";
import { UserProfile } from "@/types/user";
import { MetricCard } from "./MetricCard";

interface DashboardHeroProps {
  user: UserProfile;
}

export function DashboardHero({ user }: DashboardHeroProps) {
  const isAdminOrHR = user.role === "super_admin" || user.role === "hr_manager";
  const isLead = user.role === "department_lead";

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-slate-900/90 via-indigo-950/40 to-slate-900/90 border border-indigo-500/20 rounded-3xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Authenticated & Active Session ({user.role.replace("_", " ").toUpperCase()})
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              Welcome back, {user.first_name}!
            </h2>
            <p className="text-slate-400 text-sm">
              {user.email} • Department: <span className="text-indigo-400 font-medium">{user.department?.name || "General HQ"}</span>
            </p>
          </div>

          <div className="flex gap-3">
            {isAdminOrHR ? (
              <button
                onClick={() => alert("Admin Provisioning: Use POST /api/v1/users to provision employee accounts!")}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all"
              >
                <UserPlus className="w-4 h-4" />
                Provision Employee
              </button>
            ) : isLead ? (
              <button
                onClick={() => alert("Team Review Mode: Review team leave requests and timesheets.")}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold shadow-lg shadow-purple-600/30 flex items-center gap-2 transition-all"
              >
                <Users className="w-4 h-4" />
                Review Team Logs
              </button>
            ) : (
              <button
                onClick={() => alert("Leave Application Engine ready for Module 2!")}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all"
              >
                <Calendar className="w-4 h-4" />
                Apply for Leave
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Role-Based Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800/80">
          {isAdminOrHR ? (
            <>
              <MetricCard
                title="Active Employees"
                value="248"
                subtitle="Organization Total"
                icon={Users}
                iconColor="text-indigo-400"
              />
              <MetricCard
                title="Pending Approvals"
                value="5 Requests"
                subtitle="HR Sign-off required"
                subtitleColor="text-amber-400"
                icon={ShieldCheck}
                iconColor="text-amber-400"
              />
              <MetricCard
                title="Payroll Status"
                value="Jul 2026"
                subtitle="Ready for Execution"
                subtitleColor="text-emerald-400"
                icon={DollarSign}
                iconColor="text-emerald-400"
              />
              <MetricCard
                title="System Health"
                value="99.9%"
                subtitle="All services active"
                icon={Building2}
                iconColor="text-purple-400"
              />
            </>
          ) : (
            <>
              <MetricCard
                title="Leave Accruals"
                value="14.5 Days"
                subtitle="Casual & Sick balance"
                icon={Calendar}
                iconColor="text-indigo-400"
              />
              <MetricCard
                title="Timesheet Logs"
                value="40.0 Hrs"
                subtitle="Logged this week"
                icon={Clock}
                iconColor="text-purple-400"
              />
              <MetricCard
                title="Payroll Status"
                value="Jul 2026"
                subtitle="Payslip Generated"
                subtitleColor="text-emerald-400"
                icon={DollarSign}
                iconColor="text-pink-400"
              />
              <MetricCard
                title="Department"
                value={user.department?.name || "Engineering"}
                subtitle="Scranton HQ"
                icon={Building2}
                iconColor="text-amber-400"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
