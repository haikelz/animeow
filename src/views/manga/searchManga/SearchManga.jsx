import { useState, useEffect } from "react";
import Search from "@/components/manga/search/Search";
import SearchMangaCards from "@/components/manga/cards/SearchMangaCards";

const SearchManga = () => {
  const [search, setSearch] = useState("");
  const [mangaList, setMangaList] = useState([]);

  // Buat search bar
  const handleSearch = (e) => {
    e.preventDefault();
    fetchManga(search);
  }

  const apiSearch = "https://api.jikan.moe/v4/manga";

  // get API for search
  const fetchManga = async (query) => {
    try {
      let response = await fetch(`${apiSearch}?q=${query}&order_by=title&sort=asc`)
      .then(res => res.json());

      setMangaList(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section>
      <div className="flex mt-12 justify-center items-center">
        <h1 className="text-4xl font-bold">Search Your <span className="text-[#9F72EA]">Manga</span></h1>
      </div>
      <Search
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      <SearchMangaCards
        mangaList={mangaList}
      />
    </section>
  )
}

export default SearchManga; 