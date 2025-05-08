"use client";

import { Button } from "~/components/ui/button";
import { SEO } from "~/constants";
import { useAuth } from "~/hooks/useAuth";

export default function Header() {
	const { currentUser, logout } = useAuth();

	return (
		<header className="border-b bg-card px-6 py-4">
			<div className="container mx-auto flex items-center justify-between">
				<div className="flex items-center gap-2">
					<h1 className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-2xl text-transparent">
						{SEO.appTitle}
					</h1>
				</div>

				<div className="flex items-center gap-4">
					{currentUser && (
						<Button variant="outline" onClick={logout}>
							Logout
						</Button>
					)}
				</div>
			</div>
		</header>
	);
}
