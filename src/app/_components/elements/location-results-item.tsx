import React from "react";

function LocationResultItem({
  name,
  dispatch,
}: {
  name: string;
  dispatch?: (argument1: string) => void;
}) {
  const handleClick = () => {
    dispatch?.(name);
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.keyCode === 13) {
      dispatch?.(name);
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onKeyDown={handleOnKeyDown}
      onClick={handleClick}
      onMouseDown={handleClick}
      className="cursor-pointer bg-gray-700 px-4 py-4 text-sm text-white hover:bg-slate-900"
    >
      {name}
    </div>
  );
}

export default React.memo(LocationResultItem);
