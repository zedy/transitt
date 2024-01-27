export default function RoundedBox({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="rounded-2xl bg-gray-700 shadow">{children}</div>;
}
