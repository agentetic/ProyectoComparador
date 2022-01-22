import React from 'react';
import Companies from '../components/Companies/Companies';
import News from '../components/news/news';
import Faq from '../components/FAQ/Faq';

const Home = () => {
  return (
    <div className='flex justify-center bg-gray'>
      <div className='max-w-screen-xl'>
        <Companies />
        <Faq />
        <News />
      </div>
    </div>
  );
};

export default Home;
