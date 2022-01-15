import React from 'react';
import './news.css';

const News = () => {
  const item = [
    {
      id: 1,
      name: 'home',
      url: 'https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg',
    },
    {
      id: 2,
      name: 'home2',
      url: 'https://www.kyoceradocumentsolutions.es/renditions/content/dam/kyocera/es/images/hero/hero-1536x960-5%20Tendencias%20en%20una%20oficina%20moderna%20para%20la%20transformaci%C3%B3n%20digital.jpg/jcr%3Acontent/renditions/cq5dam.resized.img.1536.large.time1575031125173.jpg',
    },
    {
      id: 3,
      name: 'home',
      url: 'https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg',
    },
    {
      id: 4,
      name: 'home2',
      url: 'https://www.kyoceradocumentsolutions.es/renditions/content/dam/kyocera/es/images/hero/hero-1536x960-5%20Tendencias%20en%20una%20oficina%20moderna%20para%20la%20transformaci%C3%B3n%20digital.jpg/jcr%3Acontent/renditions/cq5dam.resized.img.1536.large.time1575031125173.jpg',
    },
    {
      id: 5,
      name: 'home',
      url: 'https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg',
    },
  ];
  return (
    <div className='News'>
      <h2>Ultimas Noticias</h2>
      <section className='News__container'>
        {item.map((item) => (
          <div className='News__post' key={item.id}>
            <img
              src={item.url}
              alt={item.name}
            />
 
            <h3>12/12/2020 - 13.50h</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Suspendisse ut metus.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default News;
