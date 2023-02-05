const Login = () => {
  return (
    <a href={AUTH_URL}>
      <button className="transition ease-in-out duration-150 flex items-center justify-center p-2 w-[14rem] rounded-[6px] bg-gradient-to-r from-[#1DB954] to-[#3fc26d] text-[#ffffff] shadow-xl shadow-[#1DB954]/10 hover:shadow-[#1DB954]/30">
        <p className="ml-2">Log In With Spotify</p> 
      </button>
    </a>
  )
}

export default Login