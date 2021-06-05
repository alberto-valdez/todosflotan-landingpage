import React, { useEffect, useState } from 'react';

import {SiApplemusic, SiSpotify} from "react-icons/si";
import { store } from '../firebaseConfig';
import { Spinner } from './Spinner';

export const Album = ({match}) => {
    let id = match.params.id;
    let idAlbum = match.params.idalbum

    const [albums, setAlbums] = useState();
    
    

    useEffect(() => {
        store.collection(`artista/${id}/albums`).where("__name__", "==", `${idAlbum}`).get().then(snapshot=>{
        
            setAlbums(snapshot.docs[0].data());
        });
    },[])

    if(albums){
        return (
            <div>
    
                <div className='mt-20 lg:mt-0 lg:h-screen flex justify-center lg:justify-evenly items-center flex-col lg:flex-row lg:px-40 animate-fadeIn'>
    
                <div className='flex justify-center flex-col '>
                    <div className='flex justify-center '>
                        <img className='rounded h-64 w-auto' src={albums.image}  alt="" />
                    </div>
                    <div className='flex justify-center flex-col'>
                        <h1 className='text-center text-2xl font-bold'>{albums.album}</h1>
                        <h2 className='text-center text-xl'>{albums.artista}</h2>
                        <h3 className='text-center text-lg'>{albums.lanzamiento}</h3>
                    </div>
                </div>
    
    
                <div className='flex justify-center flex-col items-center '>
                    {   albums.appleMusic != '' ? (  
                    <div className='flex justify-around bg-white text-black w-64 lg:w-96 rounded m-3 py-4  px-4 '>
                        <div className='flex justify- flex-row items-center'>
                            <SiApplemusic/>
                        <h1 className='pl-2'>Apple Music</h1>
                        </div>
                        <a href={albums.appleMusic} target='_blank' rel="noreferrer" className='cursor-pointer'> Escuchar</a>
                    </div>
                    ) : (
                        <span></span>
                    )

                    }
                   
                    { albums.spotify != '' ? (    
                    <div className='flex justify-around bg-white text-black w-64 lg:w-96 rounded m-3 py-4  px-4 '>
                        <div className='flex justify- flex-row items-center'>
                                <SiSpotify/>
                            <h1 className='pl-2'>Spotify </h1>
                        </div>
                        <a href={albums.spotify} target='_blank' rel="noreferrer" className='pl-10 cursor-pointer'> Escuchar</a>
                    </div>
                    ) : (
                        <span></span>
                    )}
    
                 
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