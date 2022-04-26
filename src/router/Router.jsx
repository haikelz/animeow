import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/views/home/Home";
import Manga from "@/views/manga/Manga";
import SearchManga from "@/views/manga/searchManga/SearchManga";
import TopManga from "@/views/manga/topManga/TopManga";
import Anime from "@/views/anime/Anime";
import SearchAnime from "@/views/anime/searchAnime/SearchAnime";
import TopAnime from "@/views/anime/topAnime/TopAnime";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/manga' element={<Manga />}></Route>
                <Route path='/manga/searchmanga' element={<SearchManga />}></Route>
                <Route path='/manga/topmanga' element={<TopManga />}></Route>
                <Route path='/anime' element={<Anime />}></Route>
                <Route path='/anime/searchanime' element={<SearchAnime />}></Route>
                <Route path='/anime/topanime' element={<TopAnime />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router; 