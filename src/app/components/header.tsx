"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-center bg-gray-800 p-4 text-white">
      <div className="flex w-full items-center justify-between md:max-w-3xl">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="mr-2 h-8 w-8"
          />
          <span className="text-lg font-bold">Transitt</span>
        </div>
        <div>test</div>
      </div>
    </header>
  );
}
