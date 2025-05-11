import "~/styles/globals.css";

export default async function SystemLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className="container mx-auto py-12">{children}</main>;
}
