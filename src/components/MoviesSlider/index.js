// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  const {selectedMovies} = props
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {selectedMovies.map(movie => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
