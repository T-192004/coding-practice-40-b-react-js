// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(movie => movie.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(movie => movie.categoryId === 'COMEDY')
  return (
    <div className="app-container">
      <img
        className="logo-image"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="bottom-container">
        <h1 className="theme-title">Action Movies</h1>
        <MoviesSlider selectedMovies={actionMovies} />
        <h1 className="theme-title">Comedy Movies</h1>
        <MoviesSlider selectedMovies={comedyMovies} />
      </div>
    </div>
  )
}
export default PrimeVideo
