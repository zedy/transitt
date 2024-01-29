import { useRef } from "react";

type PayloadType = string;

async function useDebounceCallback<P extends PayloadType>(
  function_: (payload: P) => void,
  delay: number,
) {
  const timeoutReference = useRef<NodeJS.Timeout | null>(null);

  return async (...arguments_: [P]) => {
    if (timeoutReference.current) {
      clearTimeout(timeoutReference.current);
    }
    timeoutReference.current = setTimeout(() => {
      function_(...arguments_);
    }, delay);
  };
}

export default useDebounceCallback;
