import { Link } from "react-router-dom";
import MangaHeader from "@/components/manga/header/Header";

const Manga = () => {
    return (
        <section className="flex flex-col text-center justify-center h-screen items-center">
            <div className="flex justify-center items-center">
                <h1 className="text-2xl md:text-4xl text-red-400 font-bold">
                    Search Manga
                    <span className="text-gray-200"> Atau</span>
                    <span className="text-[#9F72EA]"> Top Manga? </span>
                </h1>
            </div>
            <div className="flex justify-center text-xl items-center mt-4">
                <Link to="/manga/searchmanga"><button className="bg-blue-500 px-6 py-2 font-bold tracking-wide rounded-full mr-2 hover:bg-gray-300 hover:text-gray-900 transition duration-300">Search</button></Link>
                <Link to="/manga/topmanga"><button className="bg-gray-300 px-6 py-2 font-bold tracking-wide rounded-full ml-2 text-gray-900 hover:bg-red-400 hover:text-gray-200 transition duration-300">Top</button></Link>
            </div>
        </section>
    )
}

export default Manga;   