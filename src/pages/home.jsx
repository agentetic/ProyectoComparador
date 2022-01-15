import React from 'react'
import Companies from '../components/Companies/Companies'
import News from '../components/news/news'
import PreguntasFrecuentes from '../components/PreguntasFrecuentes/PreguntasFrecuentes'


const Home = () => {
  return(
    <>
      <Companies />
      <PreguntasFrecuentes />  
      <News />  
    </>
  )
}

export default Home