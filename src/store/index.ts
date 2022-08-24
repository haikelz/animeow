import { atom } from "jotai";

const scrollAtom = atom(0);

const pageAnimeAtom = atom(1);
const pageMangaAtom = atom(1);
const pageCharactersAtom = atom(1);
const loadingImageAtom = atom(false);

const searchAnimeAtom = atom("");
const searchMangaAtom = atom("");
const searchCharacterAtom = atom("");

export { scrollAtom, pageAnimeAtom, pageMangaAtom, pageCharactersAtom, searchAnimeAtom, searchMangaAtom, searchCharacterAtom, loadingImageAtom };