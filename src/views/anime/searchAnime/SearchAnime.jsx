import { useState, useEffect } from "react";
import AnimeSearch from "@/components/anime/search/Search";
import SearchAnimeCards from "@/components/anime/cards/SearchAnimeCards";
import AnimeHeader from "@/components/anime/header/Header";

const SearchAnime = () => {
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);

  // Buat search bar
  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
  }

  const apiSearch = "https://api.jikan.moe/v4/anime";

  // get API for search
  const fetchAnime = async (query) => {
    try {
      let response = await fetch(`${apiSearch}?q=${query}&order_by=title&sort=asc`)
        .then(res => res.json());

      setAnimeList(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section>
      <div className="flex mt-12 justify-center items-center">
        <h1 className="text-4xl font-bold">Search Your <span className="text-[#9F72EA]">Anime</span></h1>
      </div>
      <AnimeSearch
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      <SearchAnimeCards
        animeList={animeList}
      />
    </section>
  )
}

export default SearchAnime; 