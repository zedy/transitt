export default function RoundedBox({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative rounded-2xl bg-gray-700 shadow-lg">{children}</div>
  );
}
