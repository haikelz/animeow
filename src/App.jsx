import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";
import Home from "@/views/home/Home";
import Manga from "@/views/manga/Manga";
import SearchManga from "@/views/manga/searchManga/SearchManga";
import TopManga from "@/views/manga/topManga/TopManga";
import Anime from "@/views/anime/Anime";
import SearchAnime from "@/views/anime/searchAnime/SearchAnime";
import TopAnime from "@/views/anime/topAnime/TopAnime";

const App = () => {
  // animasi loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  return (
    <section className="h-full border-none outline-none text-gray-200">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <PuffLoader
            size={50}
            color={"#ffffff"}
            loading={loading}
          />
        </div>)
        : (
          <Router>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/manga' element={<Manga />}></Route>
              <Route path='/manga/searchmanga' element={<SearchManga />}></Route>
              <Route path='/manga/topmanga' element={<TopManga />}></Route>
              <Route path='/anime' element={<Anime />}></Route>
              <Route path='/anime/searchanime' element={<SearchAnime />}></Route>
              <Route path='/anime/topanime' element={<TopAnime />}></Route>
            </Routes>
          </Router>
        )
      }
    </section>
  )
}

export default App;