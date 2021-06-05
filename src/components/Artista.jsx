import React, { useEffect, useState } from 'react';
import {SiFacebook, SiInstagram, SiSoundcloud, SiSpotify, SiApplemusic} from "react-icons/si";
import { useHistory } from 'react-router-dom';
import { store } from '../firebaseConfig';
import { Spinner } from './Spinner';
export const Artista = ({match}) => {

    let id = match.params.id;
    const [artista, setArtista] = useState();
  
    const [albums, setAlbums] = useState([]);
    const historial = useHistory();

    const getAlbums = () => {
       
        store.collection('artista').doc(`${id}`).collection('albums').get().then(snapshot=>{
            const data = []
            snapshot.forEach((docs)=>{data.push({...docs.data(), id: docs.id})});
            setAlbums(data);
        })
    }

    const getArtista = () => {
        store.collection('artistas').where('__name__', '==', `${id}`).get().then(snapshot=>{
            setArtista(snapshot.docs[0].data());
        })
    }

    useEffect(()=>{
        getArtista()
        getAlbums()
    },[])

    const albumsMap = albums.map((album, i)=>{
        return(
            <div key={i} className='px-5 mt-2 p-3 bg-white text-black lg:w-96 items-center rounded flex flex-row justify-between'>
                <img src={album.image} className='h-14 w-14' alt="" />
            <div>
                <p>{album.album}</p>
                <p>{album.lanzamiento}</p>
            </div>

            <button onClick={()=>{
                    historial.push({
                        pathname:`/artistas/artista/album/${id}/${album.id}`,
                    })
                }}>
                Ver
            </button>
            {/* <NavLink to={'/artistas/artista/album/'+album.id}>Ver</NavLink> */}
        </div>
        )
 
    })

    if(artista){
        return (
            <div className='lg:h-screen'>
              <div className='lg:mt-40 animate-fadeIn'>
                    <div className='flex flex-col lg:flex-row-reverse lg:justify-around lg:px-40'>
                        <div className='flex justify-center items-center mt-5 lg:pr-20 '>
                            <img className='rounded-full h-64 lg:h-52 w-auto ' src={artista.image} alt="" />
                        </div>
                    
                        <div className='flex justify-center mt-5 items-center'>
                            <h1 className='text-3xl lg:text-5xl text-center lg:text-left'>{artista.nombre}</h1>
                        </div>
                    </div>
                  
                    
                        <div className='px-4 mt-3 flex flex-col lg:justify-around lg:flex-row-reverse lg:px-40 lg:mt-20'>
                            <div className='mt-3'>
                            <hr className='mb-2 hidden lg:block'/>
                            <div  >
                                <h2 className='text-xl font-bold'>Biografía</h2>
                            </div>
                                <p htmlFor="" className='text-justify w-full lg:w-96 lg:mt-5'>
                                    {artista.descripcion}
                                </p>
                                <div className='flex justify-around flex-wrap mt-5'>
                                    <a href={artista.facebook} target='_blank'  rel="noreferrer" className='text-2xl'><SiFacebook/></a>
                                    <a href={artista.instagram} target='_blank'  rel="noreferrer" className='text-2xl'><SiInstagram/></a>
                                    <a href={artista.soundcloud}className='text-2xl' rel="noreferrer" ><SiSoundcloud/></a>
                                    <a href={artista.soundcloud}className='text-2xl' rel="noreferrer" ><SiSpotify/></a>
                                    <a href={artista.soundcloud}className='text-2xl' rel="noreferrer" ><SiApplemusic/></a>
                                </div>
                            </div>
    
    
                            <div className='mt-3'>
                                <hr className='mb-2 hidden lg:block'/>
                            <div >
                                <h2 className='text-xl font-bold'>Discografía</h2>
                            </div>
                                {albumsMap}
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