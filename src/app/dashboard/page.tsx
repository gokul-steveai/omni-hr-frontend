"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PageLayout } from "@/components/ui/PageLayout";
import { DashboardHero } from "@/features/dashboard/components/DashboardHero";
import { useAuthStore } from "@/store/use-auth-store";

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <PageLayout>
      <DashboardHero user={user} />
    </PageLayout>
  );
}
