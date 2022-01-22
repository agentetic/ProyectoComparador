import React from 'react';

const Nav = ({ item1, item2, item3, item4 }) => (
  <nav className='max-w-screen-xl bg-backgroundMain w-full flex border-b-2 border-white 	'>
    <div className='flex justify-center   font-semibold  w-9/12	 text-sm nav-content'>
      <a
        className='text-lg	w-1/4	 flex justify-center items-center hover:bg-gray  item1 '
        href='#'
      >
        {item1}
      </a>
      <a
        className='text-lg	w-1/4	 flex justify-center items-center hover:bg-gray '
        href='#'
      >
        {item2}
      </a>
      <a
        className='text-lg	w-1/4	 flex justify-center items-center hover:bg-gray'
        href='#'
      >
        {item3}
      </a>
      <a
        className='text-lg	w-1/4	 flex justify-center items-center hover:bg-gray'
        href='#'
      >
        {item4}
      </a>
    </div>
    <div className='text-2xl inline-flex items-center w-3/12 px-3 py-4	border-l-2	'>
      <img
        src='https://img.icons8.com/fluency-systems-filled/48/000000/call-male.png'
        alt='gestorIcon'
        className='h-8'
      />
      <div className='flex flex-col '>
        <a
          className='ml-5 px-3 rounded text-blue-400 text-base	font-bold'
          href='#'
        >
          HABLA CON UN GESTOR
        </a>
        <h4 className='ml-5 px-3 py-1 rounded font-bold text-indigo-900 text-xl'>
          911 111 132
        </h4>
      </div>
    </div>
  </nav>
);

export default Nav;
