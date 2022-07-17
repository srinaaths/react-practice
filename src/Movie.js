import React from 'react'
import './Movie.css'

function Movie({movie}) {
  return (
    <div>{movie.name}</div>
  )
}

export default Movie