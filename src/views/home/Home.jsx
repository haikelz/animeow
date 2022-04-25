import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <section className="flex flex-col justify-center h-screen text-center items-center">
            <div className="flex flex-col justify-center items-center">
                <img className="w-1/2 mb-4" src="img/home.svg" alt="Home Image" />
                <h1 className="text-2xl md:text-4xl font-bold">Mau cari <span className="text-red-400">Anime</span> atau <span className="text-[#9F72EA]">Manga?</span></h1>
            </div>
            <div className="flex justify-center text-xl items-center mt-4">
                <Link to="/anime"><button className="bg-blue-500 px-6 py-2 font-bold tracking-wide rounded-full mr-2 hover:bg-gray-300 hover:text-gray-900 transition duration-300">Anime</button></Link>
                <Link to="/manga"><button className="bg-gray-300 px-6 py-2 font-bold tracking-wide rounded-full ml-2 text-gray-900 hover:bg-red-400 hover:text-gray-200 transition duration-300">Manga</button></Link>
            </div>
        </section>    
    )
}

export default Home; 