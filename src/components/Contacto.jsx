import React, { useState } from 'react';
import { store } from '../firebaseConfig';

export const Contacto = () => {

    const [msg, setMsg] = useState({
        nombre:'',
        correo:'',
        comentario:''
    })

    const [enviado, setEnviado] = useState();


    const enviar = (e) =>{
        e.preventDefault();
      
        store.collection('contacto').add(msg).then(res=>{
            setEnviado('enviado')
            e.target.reset();
        }).catch(err=>{setEnviado('no')})
    }

    return(
        <div className=''>
            { enviado == 'enviado' ? (
                <div className='block py-3 bg-green-500 flex justify-center'>
                    <h1>Mensaje enviado exitosamente</h1>
                </div>

            ) : (
                <span>

                </span>
                )
            }

            { enviado == 'no' ? (
               <div className='block py-3 bg-red-500 flex justify-center'>
               <h1>No pudimos mandar el mensaje. Intente más tarde</h1>
           </div>

            ) : (
                <span>

                </span>
                )
            }
            <div className='animate-fadeIn '> 
            <div className='flex justify-center items-center h-screen overflow'>        
            <div className='bg-white text-black flex md:flex-row rounded-xl p-8 '>
            <div className='hidden md:block'>
                <img className='h-96 rounded-xl' src="https://scontent.fpaz2-1.fna.fbcdn.net/v/t1.6435-9/139034997_10160466310276978_1212073405756709916_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=jOLeTb2XHOwAX9H42T0&_nc_ht=scontent.fpaz2-1.fna&oh=20e92fb44c1e493271f5eba22eba43d7&oe=60D85616" alt="" />
            </div>
            <form action="" onSubmit={enviar} className='flex flex-col space-y-4   md:bg-white md:p-5 md:rounded'>
                                <div>
                                <label className='text-sm'>Nombre </label>
                                <input type="text" placeholder='Escribe aqui tu nombre' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400' name='name' onChange={(e)=>{setMsg({...msg, nombre:e.target.value})}}  required/>
                                </div>

                                <div>
                                <label className='text-sm'>Correo </label>
                                <input type="email" placeholder='Escribe tu correo aqui' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400' name='name' onChange={(e)=>{setMsg({...msg, correo:e.target.value})}}  required/>
                                </div>

                                <div>
                                <label className='text-sm'>Comentario</label>
                                <textarea  placeholder='Dejanos saber en que podemos ayudarte' rows='4' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400' onChange={(e)=>{setMsg({...msg, comentario:e.target.value})}} name='message' required></textarea>
                                </div>

                                <button type='submit' className='inline-block text-white bg-red-500 font-bold rounded-md px-6 py-2'>Enviar</button>
                    </form>
            </div>
            </div>
            </div>
        </div>
    )
}