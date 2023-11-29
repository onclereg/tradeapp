import React from 'react';
import leverage from '../images/leverage.webp';
import liquidity from '../images/liquidity.webp';
import world from '../images/world.webp';
import spreads from '../images/spreads.webp';
import commissions from '../images/commissions.webp';
import instruments from '../images/instruments.webp';


function Qualities() {
  return (
    <div className='flex flex-col max-w-[1640px] justify-between py-[75px] px-4'>
        <div className='flex flex-col text-white justify-around items-center lg:flex md:flex-row md:flex-wrap'>
            <div className='text-center items-center border-2 flex flex-col rounded-2xl p-4 border-zinc-600 w-[180px] h-[200px] my-6 md:mx-6 xl:mx-2'>
                <img className='w-[70px]' src={leverage} alt='leverage'/>
                <p>Leverage FX 1:100 , Crypto 1:2, Indices 1:30, Metals & Energies 1:50</p>
            </div>
            <div className='text-center items-center border-2 flex flex-col rounded-2xl p-4 border-zinc-600 w-[180px] h-[200px] my-6 md:mx-6 xl:mx-2'>
                <img className='w-[70px]' src={liquidity} alt='liquidity'/>
                <p>Tier 1 Banks With Deep Pool Liquidity</p>
            </div>
            <div className='text-center items-center border-2 flex flex-col rounded-2xl p-4 border-zinc-600 w-[180px] h-[200px] my-6 md:mx-6 xl:mx-2'>
                <img className='w-[70px]' src={world} alt='world'/>
                <p>All Major WorldMarkets</p>
            </div>
            <div className='text-center items-center border-2 flex flex-col rounded-2xl p-4 border-zinc-600 w-[180px] h-[200px] my-6  md:mx-6 xl:mx-2'>
                <img className='w-[70px]' src={spreads} alt='spreads'/>
                <p>Raw Spreads</p>
            </div>
            <div className='text-center items-center border-2 flex flex-col rounded-2xl p-4 border-zinc-600 w-[180px] h-[200px] my-6  md:mx-6 xl:mx-2'>
                <img className='w-[70px]' src={commissions} alt='commissions'/>
                <p>Commission 3$ Per One Lot Standard. Indices Are Commission Free.</p>
            </div>
            <div className='text-center items-center border-2 flex flex-col rounded-2xl p-4 border-zinc-600 w-[180px] h-[200px] my-6  md:mx-6 xl:mx-2'>
                <img className='w-[70px]' src={instruments} alt='instruments'/>
                <p>Up To 26,000+Instruments</p>
            </div>
        </div>
        <div className='flex flex-col text-start text-white py-8 my-10 bg-blue-600 px-3 rounded-xl'>
            <h1 className='font-bold text-3xl py-4'>Join A Team Of Skillful Traders</h1>
            <p className='py-4'>
                When it comes to trading we believe in consistency and risk management, which are the discipline indicator, the rest of the skills can be developed. Please keep that in mind! We are seeking real traders not bounty hunters.
            </p>
            <div>
                <button className='py-4 mx-2 px-3 bg-blue-900 text-white rounded-xl'>Buy Challenges</button>
                <button className='py-4 mx-2 px-3 bg-white text-black rounded-xl'>Join Discord</button>
            </div>
        </div>
    </div>
  )
}

export default Qualities