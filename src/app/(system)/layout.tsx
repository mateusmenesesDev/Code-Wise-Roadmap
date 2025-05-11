import { auth } from "@clerk/nextjs/server";
import AdminDashboard from "~/components/admin/AdminDashboard";
import "~/styles/globals.css";

export default async function SystemLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { sessionClaims } = await auth();
  const role = sessionClaims?.metadata.role;

  if (role === "admin") {
    return (
      <main className="container mx-auto py-12">
        <AdminDashboard />
      </main>
    );
  }

  return <main className="container mx-auto py-12">{children}</main>;
}
