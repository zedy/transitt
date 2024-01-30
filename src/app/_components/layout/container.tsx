export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center px-5 md:max-w-3xl md:px-1">
      {children}
    </div>
  );
}
