import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'

function Routing() {
  return (
    <BrowserRouter>
        <Link to="/Demo1">Demo1</Link>
        <Link to="/Demo2">Demo2</Link>
    </BrowserRouter>
  )
}

export default Routing