import { useState } from "react";

export default function useFocusElement() {
  const [focus, setFocus] = useState<boolean>(false);

  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);
  const onHasValue = () => setFocus(true);
  const onHasNoValue = () => setFocus(false);

  return {
    focus,
    onFocus,
    onBlur,
    onHasValue,
    onHasNoValue,
  };
}
