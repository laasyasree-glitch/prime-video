import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props

    const actionMovies = moviesList.filter(x => x.categoryId === 'ACTION')
    const comedyMovies = moviesList.filter(x => x.categoryId === 'COMEDY')
    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="img"
        />
        <div>
          <h1>Action Movies</h1>
          <MoviesSlider moviesList={actionMovies} />
        </div>
        <div className="cont2">
          <h1>Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMovies} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
