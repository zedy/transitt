/* eslint-disable react/jsx-props-no-spreading */
import classParser from "@/app/_lib/class-parser";
import {
  type Control,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import useFocusElement from "@/app/_hooks/use-focus-element";
import { useEffect, useState } from "react";
import { type FormData } from "@/app/_components/forms/search-connections.form";

interface InputProperties<T> extends UseControllerProps<FormData, string> {
  label: string;
  className: string;
  control: Control<FormData, T>;
}

const DEFAULT_CLASS = "relative";

export default function Input<T>({
  name,
  label,
  control,
  defaultValue,
  ...properties
}: InputProperties<T>) {
  const { focus, onFocus, onBlur, onHasValue } = useFocusElement();
  const [value, setValue] = useState<string>("");
  const {
    field: { ref, onChange, ...inputProperties },
    fieldState: { invalid, isTouched, isDirty },
  } = useController({
    name,
    control,
    rules: { required: true },
  });
  const { className } = properties;
  const classes = classParser(DEFAULT_CLASS, className);

  useEffect(() => {
    setValue((state) => {
      if (defaultValue) {
        onHasValue();
        return defaultValue;
      }

      return state;
    });
  }, []);

  const handleOnChange = (event: React.BaseSyntheticEvent) => {
    onChange(event);
    setValue(event.target.value);
  };

  const handleOnBlur = () => {
    if (!value) onBlur();
  };

  return (
    <div className={classes} onFocus={onFocus} onBlur={handleOnBlur}>
      <input
        {...inputProperties}
        {...properties}
        onChange={handleOnChange}
        ref={ref}
        value={value}
        type="input"
        className="relative z-10 block w-full appearance-none rounded-t-lg border-0 border-b-2 border-b-slate-400 bg-transparent px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:text-white dark:focus:border-blue-500"
      />
      <label
        htmlFor={name}
        className={`z-1 absolute start-2.5 top-4 origin-[0] transform text-sm text-gray-500 duration-300 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500 ${focus ? "-translate-y-4 scale-75" : ""}`}
      >
        {label}
      </label>
    </div>
  );
}
