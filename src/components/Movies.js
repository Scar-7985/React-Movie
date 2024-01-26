import React from 'react'
import './assets/Styles/Movies.css'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom';

const Movies = () => {

    const { movie } = useGlobalContext();

    return (

        <section className='movie-page'>

            <div className="flex">

                {movie.map((curMovie) => {

                    const { imdbId, Title, Poster, Year } = curMovie;

                    return <>
                        <NavLink to={`movie/${imdbId}`}>
                            <div className="card">
                                <div className="image">
                                    <img src={Poster} alt={Title} />
                                </div>
                                <div className="cardinfo">
                                    <p>{Title}-{Year}</p>
                                </div>
                            </div>
                        </NavLink>
                    </>
                })}

            </div>

        </section>

    )
}

export default Movies
