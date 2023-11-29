import React from 'react';
import download from '../images/download.png';

function NavBar() {
  return (
    <div className='bg-black py-2 px-4 h-[100px] fixed w-full flex '>
        <nav className='flex justify-between items-center w-full'>
            <div className='flex justify-between text-white items-center px-1 md:px-3 m-3'>
                <img src={download} alt='logo' className='fill-white w-[100px] h-[100px] px-2 '/> 
                <h3 className='text-white md:text-2xl font-bold'>FUNDING PIPS</h3> 
            </div>
            <div>
                <ul className=' hidden lg:flex justify-around text-center text-1xl font-bold  '>
                    <li><a className='text-blue-700 hover:text-white px-4 py-2 hover:bg-blue-700 hover:rounded-xl hover:scale-105 hover:duration-300' href='#'> HOME</a></li>
                    <li><a className='text-slate-300 px-4 py-2  hover:bg-blue-700 hover:rounded-xl hover:scale-105 hover:duration-300' href='#'> TRADING RULES</a></li>
                    <li><a className='text-slate-300 px-4 py-2  hover:bg-blue-700 hover:rounded-xl hover:scale-105 hover:duration-300' href='#'> FAQ</a></li>
                    <li><a className='text-slate-300 px-4 py-2  hover:bg-blue-700 hover:rounded-xl hover:scale-105 hover:duration-300' href='#'> CONTACT US</a></li>
                    <li><a className='text-white px-4 py-2 mx-2 hover:text-blue-600 bg-blue-600 rounded-xl hover:bg-black/90 ' href='#'> BUY CHALLENGE</a></li>
                    <li><a className='text-blue-700 hover:text-white px-4 py-2  hover:bg-blue-700 hover:rounded-xl hover:scale-105 hover:duration-300' href='#'> DASHBOARD</a></li>
                </ul>
            </div>
            {/* <div>
                   <img/>
            </div>    */}
        </nav>
    </div>
  )
}

export default NavBar