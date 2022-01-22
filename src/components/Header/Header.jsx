import React from 'react';
import Nav from '../Nav/Nav';
import Usuario from '../Usuario/Usuario';
import './Header.css';

const Header = () => (
  <div className='Header'>
    <Usuario opcion1={'Mi cuenta'} opcion2={'Registrarse'} />
    <div className='flex justify-center '>
      <Nav
        item1={'Energia'}
        item2={'Seguros'}
        item3={'Internet y telefonia'}
        item4={'Finanzas'}
      />
    </div>
  </div>
);

export default Header;
