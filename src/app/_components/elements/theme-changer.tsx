"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "@/app/_context/theme-context";
import FlexWrapper from "./flex-wrapper";
import Button from "./button";

function ThemeChanger() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <FlexWrapper classes="!w-6">
      {theme === "dark" ? (
        <Button onClick={() => setTheme("light")}>
          <Image
            src="/moon.svg"
            alt="theme change icon"
            width={24}
            height={24}
            className="mr-2 h-6 w-6"
          />
        </Button>
      ) : (
        <Button onClick={() => setTheme("dark")}>
          <Image
            src="/sun.svg"
            alt="theme change icon"
            width={24}
            height={24}
            className="mr-2 h-6 w-6"
          />
        </Button>
      )}
    </FlexWrapper>
  );
}

export default React.memo(ThemeChanger);
