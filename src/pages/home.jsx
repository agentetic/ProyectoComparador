import React from 'react'
import Companies from '../components/Companies/Companies'
import News from '../components/news/news'
import PreguntasFrecuentes from '../components/PreguntasFrecuentes/PreguntasFrecuentes'
import Header from '../components/Header/Header'

const Home = () => {
  return(
    <>
      <Header/>
      <Companies />
      <PreguntasFrecuentes />  
      <News />  
    </>
  )
}

export default Home