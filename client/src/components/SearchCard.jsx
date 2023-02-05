const SearchCard = ({ song }) => {
  console.log(song)
  return (
    <div className="bg-[#202351] flex hover:bg-[#272b61] cursor-pointer text-left">
      <img src={song.artworkUrl100} alt="album-cover" className="w-[3rem] rounded-lg" />
      <div className="flex flex-col justify-center mx-2 my-1">
        <div>{song.trackName}</div>
        <div className="text-[#686C90] text-[12px]">{song.artistName}</div>
      </div>
    </div>
  )
}

export default SearchCard