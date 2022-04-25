import { useState, useEffect } from "react";
import TopMangaCards from "@/components/manga/cards/TopMangaCards";
import MangaHeader from "@/components/manga/header/Header";

const TopManga = () => {
    const [topManga, setTopManga] = useState([]);
    const api = "https://api.jikan.moe/v4/top/manga";

    // get Top Anime
    const getTopManga = async () => {
        try {
            let response = await fetch(`${api}`)
                .then(res => res.json());

            setTopManga(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getTopManga();
    }, []);

    return (
        <section>
            <TopMangaCards
                topManga={topManga}
            />
        </section>
    )
}

export default TopManga; 