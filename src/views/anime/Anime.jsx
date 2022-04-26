import { Link } from "react-router-dom";
import AnimeHeader from "@/components/anime/header/Header";

const Anime = () => {
    return (
        <section className="flex flex-col text-center justify-center h-screen items-center">
            <div className="flex justify-center items-center">
                <h1 className="text-2xl md:text-4xl text-red-400 font-bold">
                    Search Anime
                    <span className="text-gray-200"> Atau</span>
                    <span className="text-[#9F72EA]"> Top Anime? </span>
                </h1>
            </div>
            <div className="flex justify-center text-xl items-center mt-4">
                <Link to="/anime/searchanime"><button className="bg-blue-500 px-6 py-2 font-bold tracking-wide rounded-md mr-2 hover:bg-gray-300 hover:text-gray-900 transition duration-300">Search</button></Link>
                <Link to="/anime/topanime"><button className="bg-gray-300 px-6 py-2 font-bold tracking-wide rounded-md ml-2 text-gray-900 hover:bg-red-400 hover:text-gray-200 transition duration-300">Top</button></Link>
            </div>
        </section>
    )
}

export default Anime;  