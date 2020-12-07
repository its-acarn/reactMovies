import {useState} from 'react';

const LetterBox = ({letters}) => {

  const letterList = letters.map( letter => {
    return (
      <Letter author={letter.author} key={letter.id}>{letter.message} </Letter>
      )
    } 
  )

const MovieContainer = () => {
  return (
    <>

    </>
  )
}

export default MovieContainer;
