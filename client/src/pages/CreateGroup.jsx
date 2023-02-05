import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { Login, LoggedIn, BackButton } from '../components'

const CreateGroup = () => {
  const navigate = useNavigate();

  //STATES
  const [groupCode, setGroupCode] = useState('');

  const code = new URLSearchParams(window.location.search).get("code"); // Gets the code in the URL from logging into Spotify

  const handleSubmit = (e) => {
    e.preventDefault();
    if (groupCode){
      console.log('group created!');
      navigate('../group')
    } else {
      alert('please enter a group code')
    }
  }

  const createGroup = async () => {
    const response = await fetch('http://169.234.92.217:5000/add_song', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            group_id: "1234567",
            song_id: "urmom"
          }),
        });
  }
  createGroup();

  return (
    <div className="flex flex-col justify-center items-center h-full relative">
      <BackButton />
      <form action="POST" onSubmit={(e) => handleSubmit(e)} className="flex flex-col justify-center items-center h-auto space-y-8 mt-8">
        <div className="flex flex-col items-center justify-center">
          <label htmlFor="group-code" className="font-bold text-[30px]">
            Create a Group Code
          </label>
          <input onChange={(e) => setGroupCode(e.target.value)} value={groupCode} type="text" name="group-code" id="group-code" maxlength="7" className="mt-4 w-[60%] h-[4rem] text-[36px] text-black text-center rounded-[6px]"/>
        </div>

        <button className="transition-all ease-in-out duration-200 p-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[#ffffff] shadow-xl shadow-fuchsia-500/10 hover:shadow-fuchsia-500/20 px-2 mt-4">
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateGroup