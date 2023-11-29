import React from 'react';
import objectives from '../images/objectives.webp';


function Objectives() {
    return (
      <div className='max-w-[1640px] h-[80vh] bg-blue-600 p-5 justify-center rounded-2xl mt-16 mx-2 flex flex-col lg:grid lg:grid-cols-2'>
        <div className='text-start flex flex-col justify-center'>
            <h1 className='text-3xl font-bold font-sans text-[bisque] '>Stay updated with our in depth trading rules.</h1>
            <p className='py-5 text-1xl text-[bisque]'>Trading Objectives are a key element to evaluate a trader's skills, meeting the trading objectives proves that the trader is disciplined and consistent.</p>
            <p className='text-start'><button className='py-4 px-3 bg-[bisque] hover:bg-black/70 hover:text-white rounded-xl'>Trading Rules</button></p>
            
        </div>
        <div className='flex justify-center py-6'>
             <img className='m-auto' src= {objectives} alt='objectives'/>
        </div>
      </div>
    )
}

export default Objectives