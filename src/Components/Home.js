import React from 'react';
import graph from '../images/graph.webp';

function Home() {
  return (
    <div className='max-w-[1640px] h-screen pt-[10vh] mb-4 lg:pt-[35vh] px-4 flex flex-col  lg:flex-row  justify-around lg:justify-between '>
        <div className='flex flex-col '>
            <div className='flex flex-col pt-20 pr-2 '>
                <h1>
                    <span className='text-white font-bold text-5xl lg:text-7xl xl:text-8xl'>Your Skill Is</span>
                </h1>
                <h1><span className='text-blue-700 font-bold text-5xl py-3 lg:text-7xl xl:text-8xl'> Our Capital.</span>
                </h1>
                <p className='text-white text-center lg:text-start font-bold  px-2 py-4'>We risk while you recieve 90% of the profit</p>
            </div>
            <div className='flex  justify-around px-2'>
                <button className='bg-blue-700 hover:bg-white hover:text-blue-700 hover:scale-110 hover:duration-500 font-bold px-1 sm:px-3 lg:px-6 py-4 mx-1 rounded-xl '>Buy Challenge</button>
                <button className='bg-white hover:bg-blue-700 hover:text-white hover:scale-110 hover:duration-500  font-bold px-1 sm:px-3 lg:px-6 py-4 mx-1 rounded-xl '> Join Discord</button>
                <button className='bg-white hover:bg-blue-700 hover:text-white hover:scale-110 hover:duration-500  font-bold px-1 sm:px-3 lg:px-6 mx-1 py-4 rounded-xl '>Join Competition</button>
            </div>
        </div>
        <div className='py-5'>
            <div className='px-auto justify-center items-center flex'>
                <img className='w-[680px] px-4' src={graph} alt='graph'/>
            </div>
        </div>
    </div>
  )
}

export default Home