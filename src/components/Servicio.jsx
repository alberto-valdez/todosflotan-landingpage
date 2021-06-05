import React, { useEffect, useState } from 'react';
import serviciosData from '../assets/servicios.json';
import preciosData from '../assets/precios.json';


export const Servicio = ({match}) => {

    let index = match.params.id;

    const [valueText, setValueText] = useState({})
    
    useEffect(() => {
        setValueText(serviciosData[index])
    },[])

    const precioList = preciosData[index].map((servicios, i)=>{

        return(
                        <div className=' flex justify-center  flex-col'>
                            <div key={i} className='bg-white py-2 w-72 px-2 text-black text-center m-3 rounded'>
                            <h1 className='text-2xl font-bold pt-2'>{servicios.titulo}</h1>
                            <div>
                                <p className='text-xs font-bold '>Desde:</p>
                                <p className='text-2xl font-bold text-red-600'>${servicios.precio}MXN</p>
                            </div>
                           
                            
                        </div>
                        </div>
                 
         
        )

    }) 

    return(
        <div>

            <div className='animate-fadeIn '>
                <div>              
                  <div className=' mt-5 flex justify-center'>
                   <img className=' rounded' src={valueText.img1} alt="" />
                   </div>
               </div>

                <div className='lg:flex lg:justify-center md:px-20 lg:px-40 lg:pt-20 lg:items-center xl:flex-row md:flex-col'>

                    <div className=' xl:w-1/2 md:w-11/12'>
                        <h1 className='text-center lg:text-start text-2xl font-bold pt-2'>{valueText.titulo}</h1>
                      <div className='lg:flex lg:flex-col lg:pt-3'>
                      <p className='text-justify text-xl pt-2 px-3 md:px-0 lg:px-20'>{valueText.desc}</p>
                        <p className='text-justify text-xl pt-4 px-3 md:px-0 lg:px-20'>{valueText.desc2}</p>
                      </div>
                      
                    </div>

                    <div className='py-3 flex justify-center'>
                        <img className='lg:h-full lg:w-auto' src={valueText.img2} alt="" />
                    </div>

                </div>


                <div>
                    <div className='lg:mt-20'>
                        <h1 className='text-center text-2xl font-bold pt-2'>Precios</h1>
                    </div>

                    <div className='flex justify-center flex-col items-center lg:flex-row lg:justify-around lg:flex-wrap lg:mb-9 lg:px-40 lg:py-12'>

                     {precioList}

                    </div>
                </div>

            </div>
            
        </div>
    )
}