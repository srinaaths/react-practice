import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import LearnRoute from './LearnRoute'
import MainRoute from './MainRoute'
import Movies from './Movies'
import TopRatedMovie from './TopRatedMovie'

function Home() {
  return (
    <div>
      This is the home page <br />
      <Router>
        <Link to='/movies'>Movies</Link>
        <Link to='/topRatedMovie'>Top Rated movie</Link>
        <Routes>
          <Route path='/movies' element={<Movies />} />
          <Route path='/topRatedMovie' element={<TopRatedMovie />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Home