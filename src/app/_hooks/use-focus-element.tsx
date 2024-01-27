import { useState } from "react";

export default function useFocusElement() {
  const [focus, setFocus] = useState<boolean>(false);

  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);

  return {
    focus,
    onFocus,
    onBlur,
  };
}
