"use client";

/* eslint-disable react/jsx-props-no-spreading */
import { useCallback, useContext } from "react";
import classParser from "@/app/_lib/class-parser";
import {
  type Control,
  useController,
  type UseControllerProps,
  type UseFormSetValue,
} from "react-hook-form";
import useFocusElement from "@/app/_hooks/use-focus-element";
import { type FormData } from "@/app/_components/forms/search-connections.form";
import { CloseOutlined } from "@ant-design/icons";
import { SearchContext } from "@/app/_context/search-context";
import Button from "./button";

interface InputProperties<T> extends UseControllerProps<FormData, string> {
  label: string;
  className?: string;
  setValue: UseFormSetValue<FormData>;
  control: Control<FormData, T>;
}

const DEFAULT_CLASS = "relative";

export default function Input<T>({
  name,
  label,
  control,
  setValue,
  ...properties
}: InputProperties<T>) {
  const { focus, onFocus, onBlur } = useFocusElement();
  const { setShowLocations } = useContext(SearchContext);

  const {
    field: { ref, onChange, value, ...inputProperties },
    fieldState: { invalid, isTouched, isDirty },
  } = useController({
    name,
    control,
    rules: { required: true },
  });
  const { className } = properties;
  const classes = classParser(DEFAULT_CLASS, className);

  const handleOnChange = (event: React.BaseSyntheticEvent) => {
    onChange(event);
  };

  const handleOnBlur = useCallback(() => {
    if (!value) onBlur();

    setShowLocations(false);
  }, [value]);

  const handleReset = useCallback(() => {
    setValue(name, "");
  }, []);

  const handleOnFocus = useCallback(() => {
    onFocus();
    setShowLocations(true);
  }, []);

  return (
    <div className={classes} onFocus={handleOnFocus} onBlur={handleOnBlur}>
      <input
        {...inputProperties}
        {...properties}
        onChange={handleOnChange}
        ref={ref}
        type="input"
        className="relative z-10 block w-full appearance-none rounded-t-lg border-0 border-b-[1px] border-b-slate-400 bg-transparent p-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:text-white dark:focus:border-blue-500"
      />
      <label
        htmlFor={name}
        className={`z-1 absolute start-5 top-3 origin-[0] transform py-2 text-sm text-gray-500 duration-300 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500 ${focus ? "-translate-y-4 scale-75" : ""}`}
      >
        {label}
      </label>
      <Button
        icon={<CloseOutlined style={{ color: "white" }} />}
        handleClick={handleReset}
        className="absolute right-5 top-5 z-30 rounded-full"
      />
    </div>
  );
}
