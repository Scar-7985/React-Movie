import React from 'react';
// import { AppContext } from './Context';
import { useGlobalContext } from './Context';

const Home = () => {

  // const name = useContext(AppContext);
  const name = useGlobalContext();

  return (
    <>
      <h1>
      Home Page
      </h1>
      <h2>{name}</h2>
    </>
  )
}

export default Home;
