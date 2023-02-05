import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/')} className="absolute top-[16px] left-[16px] transition-all ease-in-out duration-200 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[#ffffff] shadow-xl shadow-fuchsia-500/10 hover:shadow-fuchsia-500/20 w-8 h-8">
      &#8592;
    </button>
  )
}

export default BackButton