"use client";

import { type FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@/app/_components/elements/form-input";
import { CloseOutlined } from "@ant-design/icons";
import Button from "../elements/button";

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
  const { control, reset, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schemaValidation),
  });

  const onFormSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleReset = () => {
    // additional logic here
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="relative flex w-full flex-col"
    >
      <Input
        label="From"
        name="from"
        control={control}
        className="mb-3"
        defaultValue="123"
      />
      <Input label="To" name="to" control={control} className="mb-1" />
      <Button
        icon={<CloseOutlined style={{ color: "black" }} />}
        handleClick={handleReset}
        className="absolute right-8 top-8 z-30 h-9 w-9 rounded-full bg-slate-400 shadow-lg drop-shadow-md"
      />
    </form>
  );
}
