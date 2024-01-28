import React from 'react'
import './assets/Styles/Movies.css'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom';

const Movies = () => {

    const { movie, isLoading } = useGlobalContext();

    if (isLoading) {
        return (
          <div className="loading-section">
            <div className="loading">Loading...</div>
          </div>
        )
      }

    return (

        <section className='movie-page'>

            <div className="flex">

                {movie.map((curMovie) => {

                    const { imdbID, Title, Poster, Year } = curMovie;
                    const movieName = Title.substring(0, 20);


                    return (
                        <NavLink to={`movie/${imdbID}`} key={imdbID}>
                            <div className="image">
                                <img src={Poster} alt={Title} />
                            </div>
                            <div className="info">{movieName.length > 20 ? `${movieName}` : movieName } - ({Year})...</div>
                        </NavLink>
                    )

                })}

            </div>

        </section>

    )
}

export default Movies
