import React from 'react';
import {SiFacebook, SiInstagram, SiYoutube} from "react-icons/si";
import {AiTwotonePhone, AiFillEnvironment, AiOutlineMail} from "react-icons/ai";
export const Footer = () => {
    return (
        <footer className=' py-10 md:px-40  inset-x-0   bottom-0 self-end '>
            <div className='md:flex md:justify-around'>
                <div className='px-3 md:w-full md:max-w-xl'>
                    <h1 className='text-2xl font-bold'>Acerca de</h1>
                    <hr/>
                    <p className='text-justify  text-xl pt-3'>Todos Flotan Pro es una productora audiovisual especializada en videoclips y batallas de rap. Ha hecho también "Making of", vlogs, podcasts y cortometrajes.
Cuenta con estudio de grabación de audio, beatmakers, diseñadores, MC's, músicos y publicistas.
</p>
                    <div className='flex flex-row justify-start mt-5' >
                        <a href='https://es-la.facebook.com/TodosFlotanPro/' target='_blank' rel="noreferrer" className='px-2  text-2xl' ><SiFacebook/></a>
                        <a href='https://www.instagram.com/todosflotanpro/?hl=es-la' target='_blank' rel="noreferrer" className='px-2  text-2xl' ><SiInstagram/></a>
                        <a href='https://www.youtube.com/user/TodosFlotanProduce' target='_blank' rel="noreferrer" className='px-2  text-2xl' ><SiYoutube/></a>
                    </div>
                </div>

                <div className='px-3 pt-10 md:pt-0 md:w-full md:max-w-xl'>
                    <h1 className='text-2xl font-bold'>Contáctanos</h1>
                    <hr/>
                    <div className='flex flex-row justify-start items-center text-xl py-2'>
                        <p className='pr-2'><AiFillEnvironment/></p><p>Calle James Sullivan 117, San Rafael, Cuauhtémoc, 06470 Ciudad de México, CDMX</p>
                    </div>
                    <div className='flex flex-row justify-start items-center text-xl py-2'>
                        <p className='pr-2'><AiTwotonePhone/></p><p>55 1126 0834</p>
                    </div>

                    <div className='flex flex-row justify-start items-center text-xl py-2'>
                        <p className='pr-2'><AiOutlineMail/></p><p>todosflotanpro@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pt-10'>
                <p className='text-xl'>&copy;Todos Flotan Pro</p>
            </div>
            
        </footer>
    )
}