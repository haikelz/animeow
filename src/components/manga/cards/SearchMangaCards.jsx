const SearchMangaCards = (props) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 gap-4 px-4">
      {props.mangaList.map(manga => (
        <div className="bg-slate-800 drop-shadow-lg rounded-xl mx-4 my-10" key={manga.mal_id}>
          <div className="flex justify-center items-center">
            <img className="h-64 w-full object-center rounded-t-xl" src={manga.images.webp.image_url} alt="Gambar" />
          </div> 
          <div className="flex mt-2 px-3 pb-3 flex-col justify-start">
            <h1 className="text-xl font-bold">{manga.title}</h1>
            <p className="text-base mt-2 font-semibold text-yellow-300">Score: {manga.score}</p>
            <p className="text-sm font-medium">Status: {manga.status}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SearchMangaCards; 