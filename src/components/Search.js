import React from 'react'
import './assets/Styles/search.css'

const Search = () => {
  return (
    <nav>
      <div className="logo">Movie</div>
      <div className="search-bar">
        <input type="text" placeholder='Search your favorite movie...' />
        <button>
        <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </nav>
  )
}

export default Search
