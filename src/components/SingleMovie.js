import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './Context';
import './assets/Styles/SingleMovie.css'

const SingleMovie = () => {

  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [movie, setMovie] = useState("");

  //======== Home Page for 1 Movie /========/

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 800);

    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="loading-section">
        <div className="loading">Loading...</div>
      </div>
    )
  }

  return (
    <section>
      <div className="movie-card">
        <img src={movie.Poster} alt="" />
        <div className="info">
          <p className='title'>{movie.Title}</p>
          <p className='release'>{movie.Released}</p>
          <p className='genre'>{movie.Genre}</p>
          <p className='imdbRating'>{movie.imdbRating} / 10</p>
          <p className='country'>{movie.Country}</p>
          <NavLink to='/' className='back-btn'>Go Back</NavLink>
        </div>
      </div>
    </section>
  )
}

export default SingleMovie
