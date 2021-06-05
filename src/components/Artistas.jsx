import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { store } from '../firebaseConfig';
import { Spinner } from './Spinner';



export const Artistas = () => {
    
    const historial = useHistory();
    const [artistaData, setArtistaData] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(()=>{
     store.collection('artistas').get().then(snapshot=>{
         const data = [];
         snapshot.forEach(doc=>data.push({...doc.data(), id:doc.id}))
         setArtistaData(data);
     })
     console.log(artistaData)

    },[])

    const selectArtista = (e, artistaid) =>  {
        e.preventDefault();
        console.log('artista seleccionado', artistaid);
        historial.push('/artistas/artista/'+artistaid)
    }

    if(artistaData.length > 1){

        const dataMap = artistaData.filter((art)=>{
            if(search == ''){
                return art;
            } else if(art.tipo.toLowerCase().includes(search.toLowerCase())){
                return art;
            }
        }).map((artista, i)=>{
            return (
                <section className='m-2'>
                    <div className='w-full p-3 flex flex-col cursor-pointer' onClick={(e)=>selectArtista(e, artista.id)}>
                        <div className='flex justify-center'>
                        <img className='h-64 w-64  rounded' src={artista.image} alt={artista.name} />
                        </div>
                        <div className='flex justify-center lg:justify-start'>
                        <h1 className='text-xl '>{artista.nombre}</h1>
                        </div>
                    
                    </div>
                </section>
            )
        })
        return(
            <div className='lg:h-screen h-full mb-20 px-2 mt-3 lg:mt-20 lg:px-20 animate-fadeIn '>
            <div className='flex justify-between items-baseline px-0 lg:px-72'>
                <h1 className='text-2xl lg:text-5xl font-bold'>Artistas</h1>
                <select  className='bg-black' onChange={(e)=>{setSearch(e.target.value)}}>
                    <option value='' selected>Todos</option>
                    <option value='mc' >Cantantes</option>
                    <option value='Beatmaker' >Beatmakers</option>
                    <option value='Productor' >Producores</option>
                </select>
            </div>
    
            <div className='flex flex-col lg:flex-row justify-center px-0 lg:px-40  lg:flex-wrap'>
                {dataMap}
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