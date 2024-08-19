import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Movie from './pages/movies/movie'
import Anime from './pages/Anime/anime'
import './App.css'
import VideoPlayer from './pages/player/player'
import Detailspage from './pages/Detailspage/Detailspage'
import FilterPage from './pages/filter/FilterPage'
import Profile from './pages/profile/Profile'
const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/movie' element={<Movie/>}/>
      <Route path='/anime' element={<Anime/>}/>
      <Route path='/detailspage' element={<Detailspage/>}/>
      <Route path='/player' element={<VideoPlayer/>}/>
      <Route path='/filterpage' element={<FilterPage/>}/>
      <Route path="/profile" element={<Profile />} />

    </Routes>
    </div>
  )
}

export default App
