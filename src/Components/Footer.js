import React from 'react';

function Footer() {
  return (
    <div className='m-0 p-0 h-screen'>
      <div className='grid xl:grid-cols-2 maw-w-[1640px] '>
          <div className='text-white p-4'>
            <p className='flex text-start text-3xl font-bold my-5' ><a href='#' ><img src='' alt=''/> FUNDING PIPS</a></p>
            <p className='text-1xl text-slate-600'>
                All content published and distributed by Funding Pips, and its affiliates(collectively, the Company) is to be treated as general information only. None of the information provided by the Company or contained herein is intended as investment advice, an offer or solicitation of an offer to buy or sell, or a recommendation, endorsement, or sponsorship of any security, company, or fund, Funding pips does not act as or conduct services as a broker. Funding pips does not act as or conduct services as a custodian. People who register for our programs do so at their own volition, Purchases of programs should not be considered deposits. All program fees are used for operation costs including, but not limited to, staff, technology and other business related expenses. Nothing contained herein is a solicitation or an offer to buy or sell futures, options, or forex. Past performance is not necessarily indicative of future results.
            </p>
            {/* <div>
                <div><img/></div>
                <div><img/></div>
                <div><img/></div>
                <div><img/></div>
                <div><img/></div>
            </div> */}
          </div>
         <div className='py-8'>
            <div className='px-4'>
              <form className='flex flex-col md:flex-row bg-slate-600 py-7 rounded-xl justify-between'>
                <label className='font-bold text-[15px] px-2 py-3 text-white '>NEWSLETTER SIGNUP</label>
                <input className='p-1 text-[10px] px-4 py-3 pr-8 mx-4 rounded-lg border-[2px] border-zinc-500 bg-black' type='email' placeholder='Enter Your Email'></input>
              </form>
            </div>
           
             <div className='grid grid-cols-2' >
                <div className='text-start p-7'>
                 <ul className='link'>
                    <li className='text-blue-700 py-3 px-2 hover:text-[bisque] font-bold'>LEGAL</li>
                    <li className='text-slate-600 py-3 px-2 hover:text-[bisque]'><a href='#'>Privacy Policy</a></li>
                    <li  className='text-slate-600 py-3 px-2 hover:text-[bisque]'><a href='#'>Terms & Condition</a></li>
                 </ul>
                </div>
                <div className='text-start p-7'>
                  <ul className='link'>
                    <li className='text-blue-700 py-5 px-2 font-bold hover:text-[bisque]'> USEFUL LINKS </li>
                    <li  className='text-slate-600 py-3 px-2 hover:text-[bisque]'><a href='#'>Home</a></li>
                    <li  className='text-slate-600 py-3 px-2 hover:text-[bisque]'><a href='#'> FAQs</a></li>
                    <li  className='text-slate-600 py-3 px-2 hover:text-[bisque]'><a href='#'> Tading Rules</a></li>
                    <li  className='text-slate-600 py-3 px-2 hover:text-[bisque]'><a href='#'> Affiliate Programs</a></li>
                    <li  className='text-slate-600 py-3 px-2 hover:text-[bisque]'><a href='#'> Contact Us</a></li>
                  </ul>
               </div>
              </div>
            </div>
          
        </div>
        <p className='w-full h-[65px] bg-black/90 flex justify-center py-4 mb-[40px]  text-slate-600'>© 2023 Funding Pips. All Rights Reserved.</p>
    </div>
  )
}

export default Footer