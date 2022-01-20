import React from 'react';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import Filter from '../components/filter/filter';

import './result.css';

const Result = () => {
  return (
    <div className='Result'>
      <Filter />
      <ServiceSection />
    </div>
  );
};

export default Result;
