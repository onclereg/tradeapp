import React from 'react'
import atm from '../images/atm.webp';
import badge from '../images/badge.webp';
import hourglass from '../images/hourglass.webp';
import rocket from '../images/rocket.webp';


function Offers() {
  return (
    <div className='max-w-[1640px] my-2 mx-2 py-2 px-2 grid lg:grid-cols-2 gap-5'>
        <div className='flex flex-col text-center items-center border-2 p-4 rounded-2xl border-zinc-500'>
            <img className='w-[200px]' src={badge} alt='badge'/>
            <h1 className='font-bold py-3 px-auto text-3xl text-[bisque]'>Trade the way you want</h1>
            <p className=' text-1xl py-3 px-auto text-[#c6c0b9]'>Use an "EA", hold during news, hold trades over the weekend and trade lot sizes as big as the leverage allows for.</p>
        </div>
        <div className='flex flex-col text-center items-center border-2 p-4 rounded-2xl border-zinc-500'>
            <img className='w-[200px]' src={hourglass} alt='hourglass'/>
            <h1 className='font-bold py-3 px-auto text-3xl text-[bisque]'>Unlimited Trading Days</h1>
            <p className=' text-1xl py-3 px-auto text-[#c6c0b9]'>We understand that putting a time limit creates a stressful environment, therefore we have no minimum or maximum limit on trading days. Take all the time you need.</p>
        </div>
        <div className='flex flex-col text-center items-center border-2 p-4 rounded-2xl border-zinc-500'>
            <img className='w-[200px]' src={rocket} alt='rocket'/>
            <h1 className='font-bold py-3 px-auto text-3xl text-[bisque]'>Scaling Plan</h1>
            <p className=' text-1xl py-3 px-auto text-[#c6c0b9]'>We increase the balance every month for the first 3 months based on the initial balance. The balance will be increased after the first, second and third month by 10%, 15% and 20% respectively. On the fourth month, the balance will be DOUBLED and the trader receives a Hot Seat in the firm to trade up to $2M.</p>
        </div>
        <div className='flex flex-col text-center items-center border-2 p-4 rounded-2xl border-zinc-500'>
            <img className='w-[200px]' src={atm} alt='money'/>
            <h1 className='font-bold py-3 px-auto text-3xl text-[bisque]'>Payout System</h1>
            <p className=' text-1xl py-3 px-auto text-[#c6c0b9]'>Receive greater possibilities for withdrawing profits the longer you trade with us. Receive your payouts on a 5 day basis with a 80% profit split. Once a trader earns a Hot Seat in our firm, the trader receives on-demand payouts with a 90% profit split. The payouts are processed using Bank transfer and crypto.</p>
        </div>
    </div>
  )
}

export default Offers