import { useState, useEffect } from "react"
import axios from "axios"
import useAxios from "../Hooks/useAxios"
import useStyle from "../Hooks/useStyle"
import { connect } from "react-redux"
import { setMovies } from "../redux/movieReducer"

const Movies = (props) => {
  const [movies, setMovies, deleteMovie] = useAxios("/api/movies")
  const { moviePage, movieStyle } = useStyle()
  // console.log(props)
  // const [movies, setMovies] = useState([])

  // useEffect(() => {
  //   axios
  //     .get("/api/movies")
  //     .then((res) => {
  //       props.setMovies(res.data)
  //     })
  //     .catch((err) => console.log(err))
  // }, [])

  // const deleteMovie = (movie_id) => {
  //   axios
  //     .delete(`/api/movies/${movie_id}`)
  //     .then((res) => {
  //       props.setMovies(res.data)
  //     })
  //     .catch((err) => console.log(err))
  // }

  return (
    <div style={moviePage}>
      {movies.map((movie) => (
        <div style={movieStyle}>
          {movie.name}
          <button onClick={() => deleteMovie(movie.movie_id)}>X</button>
        </div>
      ))}
    </div>
  )
}

export default connect((s) => s.movieReducer, { setMovies })(Movies)

// const mapStateToProps = (reduxState) => {
//   return reduxState
// }
// export default connect(mapStateToProps, {setMovies})(Movies)
