import React from 'react';
import { NavLink } from 'react-router-dom';

export const Servicios = () => {


    return (
        <div>
          <div className='flex justify-center flex-col lg:justify-around lg:flex-row flex-wrap lg:px-40 animate-fadeIn '>
                    <div>

                    <div className='relative  flex items-center justify-center h-screen mb-2 overflow-hidden '>
                                    <div className='relative z-30 '>
                                        <div className='bg-white px-4 py-4 w-96 rounded flex justify-center flex-col '>
                                        <h1 className='text-black text-xl text-center font-bold'>Estudio de grabación</h1>
                                        <p className='text-black text-center text-sm mt-3'>¿Necesitas un equipo que te ayude a completar tus ideas?</p>
                                        <NavLink  to='/servicios/0'className='bg-red-500 hover:bg-red-700 text-center  mx-24 mt-4 font-bold py-2 px-4 rounded'>Ver más</NavLink >
                                        </div>
                                    </div>
                                    <div className='absolute z-10 '>
                                    <img className='image-h  w-96 rounded' src="https://i.pinimg.com/originals/89/2f/3c/892f3c0a2784c715b9cc6ca232dca57e.jpg" alt="" />
                                    </div>
                                </div>
                    </div>
                            

                    <div>
                    <div className='relative  flex items-center justify-center h-screen mb-2 overflow-hidden '>
                                    <div className='relative z-30 '>
                                        <div className='bg-white px-4 py-4 w-96 rounded flex justify-center flex-col '>
                                        <h1 className='text-black text-xl text-center font-bold'>Producción multimedia</h1>
                                        <p className='text-black text-center text-sm mt-3'>¿Necesitas videos en tu proyectos o podcasts?</p>
                                        <NavLink  to='/servicios/1'className='bg-red-500 hover:bg-red-700 text-center  mx-24 mt-4 font-bold py-2 px-4 rounded'>Ver más</NavLink >

                                        </div>
                                    </div>
                                    <div className='absolute z-10 '>
                                    <img className='image-h  w-96 rounded' src="https://images.pexels.com/photos/3062553/pexels-photo-3062553.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />

                                    </div>
                                </div>
                    </div>
                                
                    <div>

                    <div className='relative  flex items-center justify-center h-screen mb-2 overflow-hidden '>
                                    <div className='relative z-30 '>
                                        <div className='bg-white px-4 py-4 w-96 rounded flex justify-center flex-col '>
                                        <h1 className='text-black text-xl text-center font-bold'>Diseño grafico</h1>
                                        <p className='text-black text-center text-sm mt-3'>Agrega una imagen a tu proyecto y distirbuyelo por internet</p>
                                        <NavLink  to='/servicios/2'className='bg-red-500 hover:bg-red-700 text-center  mx-24 mt-4 font-bold py-2 px-4 rounded'>Ver más</NavLink >

                                        </div>
                                    </div>
                                    <div className='absolute z-10 '>
                                    <img className='image-h  w-96 rounded'src="https://i.pinimg.com/736x/a4/bb/65/a4bb6591eb49ced9d4162c6a98bc0d82.jpg"  alt="" />

                                    </div>
                                </div>
                    </div>



          </div>
        </div>
    )
}