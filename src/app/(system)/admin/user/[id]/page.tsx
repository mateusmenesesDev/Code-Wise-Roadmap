import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import UserDashboard from "~/components/UserDashboard";
import { Button } from "~/components/ui/button";
import { getUserById } from "~/server/auth/authServerRequests";

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUserById(id);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <Link href="/admin">
          <Button variant="outline" className="h-10 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </Link>
        <h1 className="font-bold text-2xl">
          User: {user.firstName} {user.lastName}
        </h1>
        <p className="text-muted-foreground">{user.email}</p>
      </div>
      <UserDashboard userId={id} />
    </>
  );
}
