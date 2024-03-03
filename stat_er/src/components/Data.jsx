import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
function Data(props) {
    const [data,setData]=useState(
        [

            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/nodata.svg"},
            {stat:"/degraded.svg"},
            {stat:"/degraded.svg"},
            {stat:"/degraded.svg"},
            {stat:"/degraded.svg"},
            {stat:"/degraded.svg"},
            {stat:"/degraded.svg"},
            {stat:"/degraded.svg"},
            {stat:"/degraded.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/down.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},
            {stat:"/up.svg"},



            // {stat:"/down.svg",key:"2"},
            // {stat:"/nodata.svg",key:"3"},
            // {stat:"/up.svg",key:"4"}
        ]
    )
  return (
    <>
        <div className='flex mt-5'>
            <div className='border'>
                <img src="#" alt="logo" />{props.logoName}
                <p>Recent Incidents --</p>
            </div>

            <div className=' flex-col w-full border-red-950 border-2'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <p>90day {props.dataPercentage}</p>
                        <p>Today {props.dataToday}%</p>
                    </div>
                    <div>
                        <p>{props.status}</p>
                    </div>

                </div>
                <div className='flex'>
                    {
                        data.map((d)=>{
                            return(<img src={d.stat}/>);
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}
Data.defaultProps = {
	status:"No data",
    dataToday:"-"
};

export default Data