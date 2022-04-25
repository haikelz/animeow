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
            <p className="mt-2 font-semibold">Sumber: <span className="font-medium">{top.source}</span></p>
            <p className="font-semibold">Rank: <span className="font-medium">{top.rank}</span></p>
          </div>
        </div>
        ))}
      </div>
    </>
  )
}

export default TopAnimeCards;  