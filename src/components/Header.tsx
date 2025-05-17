"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { SEO } from "~/constants";
import { useAuth } from "~/hooks/useAuth";

export default function Header() {
  const { user, isAdmin } = useAuth();
  const router = useRouter();

  return (
    <header className="border-b bg-card px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <h1 className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-2xl text-transparent">
              {SEO.appTitle}
            </h1>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              {isAdmin && (
                <Link href="/admin">
                  <Button variant="outline">Admin</Button>
                </Link>
              )}
              <UserButton />
            </>
          ) : (
            <Button variant="outline" onClick={() => router.push("/login")}>
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
