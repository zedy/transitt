"use client";

/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useContext } from "react";
import classParser from "@/app/_lib/class-parser";
import { CloseOutlined } from "@ant-design/icons";
import { SearchContext } from "@/app/_context/search-context";
import Button from "./button";

interface InputProperties {
  label: string;
  className?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange?: (event: React.BaseSyntheticEvent) => void;
  onBlur?: (event: React.BaseSyntheticEvent) => void;
  onFocus?: (argument1: string) => void;
}

const DEFAULT_CLASS = "relative z-1";

function Input({
  label,
  value,
  setValue,
  onFocus,
  ...properties
}: InputProperties) {
  // const { dispatch } = useContext(SearchContext);
  const { className } = properties;
  const classes = classParser(DEFAULT_CLASS, className);

  const handleReset = useCallback((event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    setValue("");
  }, []);

  return (
    <div className={classes}>
      <input
        {...properties}
        onFocus={() => onFocus && onFocus(label)}
        value={value}
        placeholder={label}
        type="input"
        autoComplete="off"
        className="peer relative z-10 block w-full appearance-none rounded-t-lg border-0 border-b-[1px] border-b-slate-400 bg-transparent p-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:text-white dark:focus:border-blue-500"
      />
      <Button
        icon={<CloseOutlined style={{ color: "white" }} />}
        onMouseDown={handleReset}
        className="absolute right-5 top-4 z-30 hidden rounded-full peer-focus:block"
      />
    </div>
  );
}

export default React.memo(Input);
