import React from 'react'
import graph2 from '../images/graph2.webp';
import Bloomberg from './Bloomberg';

function Instrument() {
  return (
    <div className='max-w-[1640px] ' >
        <Bloomberg/>
        <div className='h-screen w-full my-6 justify-center flex flex-col lg:grid lg:grid-cols-2 lg:gap-5 lg:justify-evenly'>
            <div className='p-5 '>
                <img className='' src={graph2} alt='graph'/>
            </div>
            <div className='p-5 flex flex-col text-start'>
              <h1 className='text-2xl lg:text-4xl py-2 text-[bisque] font-bold'>
                   Built By Traders  For  Traders.
              </h1>
              <h1 className='text-2xl lg:text-4xl py-2 text-[bisque] font-bold'>
                 Your Trading Ideas, Our Risk.
              </h1>
                <p className='text-1xl text-slate-700'>Funding Pips believes that traders go through three main levels in their careers, Student - Practitioner - Master, with FP's in house-built two phases evaluation (Student - Practitioner) and funded (Master), which's built to find trading talents while helping them get through their funding problems, by offering them the possibility to trade up $400.000.</p>
            </div>
        </div>
    </div>
  )
}

export default Instrument