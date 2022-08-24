import { ReactNode } from "react";

export interface Children {
    children: ReactNode[] | JSX.Element;
    title?: string;
}

export interface Context {
    params: {
        id: string;
    }
}

export interface DetailAnime {
    data: {
        title: string;
        title_japanese: string;
        synopsis: string;
        images: {
            webp: {
                large_image_url: string;
            }
        }
        trailer: {
            embed_url: string;
        }
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

export interface DetailCharacter {
    data: {
        name: string;
        name_kanji: string;
        images: {
            webp: {
                image_url: string;
            };
        };
        about: string;
    };
}

export interface Page {
    page: number;
    setPage: (page: number) => void;
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
                { title: string }
            ];
            mal_id: string;
            title: string;
            title_japanese: string;
            year: string;
            rank: string;
            chapters: string;
            volumes: string;
            status: string;
        }
    ]
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
            titles: [
                {
                    title: string;
                }
            ];
            mal_id: string;
            title: string;
            title_japanese: string;
            season: string;
            year: string;
            rank: string;
            episodes: string;
        }
    ];
}

export interface FilteredDataCharacters {
    filteredData: [
        charactersList: {
            name: string;
            name_kanji: string;
            about: string;
            mal_id: string;
            images: {
                webp: {
                    image_url: string;
                }
            }
            favorites: string;
        }
    ]
}


export interface OffsetTop {
    offsetTop: any;
};

export interface LinkRef {
    linkRef: {
        current: any;
    };
};