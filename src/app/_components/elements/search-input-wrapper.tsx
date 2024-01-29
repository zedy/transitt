"use client";

import { useState } from "react";
import Input from "@/app/_components/elements/form-input";

export default function SearchInputWrapper({ name }: { name: string }) {
  const [value, setValue] = useState<string>("");

  return (
    <Input label={name} className="mb-0" value={value} setValue={setValue} />
  );
}
