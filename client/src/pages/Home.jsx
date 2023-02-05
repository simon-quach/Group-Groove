import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-full text-center">
      <section className='flex flex-col items-center text-white mx-5'>
        <div className='text-[48px] sm:text-[72px] font-bold'>Group Groove</div>
        <div className="text-[16px] font-thin">A music queue determined by the crowd</div>
       
          <button onClick={() => navigate("/join-group")} className="transition-all ease-in-out duration-200 p-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[#ffffff] shadow-xl shadow-fuchsia-500/10 hover:shadow-fuchsia-500/20 px-2 mt-8">
            Join an Existing Group
          </button>
          <button onClick={() => navigate("/create-group")} className="transition-all ease-in-out duration-200 p-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[#ffffff] shadow-xl shadow-fuchsia-500/10 hover:shadow-fuchsia-500/20 px-2 mt-4">
            Create a New Group
          </button>
      </section>
      
    </div>
  )
}

export default Home