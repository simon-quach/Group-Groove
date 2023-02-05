import { useState } from 'react'

const SongRequest = ({songRequest}) => {
  const [count, setCount] = useState(0);

  return (
      <div className='flex items-center w-auto bg-[#202351] rounded-lg shadow-md'>
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
            <button onClick={() => setCount(count+1)} className="transition-all ease-in-out duration-200 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[#ffffff] shadow-xl shadow-fuchsia-500/10 hover: w-8 h-8">
              &#8593;
            </button>
          </div>
        </div> 
      </div>
  )
}

export default SongRequest