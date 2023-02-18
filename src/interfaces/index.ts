import { SetStateAction } from "jotai";
import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
  title: string;
}

export interface DetailAnimeProps {
  data: {
    title: string;
    title_japanese: string;
    synopsis: string;
    images: {
      webp: {
        large_image_url: string;
      };
    };
    trailer: {
      embed_url: string;
    };
  };
}

export interface DetailMangaProps {
  data: {
    title: string;
    title_japanese: string;
    images: {
      webp: {
        large_image_url: string;
      };
    };
    synopsis: string;
    chapters: number;
    volumes: number;
    status: string;
  };
}

export interface PaginationProps {
  page: number;
  setPage: (page: SetStateAction<number>) => void;
}
