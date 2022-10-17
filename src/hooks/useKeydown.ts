import { MutableRefObject, useCallback, useEffect } from "react";
import { KeydownEvent } from "src/interfaces";

export const useKeydown = <T extends MutableRefObject<string | any>>(
  ref: T,
  isShiftKey: boolean,
  key1: string,
  key2: string
) => {
  const handleKeydown = useCallback(
    <T extends KeydownEvent>(event: T) => {
      if (event.shiftKey === isShiftKey && event.key === key1) {
        ref.current?.focus();
      }

      if (event.key === key2) {
        ref.current?.blur();
      }
    },
    [ref, isShiftKey, key1, key2]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown, true);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);
};
