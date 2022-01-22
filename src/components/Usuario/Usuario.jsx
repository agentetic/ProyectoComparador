import React from 'react';

const Usuario = ({ opcion1, opcion2 }) => (
  <div className='bg-white flex items-center justify-center h-32 usuario '>
    <div className=' flex flex-row justify-end items-center mr-28 w-full max-w-screen-xl'>
      <select className=''>
        <option>{opcion1}</option>
        <option>{opcion2}</option>
      </select>
      <img
        src='https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-user-essential-collection-bearicons-flat-bearicons.png'
        alt='userIcon'
        className='h-8 ml-3'
      />
    </div>
  </div>
);

export default Usuario;
