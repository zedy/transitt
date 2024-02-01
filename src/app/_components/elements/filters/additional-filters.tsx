import { SettingOutlined } from "@ant-design/icons";
import { useCallback } from "react";
import Button from "../button";

export default function AdditionalFilters() {
  const handleOnClick = useCallback(() => {
    console.log("additional filters");
  }, []);

  return (
    <Button
      onClick={handleOnClick}
      className="z-30 h-12 w-12 rotate-0 rounded-full border-[1px] border-transparent bg-transparent hover:rotate-90"
    >
      <SettingOutlined />
    </Button>
  );
}
