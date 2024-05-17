// Write your code here
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie
  return (
    <div className="movie-item">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img className="movie-image" src={thumbnailUrl} alt=" thumbnail" />
          </button>
        }
        className="popup-container"
      >
        {close => (
          <div className="video-container">
            <button
              type="button"
              className="close-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
            <ReactPlayer className="react-player" url={videoUrl} controls />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
