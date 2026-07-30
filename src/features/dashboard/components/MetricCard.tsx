import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  subtitleColor?: string;
  icon: LucideIcon;
  iconColor: string;
}

export function MetricCard({
  title,
  value,
  subtitle,
  subtitleColor = "text-slate-500",
  icon: Icon,
  iconColor,
}: MetricCardProps) {
  return (
    <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
      <div className={`flex items-center gap-3 mb-2 ${iconColor}`}>
        <Icon className="w-5 h-5" />
        <span className="text-sm font-semibold">{title}</span>
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className={`text-xs mt-1 ${subtitleColor}`}>{subtitle}</div>
    </div>
  );
}
