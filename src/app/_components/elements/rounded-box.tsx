/**
 * Basic presentational wrapper component that
 * wraps the children in a rounded box.
 *
 * @TODO add the ability to pass in classes so that it's more flexible
 * @param children React.ReactNode
 * @returns React.ReactNode
 */
export default function RoundedBox({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative rounded-2xl bg-gray-700 shadow-lg">{children}</div>
  );
}
