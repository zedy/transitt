import React from "react";

type Properties = {
  name: string;
  dispatch?: (argument1: string) => void;
};

/**
 * This component is used to render location results from
 * the /api/locations endpoint.
 *
 * It's a child component of LocationResults component, and
 * represents a single location result.
 *
 * @param name string
 * @param dispatch function
 * @returns React.ReactNode
 */
function LocationResultItem({ name, dispatch }: Properties) {
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
