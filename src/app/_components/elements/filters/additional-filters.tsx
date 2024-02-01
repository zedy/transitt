import { SettingOutlined } from "@ant-design/icons";
import { useCallback, useState } from "react";
import Button from "../button";
import Modal from "../modal";
import SearchSettingsForm from "../forms/search-settings-form";

export default function AdditionalFilters() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <>
      <Button
        onClick={handleOnClick}
        className="z-30 h-12 w-12 rotate-0 rounded-full border-[1px] border-transparent bg-transparent hover:rotate-90"
      >
        <SettingOutlined />
      </Button>
      <Modal
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        title="Settings"
      >
        <SearchSettingsForm />
      </Modal>
    </>
  );
}
