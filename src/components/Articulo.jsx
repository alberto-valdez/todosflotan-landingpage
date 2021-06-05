import React, { useEffect, useState } from 'react';

import {SiFacebook, SiInstagram} from "react-icons/si";
import { store } from '../firebaseConfig';
import { Spinner } from './Spinner';
export const Articulo = ({match}) => {
    let id = match.params.id;
    const [articuloData, setArticuloData] = useState();


useEffect(()=>{
     store.collection('articulos').where('__name__', '==', `${id}`).get().then(snapshot=>{
        setArticuloData(snapshot.docs[0].data())
    })
},[])


if(articuloData){
    return(
        <div className='mt-40 lg:px-40'>
            <div className='flex justify-center flex-col  lg:flex-row lg:justify-around items-center animate-fadeIn'>
                <div>
                    <img className='h-96  lg:h-auto md:max-w-lg  xl:max-w-3xl' src={articuloData.image} alt="" />
                </div>
                <div className='px-4 mt-3 lg:mt-0'>
                    <h1 className='text-2xl font-bold'>{articuloData.nombre}</h1>
                    <p>{articuloData.detalle} </p>
                    <hr />
                    <p className='font-bold text-red-500 text-2xl mt-2'>${articuloData.precio} MXN</p>
                    <p className='mt-2'>Color: {articuloData.color}</p>
                    <p>Tallas: {articuloData.tallas}</p>
                    <p className='text-xs'>Materiales: {articuloData.materiales}</p>
                    <hr />
                    <div className='flex justify-center flex-col'>
                        <h1 className='text-center text-2xl mt-2'>Obten más información sobre este articulo aqui</h1>
                    {/* <button className='bg-red-500 hover:bg-red-700  mx-24 mt-4 font-bold py-2 px-4 rounded'>Comprar </button> */}
                    <div className='flex justify-around mt-5'>
                                <a href='https://es-la.facebook.com/TodosFlotanPro/' target='_blank' rel="noreferrer" className='text-2xl'><SiFacebook/></a>
                                <a href='https://www.instagram.com/todosflotanpro/?hl=es-la' target='_blank' rel="noreferrer" className='text-2xl'><SiInstagram/></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
} else {
    return(
        <div>
          
        <Spinner/>

         </div>
    )
}
   
}