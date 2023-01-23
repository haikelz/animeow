import { useCallback, useEffect } from "react";
import { Keydown, KeydownEvent } from "@/interfaces";

export const useKeydown = <T extends Keydown>({ ref, isShiftKey, key1, key2 }: T) => {
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

  return {
    ref: ref,
    isShiftKey: isShiftKey,
    key1: key1,
    key2: key2,
  };
};
