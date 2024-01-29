"use client";

/* eslint-disable react/jsx-props-no-spreading */
import type React from "react";
import { useCallback, useContext } from "react";
import classParser from "@/app/_lib/class-parser";
import { CloseOutlined } from "@ant-design/icons";
import { SearchContext } from "@/app/_context/search-context";
import useDebounce from "@/app/_hooks/use-debounce";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import getLocation from "@/app/_services/get-location";
import Button from "./button";

interface InputProperties {
  label: string;
  className?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const DEFAULT_CLASS = "relative z-1";

export default function Input({
  label,
  value,
  setValue,
  ...properties
}: InputProperties) {
  const { setShowLocations, setSearchValue } = useContext(SearchContext);
  const { className } = properties;
  const classes = classParser(DEFAULT_CLASS, className);

  const handleOnChange = async (event: React.BaseSyntheticEvent) => {
    setValue(event.target.value);
    setSearchValue(event.target.value);
  };

  const handleOnBlur = useCallback((event: React.BaseSyntheticEvent) => {
    event.preventDefault();

    setShowLocations("");
  }, []);

  const handleReset = useCallback((event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    setValue("");
  }, []);

  return (
    <div className={classes}>
      <input
        {...properties}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={() => setShowLocations(label)}
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
