import Movie from './Movie'

const MovieList = ({movies}) => {

  const movieListContainer = movies.map( movie => {
    return (
      <Movie url={movie.url} key={movie.id}> {movie.name} </Movie>
      )
    } 
  )

  return (
    <>
      <ul>
        {movieListContainer}
      </ul>
    </>
  )
}

export default MovieList;