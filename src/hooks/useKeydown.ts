import { MutableRefObject, useCallback, useEffect } from "react";

export interface KeydownProps {
  ref: MutableRefObject<string | any>;
  isShiftKey: boolean;
  key1: string;
  key2: string;
}

export interface KeydownEventProps {
  shiftKey: boolean;
  key: string;
}

export const useKeydown = <T extends KeydownProps>({ ref, isShiftKey, key1, key2 }: T) => {
  const handleKeydown = useCallback(
    <T extends KeydownEventProps>(event: T) => {
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
