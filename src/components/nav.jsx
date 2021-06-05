import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/PRO2.png'

import {SiFacebook, SiInstagram, SiYoutube} from "react-icons/si";
export const  NavBar = () => {

    const [openMenu, setOpenMenu] = useState('hidden');

    const showMenu = ()=>{
        if(openMenu === 'hidden'){
            setOpenMenu('block')
        } else {
            setOpenMenu('hidden');
        }
    }

    return(
    <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div  className='block lg:hidden'>
                    <button onClick={showMenu} className='px-2 text-xl'>Menu</button>
                </div>
            <div >
                <img className='h-32 lg:h-24 w-auto' src={logo} alt="" />
            </div>
            <div className='hidden lg:block' >
            <NavLink activeClassName='text-red-600 text-xl' className='px-2 text-xl' to='/index'>Inicio</NavLink>
            <NavLink activeClassName='text-red-600 text-xl' className='px-2 text-xl' to='/artistas'>Artistas</NavLink>
            <NavLink activeClassName='text-red-600 text-xl' className='px-2 text-xl' to='/servicios'>Servicios</NavLink>
            <NavLink activeClassName='text-red-600 text-xl' className='px-2 text-xl' to='/articulos'>Artículos</NavLink>
            <NavLink activeClassName='text-red-600 text-xl' className='px-2 text-xl' to='/contacto'>Contacto</NavLink>
            </div>

            <div className='flex flex-row' >
            <a href='https://es-la.facebook.com/TodosFlotanPro/' target='_blank' rel="noreferrer"  className='px-2  text-xl' ><SiFacebook/></a>
            <a href='https://www.instagram.com/todosflotanpro/?hl=es-la' target='_blank' rel="noreferrer"  className='px-2  text-xl' ><SiInstagram/></a>
            <a href='https://www.youtube.com/user/TodosFlotanProduce'  target='_blank' rel="noreferrer" className='px-2  text-xl' ><SiYoutube/></a>
            </div>
            </div>

            <div  className={`${openMenu} flex flex-col p-3 lg:hidden`}>
            <NavLink activeClassName='text-red-600 text-lg' className='mb-1 text-lg' to='/index'>Inicio</NavLink>
            <NavLink activeClassName='text-red-600 text-lg' className='mb-1 text-lg' to='/artistas'>Artistas</NavLink>
            <NavLink activeClassName='text-red-600 text-lg' className='mb-1 text-lg' to='/servicios'>Servicios</NavLink>
            <NavLink activeClassName='text-red-600 text-lg' className='mb-1 text-lg' to='/articulos'>Artículos</NavLink>
            <NavLink activeClassName='text-red-600 text-lg' className='mb-1 text-lg' to='/contacto'>Contacto</NavLink>

            </div>
        </div>
    </nav>

    )
}