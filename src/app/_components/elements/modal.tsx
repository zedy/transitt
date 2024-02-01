import type React from "react";
import { createPortal } from "react-dom";
import { PlusOutlined } from "@ant-design/icons";

import FlexWrapper from "./flex-wrapper";
import Button from "./button";
import Typography, { TypographyType } from "../typography/typography-element";

type ModalProperties = {
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  isOpen: boolean;
};

function Modal({ onClose, children, title, isOpen }: ModalProperties) {
  if (!isOpen) return <div />;

  const handleCloseClick = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    onClose();
  };

  const modalContent = (
    <FlexWrapper
      justifyContent="center"
      alignItems="center"
      classes="modal-outline absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-40 z-50"
    >
      <div className="relative min-h-56 min-w-96">
        <FlexWrapper
          flexDirection="col"
          classes="modal h-full w-full rounded-xl bg-gray-500"
        >
          <FlexWrapper classes="modal-header w-full border-b-[1px] border-gray-200 p-6">
            {title && (
              <Typography
                component={TypographyType.H2}
                classes="text-lg font-bold"
              >
                {title}
              </Typography>
            )}
            <Button
              onClick={handleCloseClick}
              className="absolute right-8 top-8 rotate-45 bg-transparent hover:animate-pulse"
            >
              <PlusOutlined />
            </Button>
          </FlexWrapper>
          <FlexWrapper classes="body p-6 mt-4">{children}</FlexWrapper>
        </FlexWrapper>
      </div>
    </FlexWrapper>
  );

  return createPortal(
    modalContent,
    document.querySelector("#modal-root") as Element,
  );
}

export default Modal;
