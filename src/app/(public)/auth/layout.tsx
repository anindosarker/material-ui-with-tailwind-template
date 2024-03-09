import AuthLayout from "@/components/layout/AuthLayout";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
