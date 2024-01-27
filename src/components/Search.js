import React from 'react'
import './assets/Styles/search.css'
import { useGlobalContext } from './Context'

const Search = () => {

  const { searchQuery, setSearchQuery, isError } = useGlobalContext();

  return (
    <>
      <nav>
        <div className="logo">Movie</div>

        <form action='#' onSubmit={(e) => e.preventDefault()}>
          <input 
          type="text" 
          placeholder='Search your favorite movie...' 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} />

        </form>
      </nav>
      <div className="card-error">
        {isError.show && isError.msg}
      </div>
      </>
      )
}

export default Search
