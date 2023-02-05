import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { Home, JoinGroup, CreateGroup, Group }  from './pages'

import './App.css'

function App() {
  return (
    <BrowserRouter>
    <main className='h-screen w-screen text-white'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/join-group' element={<JoinGroup />}/>
        <Route path='/create-group' element={<CreateGroup />}/>
        <Route path='/group' element={<Group />}/>
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App