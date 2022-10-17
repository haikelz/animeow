import { MutableRefObject, useEffect } from "react";
import { KeydownEvent } from "src/interfaces";

// ref, isShiftKey, key1, key2
export const useKeydown = <T extends MutableRefObject<string | any>>(
  ref: T,
  isShiftKey: boolean,
  key1: string,
  key2: string
) => {
  const handleKeydown = <T extends KeydownEvent>(event: KeydownEvent) => {
    if (event.shiftKey === isShiftKey && event.key === key1) {
      ref.current?.focus();
    }

    if (event.key === key2) {
      ref.current?.blur();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);
};
