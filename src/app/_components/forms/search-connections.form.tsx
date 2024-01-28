"use client";

import { type FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@/app/_components/elements/form-input";

export interface FormData extends FieldValues {
  from: string;
  to: string;
}

export const schemaValidation = yup
  .object({
    from: yup.string().required().min(3),
    to: yup.string().required().min(3),
  })
  .required();

export default function SearchConnectionsForm() {
  const { control, setValue, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schemaValidation),
  });

  const onFormSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="relative z-10 flex w-full flex-col overflow-hidden"
      // style={{ boxShadow: "0 12px 14px -2px rgba(0, 0, 0, 0.15)" }}
    >
      <Input
        label="From"
        name="from"
        control={control}
        className="mb-0"
        setValue={setValue}
      />
      <Input
        label="To"
        name="to"
        control={control}
        className="mb-0"
        setValue={setValue}
      />
    </form>
  );
}
