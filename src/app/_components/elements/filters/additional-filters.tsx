import { SettingOutlined } from "@ant-design/icons";
import { useCallback, useState, useContext } from "react";
import { SearchContext } from "@/app/_context/search-context";
import Button from "../button";
import Modal from "../modal";
import SearchSettingsForm from "../forms/search-settings-form";
import FlexWrapper from "../flex-wrapper";

const FORM_FIELDS = [
  {
    name: "bike",
    label: "Bike",
    description: "Show only trains allowing the transport of bicycles",
  },
  {
    name: "sleeper",
    label: "Sleeper",
    description: "Show only trains with sleeper cars",
  },
];

export default function AdditionalFilters() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [appliedSettings, setAppliedSettings] = useState<boolean>(false);
  const {
    state: { search },
    dispatch,
  } = useContext(SearchContext);
  const formValues = {
    bike: search.bike,
    sleeper: search.sleeper,
  };

  const formApplyCallback = useCallback((values: Record<string, number>) => {
    dispatch({ type: "SET_ADDITIONAL_SETTINGS", payload: values });
    setAppliedSettings(true);
  }, []);

  const formResetCallback = useCallback(() => {
    dispatch({ type: "RESET_ADDITIONAL_SETTINGS" });
    setAppliedSettings(false);
  }, []);

  const handleOnClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <FlexWrapper classes="w-auto relative">
        {appliedSettings && (
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        )}
        <Button
          onClick={handleOnClick}
          className="z-30 h-12 w-12 rotate-0 rounded-full border-[1px] border-transparent bg-transparent hover:rotate-90"
        >
          <SettingOutlined style={{ fontSize: "22px" }} />
        </Button>
      </FlexWrapper>
      <Modal onClose={handleCloseModal} isOpen={isModalOpen} title="Settings">
        <SearchSettingsForm
          formDefaultValues={formValues}
          formFields={FORM_FIELDS}
          onApply={formApplyCallback}
          onReset={formResetCallback}
        />
      </Modal>
    </>
  );
}
