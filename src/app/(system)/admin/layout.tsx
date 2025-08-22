import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import '~/styles/globals.css';

export default async function AdminLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	const { sessionClaims } = await auth();
	const role = sessionClaims?.metadata.role;

	if (role !== 'admin') {
		redirect('/');
	}
	return <>{children}</>;
}
