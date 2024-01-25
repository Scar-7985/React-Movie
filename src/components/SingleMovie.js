import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {

  let {id} = useParams();

  return (
    <>
      <h1>Single Movie Page {id}</h1>
    </>
  )
}

export default SingleMovie
