import React from 'react'
import Companies from '../components/Companies/Companies'
import News from '../components/news/news'
import Faq from '../components/FAQ/Faq'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'


const Home = () => {
  return(
    <>
      <Header/>
      <Companies />
      <Faq />  
      <News /> 
      <Footer /> 
    </>
  )
}

export default Home