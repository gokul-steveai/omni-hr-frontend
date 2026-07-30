import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  variant?: "error" | "success" | "info";
  className?: string;
}

const variantStyles: Record<string, { container: string; icon: any }> = {
  error: { container: "bg-rose-500/10 border-rose-500/20 text-rose-400", icon: AlertCircle },
  success: { container: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400", icon: CheckCircle2 },
  info: { container: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400", icon: Info },
};

export function Alert({ children, variant = "error", className = "" }: AlertProps) {
  const { container, icon: Icon } = variantStyles[variant];

  return (
    <div className={`p-4 rounded-xl border text-sm flex items-start gap-3 ${container} ${className}`}>
      <Icon className="w-5 h-5 shrink-0 mt-0.5" />
      <div>{children}</div>
    </div>
  );
}
