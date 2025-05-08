import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import '~/styles/globals.css';

export default async function AuthLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	const user = await auth();

	if (user.userId) {
		return redirect('/');
	}

	return <main>{children}</main>;
}
