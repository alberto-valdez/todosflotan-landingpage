import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { store } from '../firebaseConfig';
import { Spinner } from './Spinner';

export const Articulos = () =>{

    const historial = useHistory();
    const [DataArticulos, setDataArticulos] = useState([]);
    const verArticulo = (e, id) => {
        e.preventDefault(); 
        historial.push('/articulos/'+id);
    }


    useEffect(()=>{
        store.collection('articulos').get().then(snapshot=>{
                const data = [];
                snapshot.forEach((docs)=>{data.push({...docs.data(), id: docs.id})});
                setDataArticulos(data)

        })
    },[])

    if(DataArticulos.length >= 1){

        const DataMap = DataArticulos.map((articulo, i )=> {
            return (
                <section key={i}>
                    <div className='cursor-pointer' onClick={(e)=>verArticulo(e, articulo.id)}>
                        <img className='h-auto w-auto  rounded m-1 hover:opacity-70  transition duration-300 ease-in-out' src={articulo.image} alt="" />
                    </div>
                </section>
            )
        })
        return (
            <div className='pt-9 lg:pt-40 lg:px-40 flex justify-center items-center animate-fadeIn '>
            <div className='flex justify-around lg:px-40 flex-wrap'>
                {DataMap}
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