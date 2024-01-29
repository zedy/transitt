export default function LocationResultItem({ name }: { name: string }) {
  return (
    <li className="cursor-pointer bg-gray-700 px-4 py-4 text-sm text-white hover:bg-slate-900">
      {name}
    </li>
  );
}
