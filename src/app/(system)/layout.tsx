import '~/styles/globals.css';

export default function SystemLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return <main className="container mx-auto py-4">{children}</main>;
}
