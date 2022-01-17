import React from 'react'
import Nav from '../Nav/Nav';
import Usuario from '../Usuario/Usuario';
import './Header.css'

const Header = () => (
    <div className='mt-20 bg-gray-100 flex-wrap header'>
        <Usuario opcion1={'Mi cuenta'} opcion2={'Registrarse'} />
        <Nav item1={'Energia'} item2={'Seguros'} item3={'Internet y telefonia'} item4={'Finanzas'}/>
    </div>
)

export default Header;