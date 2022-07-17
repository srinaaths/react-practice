import React, { useEffect , useState} from 'react'
import Axios from 'axios';
import Movie from './Movie'
import Home from './Home'

function Movies() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await Axios.get('http://localhost:8080/')
            setMovies(data.data)
        }
        fetchData();
    }, [])
    return (
        <div>
            {movies.map(movie => {
                return (
                    <Movie key={movie.id} movie = {movie}></Movie>
                )
            })}
        </div>
    )
}

export default Movies