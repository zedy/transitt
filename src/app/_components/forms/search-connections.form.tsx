"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@/app/_components/elements/form-input";

export const schemaValidation = yup
  .object({
    from: yup.string().required().min(3),
    to: yup.string().required().min(3),
  })
  .required();

export default function SearchConnectionsForm() {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaValidation),
  });

  const onFormSubmit = (data: FormData) => {
    console.log(data);
  };

  // if (errors?.content?.message) {
  //   toast.error(errors.content.message);
  // }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex w-full flex-col"
    >
      <Input label="From" name="from" control={control} className="mb-3" />
      <Input label="To" name="to" control={control} />
    </form>
  );
}
