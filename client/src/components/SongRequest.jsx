import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const SongRequest = ({songRequest}) => {
  const location = useLocation();

  const [count, setCount] = useState(0);

  const updateNowPlaying = (trackId, trackName, albumCover, artistName) => {
    axios.post('http://localhost:8080/now-playing', {
      trackId: trackId,
      trackName: trackName,
      albumCover: albumCover,
      artistName: artistName,
      groupCode: location.pathname.slice(7)
    })
  }

  return (
      <div onClick={() => updateNowPlaying(
        songRequest.trackId,
        songRequest.trackName,
        songRequest.albumCover,
        songRequest.artistName,
        )}
        className='flex items-center w-auto max-w-[50rem] bg-[#202351] rounded-lg shadow-md cursor-pointer'>
        <img src={songRequest.albumCover} alt="album-cover" className='w-[5rem] rounded-lg'/>
        <div className='flex w-full items-center justify-between mx-4'>
          <div>
            <div className="text-[16px] font-semibold">{songRequest.trackName}</div>
            <div className="text-[#686C90] text-[12px]">{songRequest.artistName}</div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='text-right'>
              {count}
            </div>
            <button onClick={() => setCount(count+1)} className="transition-all ease-in-out duration-200 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[#ffffff] shadow-xl shadow-fuchsia-500/10 hover:shadow-fuchsia-500/30 w-8 h-8">
              &#8593;
            </button>
          </div>
        </div> 
      </div>
  )
}

export default SongRequest