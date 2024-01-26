import React from 'react'
import PropTypes from 'prop-types'
import svelte from '../svelte.svg'
import first from '../111.png'
import second from '../222.png'
import third from '../333.png'
import earth from '../earth.png'
import frogment from '../frogment.png'


export default function Home(props) {
  return (
    <>
      <div className="flex justify-center align-middle w-fit mt-24 mr-80 ml-80 text-center">
        <p className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-violet-500'>Monty is an open-source self-hosted status monitoring tool</p>
      </div>
      <p className='text-center m-5'>Let your users know whats going on.</p>
      <div className="flex justify-between mr-40 ml-40 mt-10 align-middle">
            <p className='border border-gray-400 pr-7 pl-7 pt-1 text-xs rounded-3xl'>Availability per component</p>
            <div>
                <ul className='flex gap-4 border border-grey-400 pr-6 pl-6 rounded-3xl'>
                    <li><i class="fa fa-circle text-green-500 text-xs"></i> Up</li>
                    <li><i class="fa fa-circle text-yellow-500 text-xs"></i> Degraded</li>
                    <li><i class="fa fa-circle text-red-500 text-xs"></i> Down</li>
                </ul>
            </div>
      </div>
      <div className="border border-gray-400 mr-40 ml-40 mt-5 rounded-xl">    
            <div className='p-8 flex border-b border-gray-400'>
                <div className='mr-16'>
                    <div className='flex'>
                        <img src={svelte} alt="svelte logo" /> 
                        <p className='font-bold text-xl'>Svelte Website</p>
                    </div>
                    <p className='text-xs mt-3'>Recent incidents <i class="fa fa-arrow-right"></i> </p>
                </div>

                <div>   
                    <div className='flex justify-between'>
                        <div className='flex gap-5'>
                            <p className='font-medium text-xs border border-grey-400 pl-3 pr-3 rounded-3xl bg-white text-black'>90 Day &nbsp;&nbsp;&nbsp;90 99.9890%</p>
                            <p className=' font-medium text-xs border border-grey-400 pl-3 pr-3 rounded-3xl'>today&nbsp;&nbsp; 100% </p>
                        </div>
                        <div>
                            <p className='text-green-500 font-bold text-sm'>Status OK</p>
                        </div>
                    </div>
                    <div className='mt-1'>
                        <img src={first} alt='1111111'/>
                    </div>
                </div> 
            </div>




            <div className='p-8 flex border-b border-gray-400'>
                <div className='mr-32'>
                    <div className='flex'>
                        <img src={earth} alt="earth logo" /> 
                        <p className='font-bold text-xl'>Earth</p>
                    </div>
                    <p className='text-xs mt-3'>Recent incidents <i class="fa fa-arrow-right"></i> </p>
                </div>

                <div>   
                    <div className='flex justify-between'>
                        <div className='flex gap-5'>
                            <p className='font-medium text-xs border border-grey-400 pl-3 pr-3 rounded-3xl bg-white text-black'>90 Day &nbsp;&nbsp;&nbsp;90 99.9648%</p>
                            <p className=' font-medium text-xs border border-grey-400 pl-3 pr-3 rounded-3xl'>today&nbsp;&nbsp; 100% </p>
                        </div>
                        <div>
                            <p className='text-green-500 font-bold text-sm'>Status OK</p>
                        </div>
                    </div>
                    <div className='mt-1'>
                        <img src={second} alt='222222'/>
                    </div>
                </div> 
            </div>




            <div className='p-8 flex'>
                <div className='mr-28'>
                    <div className='flex'>
                        <img src={frogment} alt="frogment logo" /> 
                        <p className='font-bold text-xl'>Frogment</p>
                    </div>
                    <p className='text-xs mt-3'>Recent incidents <i class="fa fa-arrow-right"></i> </p>
                </div>

                <div>   
                    <div className='flex justify-between'>
                        <div className='flex gap-5'>
                            <p className='font-medium text-xs border border-grey-400 pl-3 pr-3 rounded-3xl bg-white text-black'>90 Day &nbsp;&nbsp;&nbsp;90 99.8948%</p>
                            <p className=' font-medium text-xs border border-grey-400 pl-3 pr-3 rounded-3xl'>today&nbsp;&nbsp; -% </p>
                        </div>
                        <div>
                            <p className='font-bold text-sm'>No data</p>
                        </div>
                    </div>
                    <div className='mt-1'>
                        <img src={third} alt='333333'/>
                    </div>
                </div> 
            </div>
      </div>

        <div className='h-40'>
        
        </div>
    
    
    </>
  )
}