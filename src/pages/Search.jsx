
const Search = () => {
    return(
        <>
        <header>
            <div className="container">
             <div className="flex justify-between mt-5">
                <div>
                    <h1>Search</h1>
                </div>
                <div>
                    <img src="/icons/camera.svg" alt="" />
                </div>
             </div>
            </div>
        </header>
        <div className="container">
            <div className="flex justify-center mt-5">
                <div className="flex w-[500px] h-10 bg-[#fff] gap-3" >
                <img className="mt-[10px] ml-[10px] h-[21px] w-[21px]" src="/icons/search.svg" alt="" />
                <input className="bg-transparent w-[340px]" type="text" placeholder="Artists, songs, or podcasts" />
                </div>
            </div>
            <div className="mt-6">
                <h1>Your top genres</h1>
                <div className="flex gap-4 mt-5">
                    <img className="h-[100px]" src="/img/Pop.jpg" alt="" />
                    <img className="h-[100px]" src="/img/Indie.jpg" alt="" />
                </div>
            </div>
            <div className="mt-6">
                <h1>Popular podcast categories</h1>
                <div className="flex gap-4 mt-5">
                    <img className="h-[100px]" src="/img/Pop.jpg" alt="" />
                    <img className="h-[100px]" src="/img/Indie.jpg" alt="" />
                </div>
            </div>
            <div className="mt-6">
                <h1>Browse all</h1>
                <div className="flex gap-4 mt-5">
                    <img className="h-[100px]" src="/img/Pop.jpg" alt="" />
                    <img className="h-[100px]" src="/img/Indie.jpg" alt="" />
                </div>
                
            </div>
        </div>
        </>
    )
}
export default Search