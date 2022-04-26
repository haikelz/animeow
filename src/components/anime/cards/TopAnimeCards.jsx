const TopAnimeCards = (props) => {
  return (
    <>
      <div className="flex mt-12 justify-center items-center">
        <h1 className="text-4xl font-bold">Top <span className="text-[#9F72EA]">Anime</span></h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 gap-4 px-4">
        {props.topAnime.map(top => (
          <div className="bg-slate-800 drop-shadow-lg rounded-xl mx-4 my-10" key={top.mal_id}>
            <div className="flex justify-center items-center">
            <img className="h-64 w-full object-center rounded-t-xl" src={top.images.webp.image_url} alt="Gambar" />
          </div>
          <div className="flex mt-2 px-3 pb-3 flex-col justify-start">
            <h1 className="text-xl font-bold">{top.title}</h1>
            <p className="text-base mt-2 font-semibold text-yellow-300">Rank: {top.rank}</p>
            <p className="text-sm font-medium">Sumber: {top.source}</p>
          </div>
        </div>
        ))}
      </div>
    </>
  )
}

export default TopAnimeCards;  