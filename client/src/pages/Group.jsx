import { useState, useEffect } from 'react';
import { BackButton, SongRequest, SearchCard } from '../components'
import axios from 'axios'

const Group = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getSongs = async () => { // data.results[]. -> either artistName or trackName
      const res = await axios.get(`https://itunes.apple.com/search?term=${query}&media=music&limit=5`)
      const data = res.data
      console.log(data)
      setResults(data.results); // Stores an array of searched songs
    }
    getSongs();
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="flex justify-center h-full">
      <BackButton />
      <div className="w-full mx-[2rem] md:mx-[12rem] mt-[6rem]">
        <div className='flex flex-col lg:flex-row justify-between'>

          <div className='flex flex-col gap-[6rem] w-full'>
            <div className=''>
              <div className="text-[20px] font-bold">- NOW PLAYING -</div>
                <div className="flex items-center mt-[1rem] gap-[2rem]">
                  <img src="/runit.jpg" alt="album-cover" className="w-[10rem] rounded-lg reflect"/>
                  <div className="">
                    <div className="text-[24px] font-semibold">Run It (feat. Annika Wells)</div>
                    <div className="text-[#686C90]">Midnight Kids, Annika Wells</div>
                  </div>
                </div>
            </div>
            
            <div className=''>
              <div className="text-[20px] font-bold">- REQUESTS -</div>
              <div className='flex flex-col gap-2 mt-[1rem] overflow-auto'>
                <SongRequest />
                <SongRequest />
                <SongRequest />
                <SongRequest />
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center w-full mt-[4rem] mb-[4rem]'>
            <div className="text-[20px] font-bold">- SEARCH SONGS -</div>
            <form onSubmit={(e) => handleSubmit(e)} className='text-black flex gap-2'>
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="" />
              <button className='transition-all ease-in-out duration-200 p-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[#ffffff] shadow-xl shadow-fuchsia-500/10 hover:shadow-fuchsia-500/20 px-2'>Search</button>
            </form>
            <div className='text-center'>
              <div>
                {
                  results.map((result) => (
                    <SearchCard song={result} />
                  )
                )}
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Group