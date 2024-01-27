export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-w-screen flex min-h-screen flex-col items-center justify-center">
      {children}
    </main>
  );
}
