import React from 'react';
import fondo from '../assets/video/fondo.gif'
export const Index = () =>{
    return(
    <div class="flex md:items-center justify-center md:h-screen ">
        {/* <video  autoPlay loop muted className='mt-9'>
            <source   class=" z-10  w-auto min-w-full min-h-full max-w-none" src={fondo} type='video/mp4'/>
     </video> */}
     <img className='py-20 xl:py-0  md:py-0 h-auto md:w-full  xl:w-6/12 w-auto' src={fondo} alt="" />
    </div>
    )
}