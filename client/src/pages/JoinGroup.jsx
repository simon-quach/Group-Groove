import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { BackButton } from '../components'

const JoinGroup = () => {
  const navigate = useNavigate();

  //STATES
  const [groupCode, setGroupCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (groupCode){
      const res = await axios.get(`https://group-groove-f0ok.onrender.com/${groupCode}`);
      const data = res.data;
      if (data){
        navigate(`../group/${groupCode}`);
      } else {
        alert('that room does not exist')
      }
    } else {
      alert('please enter a group code')
    }
  }

  return (
    <div className="flex justify-center items-center h-full">
      <BackButton />
      <form onSubmit={(e) => handleSubmit(e)} action="POST" className="flex flex-col justify-center items-center h-auto space-y-8">
        <div className="flex flex-col items-center justify-center">
          <label htmlFor="group-code" className="font-bold text-[30px]">
            Enter Group Code
          </label>
          <input onChange={(e) => setGroupCode(e.target.value)} value={groupCode} type="text" name="group-code" id="group-code" maxLength="7" className="mt-4 w-[60%] h-[4rem] text-[36px] text-black text-center rounded-[6px]"/>
        </div>

        <button className="transition-all ease-in-out duration-200 p-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-xl shadow-fuchsia-500/10 hover:shadow-fuchsia-500/20 px-2 mt-4">
          Enter Group
        </button>
      </form>
    </div>
  )
}

export default JoinGroup