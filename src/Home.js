import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import LearnRoute from './LearnRoute'
import MainRoute from './MainRoute'

function Home() {
  return (
    <Router>
        <Link to='/learn'>Learn</Link>
        <Routes>
            <Route path='/' element = {<MainRoute />} />
            <Route path='/learn' element = {<LearnRoute />} />
            <Route path='/learn2' element = {<Navigate replace to={'/learn'} />} />
        </Routes>
    </Router>
  )
}

export default Home