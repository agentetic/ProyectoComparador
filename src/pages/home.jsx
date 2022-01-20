import React from 'react';
import Companies from '../components/Companies/Companies';
import News from '../components/news/news';
import Faq from '../components/FAQ/Faq';

const Home = () => {
  return (
    <>
      <Companies />
      <Faq />
      <News />
    </>
  );
};

export default Home;
