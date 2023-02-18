import { scrollAtom } from "~store";
import { SetStateAction, useAtom } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { useCallback, useEffect } from "react";

type Scroll = [number, (update: SetStateAction<number>) => void];

export const useScroll = () => {
  const [scroll, setScroll]: Scroll = useAtom(scrollAtom);

  const handleScroll = useAtomCallback(
    useCallback(() => {
      const position = window.pageYOffset;
      setScroll(position);
    }, [setScroll])
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return scroll;
};
