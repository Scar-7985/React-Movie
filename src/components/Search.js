import React from 'react'
import './assets/Styles/search.css'
import { useGlobalContext } from './Context'

const Search = () => {

  const { setSearchQuery, isError } = useGlobalContext();
  // console.log(isError.show)

  return (
    <>
      <nav>
        <div className="logo">Movie</div>

        <form action='#' onSubmit={(e) => e.preventDefault()}>
          <input 
          type="text" 
          placeholder='Search your favorite movie...'
          onChange={(e) => setSearchQuery(e.target.value)} />

        </form>
      </nav>
      <div className="card-error" style={{display: isError.show ? 'block' : 'none'}}>
        {isError.show && isError.msg}
      </div>
      </>
      )
}

export default Search
