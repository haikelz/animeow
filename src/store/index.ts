import { atom } from "jotai";

export const loadingImageAtom = atom<boolean>(false);
export const pageAnimeAtom = atom<number>(1);
export const pageMangaAtom = atom<number>(1);
export const scrollAtom = atom<number>(0);
export const typeAtom = atom<string>("anime");
