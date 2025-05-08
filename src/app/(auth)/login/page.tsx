'use client';

import { Button } from '~/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '~/components/ui/card';
import { useAuth } from '~/hooks/useAuth';

export default function LoginPage() {
	const { signInWithGoogle, signInWithGithub } = useAuth();
	return (
		<div className="flex min-h-screen items-center justify-center bg-background p-4">
			<Card className="w-full max-w-md">
				<CardHeader className="space-y-1">
					<CardTitle className="text-center font-bold text-2xl">
						<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
							DevPath Mapper
						</span>
					</CardTitle>
					<CardDescription className="text-center">
						Sign in to manage your developer roadmap
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-2">
					<Button variant="secondary" onClick={signInWithGoogle}>
						Sign in with Google
					</Button>
					<Button variant="outline" onClick={signInWithGithub}>
						Sign in with Github
					</Button>
				</CardContent>
				<div id="clerk-captcha" />
			</Card>
		</div>
	);
}
