import { useState, useEffect } from "react";
import TopAnimeCards from "@/components/anime/cards/TopAnimeCards";
import AnimeHeader from "@/components/anime/header/Header";
const TopAnime = () => {
    const [topAnime, setTopAnime] = useState([]);
    const api = "https://api.jikan.moe/v4/top/anime";

    // get Top Anime
    const getTopAnime = async () => {
        try {
            let response = await fetch(api)
                .then(res => res.json());

            setTopAnime(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getTopAnime();
    }, []);

    return (
        <section>
            <TopAnimeCards
                topAnime={topAnime}
            />
        </section>
    )
}

export default TopAnime; 