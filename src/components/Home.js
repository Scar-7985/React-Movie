import React from 'react';
// import { useGlobalContext } from './Context';
import Search from './Search';
import Movies from './Movies';

const Home = () => {

  // const name = useGlobalContext();

  return (
    <>
    <Search />
      <Movies />
    </>
  )
}

export default Home;
