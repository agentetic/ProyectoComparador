import React from 'react'

const Usuario = ({opcion1, opcion2}) => (
    <div className='flex flex-row justify-end mr-16 pr-10'>
        <select>
            <option>{opcion1}</option>
            <option>{opcion2}</option>
        </select>
        <img src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/32/000000/external-user-back-to-school-kmg-design-outline-color-kmg-design.png" alt='userIcon' className='h-8'/>
    </div>
)

export default Usuario;