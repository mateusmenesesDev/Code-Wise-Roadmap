import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";

import UserDashboard from "~/components/UserDashboard";
import AdminDashboard from "~/components/admin/AdminDashboard";

export default async function HomePage() {
  const { sessionClaims } = await auth();
  const role = sessionClaims?.metadata.role;

  if (role === "admin") {
    return (
      <main className="container mx-auto py-12">
        <Suspense>
          <AdminDashboard />
        </Suspense>
      </main>
    );
  }

  return <UserDashboard />;
}
