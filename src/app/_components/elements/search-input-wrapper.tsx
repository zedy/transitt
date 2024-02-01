"use client";

import { useCallback, useContext, useState } from "react";
import Input from "@/app/_components/elements/search-input";
import { SearchContext } from "@/app/_context/search-context";

export default function SearchInputWrapper({ name }: { name: string }) {
  const [value, setValue] = useState<string>("");
  const { dispatch } = useContext(SearchContext);

  const handleOnChange = async (event: React.BaseSyntheticEvent) => {
    setValue(event.target.value);
    dispatch({
      type: "SEARCH_VALUE",
      payload: {
        searchValue: event.target.value,
      },
    });
  };

  const handleOnFocus = useCallback((searchValue: string) => {
    dispatch({
      type: "SHOW_LOCATIONS",
      payload: {
        showLocations: searchValue,
        callback: setValue,
      },
    });
  }, []);

  const handleOnBlur = useCallback((event: React.BaseSyntheticEvent) => {
    event.preventDefault();

    // fallback for js event priority resolution (blur/mousedown)
    setTimeout(() => {
      handleOnFocus("");
    }, 0);
  }, []);

  return (
    <Input
      label={name}
      className="mb-0"
      value={value}
      setValue={setValue}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
    />
  );
}
