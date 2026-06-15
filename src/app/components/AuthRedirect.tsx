"use client";

import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { usePathname, useRouter } from "next/navigation";

export default function AuthRedirect({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (loading) return;

    const isLoginPage = pathname.startsWith("/login");
    const isHomePage = pathname.startsWith("/home");
    if (user && isLoginPage) {
      router.replace("/home");
    }
    if (!user && isHomePage) {
      router.replace("/login");
    }
  }, [user, loading, pathname, router]);

  return <>{children}</>;
}
