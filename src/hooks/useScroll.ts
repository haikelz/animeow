import { SetStateAction, useAtom } from "jotai"
import { useCallback, useEffect } from "react"
import { scrollAtom } from "src/store"
import { useAtomCallback } from "jotai/utils"

type HandleScroll = () => void;
type Scroll = [number, (update: SetStateAction<number>) => void];

export const useScroll = () => {
    const [scroll, setScroll]: Scroll = useAtom(scrollAtom)

    const handleScroll: HandleScroll = useAtomCallback(
        useCallback(() => {
            const position = window.pageYOffset
            setScroll(position)
        }, [setScroll])
    )

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll])

    return [scroll, setScroll] as const;
}