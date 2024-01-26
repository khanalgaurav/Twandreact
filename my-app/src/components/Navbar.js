import React from 'react'
import PropTypes from 'prop-types'
import logo from '../logo orange.png' 
export default function Navbar(props) {
  return (
    <>
      <div className='flex justify-between p-10'>
        <div className="flex">
          <img className='h-10 w-10' src={logo} alt="monty logo" />
          <p className='text-2xl'>Monty</p>
        </div>
        <div>
          <ul className='flex gap-1'>
            <li><a className='pr-10' href="#">Documentation</a></li>
            <li><a href="#">Github</a></li>
          </ul>
        </div>
      </div>
      
    </>
  )
}