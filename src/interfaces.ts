import { SetStateAction } from "jotai";
import { ReactNode } from "react";

export interface Children {
  children: ReactNode[] | JSX.Element;
  title: string;
}

export interface Context {
  params: {
    id: string;
  };
}

export interface DetailAnime {
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

export interface DetailManga {
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

export interface Page {
  page: number;
  setPage: (page: SetStateAction<number>) => void;
}

export interface FilteredDataManga {
  filteredData: [
    mangaList: {
      images: {
        webp: {
          image_url: string;
        };
      };
      score: number;
      titles: [
        {
          title: string;
        }
      ];
      mal_id: string;
      title: string | any | undefined;
      title_japanese: string;
      year: string;
      rank: string;
      chapters: string;
      volumes: string;
      status: string;
    }
  ];
  search: string;
}

export interface FilteredDataAnime {
  filteredData: [
    animeList: {
      images: {
        webp: {
          image_url: string;
        };
      };
      score: number;
      mal_id: string;
      title: string | any | undefined;
      title_japanese: string;
      season: string;
      year: string;
      status: string;
      rank: string;
      episodes: string;
    }
  ];
  search: string;
}

export interface OffsetTop {
  offsetTop: any;
}

export interface LinkRef {
  linkRef: {
    current: any;
  };
}

export interface Event {
  target: {
    value: string;
  };
}
