"use client";

import React from "react";

function AriaFlex({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <div
      onKeyDown={(event) => {
        if (event.keyCode === 13) {
          onClick();
        }
      }}
      onClick={onClick}
      tabIndex={0}
      role="button"
    >
      {children}
    </div>
  );
}

export default React.memo(AriaFlex);
