import AdminLayout from "@/components/layout/AdminLayout";
import { redirect } from "next/navigation";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout user={undefined}>{children}</AdminLayout>;
}
