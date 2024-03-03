import React from 'react'

function Text() {
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
    
    </>
  )
}

export default Text