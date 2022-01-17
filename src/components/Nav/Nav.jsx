import React from 'react'

const Nav = ({item1, item2, item3, item4}) => (
    <nav className='flex items-center justify-between px-12 mb-4 mt-0 mx-auto w-fit h-1/4 flex-wrap space-x-0.5 '>
        <div className='flex justify-between items-center font-semibold space-x-24 text-sm nav-content'>
            <a className='ml-5 px-2 py-1 item1' href='#'>{item1}</a>
            <a className='ml-5 px-2 py-1' href='#'>{item2}</a>
            <a className='ml-5 px-2 py-1' href='#'>{item3}</a>
            <a className='ml-5 px-2 py-1' href='#'>{item4}</a>
        </div>
        <div className='text-2xl inline-flex items-center'>
        <img src="https://img.icons8.com/fluency-systems-filled/48/000000/call-male.png" alt='gestorIcon' className='h-8'/>
            <div className='flex flex-col pr-16'>
                <a className='ml-5 px-3 py-1 rounded text-blue-400 text-sm' href="#">HABLA CON UN GESTOR</a>
                <h4 className='ml-5 px-3 py-1 rounded font-bold text-indigo-900 text-xl'>911 111 132</h4>
            </div>
        </div>
    </nav>
)

export default Nav;