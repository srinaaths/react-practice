import Axios from 'axios'
import React, { useEffect, useState } from 'react'

function TopRatedMovie() {
    const [movie, setMovie] = useState('')
    useEffect(() => {
        const fetchData = async() => {
            const data = await Axios.get('http://localhost:8080/worstRatedMovie')
            setMovie(data.data);
        }
    })
  return (
    <div>
        {movie}
    </div>
  )
}

export default TopRatedMovie