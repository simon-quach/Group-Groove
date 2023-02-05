import axios from 'axios'
import { useLocation } from 'react-router-dom'

const SearchCard = ({ song }) => {
  const location = useLocation();

  const addRequest = async () => {
    const { trackId, trackName, artworkUrl100, artistName } =  song;
    axios.post('http://localhost:8080/add-song', {
      trackId: trackId,
      trackName: trackName,
      albumCover: artworkUrl100,
      artistName: artistName,
      groupCode: location.pathname.slice(7)
    })
  }
  return (
    <div onClick={() => addRequest()} className="bg-[#202351] flex hover:bg-[#272b61] cursor-pointer text-left">
      <img src={song.artworkUrl100} alt="album-cover" className="w-[3rem] rounded-lg" />
      <div className="flex flex-col justify-center mx-2 my-1">
        <div>{song.trackName}</div>
        <div className="text-[#686C90] text-[12px]">{song.artistName}</div>
      </div>
    </div>
  )
}

export default SearchCard