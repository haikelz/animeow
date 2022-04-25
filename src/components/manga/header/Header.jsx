import { Link } from "react-router-dom";

const MangaHeader = () => {
  return (
    <header>
      <div className="flex pt-4 text-lg justify-center items-center">
        <Link to="/">
          <button className="rounded-sm mr-4 px-3 py-1 font-medium hover:scale-110 hover:text-blue-500 transition duration-300">
            Home
          </button>
        </Link>
        <Link to="/manga/searchmanga">
          <button className="rounded-sm px-3 py-1 font-medium hover:scale-110 hover:text-blue-500 transition duration-300">
            Search Manga 
          </button>
        </Link>
        <Link to="/manga/topmanga">
          <button className="rounded-sm ml-4 px-3 py-1 font-medium hover:scale-110 hover:text-blue-500 transition duration-300">
            Top Manga
          </button>
        </Link> 
      </div>
    </header>
  )
}

export default MangaHeader; 