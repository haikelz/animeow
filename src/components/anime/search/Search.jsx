const AnimeSearch = (props) => {
    return (
        <div className="flex justify-center items-center mt-4">
            <form onSubmit={props.handleSearch}>
                <input
                    className="rounded-full outline-none text-gray-900 font-medium bg-slate-100 border-black py-1.5 px-6" 
                    type="search" 
                    placeholder="Ketik disini" 
                    required 
                    value={props.search} 
                    onChange={e => props.setSearch(e.target.value)}
                />
            </form>
        </div>
    )
}

export default AnimeSearch; 