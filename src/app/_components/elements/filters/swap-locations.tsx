"use client";

import { SwapOutlined } from "@ant-design/icons";
import { SearchContext } from "@/app/_context/search-context";
import { useContext } from "react";
import toast from "react-hot-toast";
import Button from "../button";

/**
 * Component that swaps the origin and destination
 *
 * @returns React.ReactNode
 */
export default function SwapLocations() {
  const { dispatch } = useContext(SearchContext);

  const handleOnClick = () => {
    toast.success("Swapped destination and origin");
    dispatch({
      type: "SWAP_LOCATIONS",
    });
  };

  return (
    <Button
      onClick={handleOnClick}
      className="absolute right-6 top-9 z-30 h-12 w-12 rotate-90 rounded-full border-[1px] border-transparent bg-gray-500 hover:border-gray-400 hover:bg-gray-700"
    >
      <SwapOutlined />
    </Button>
  );
}
