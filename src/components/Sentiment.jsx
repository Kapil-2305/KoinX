import React from 'react'
import { IoIosInformationCircle } from "react-icons/io";

const Sentiment = () => {
  return (
    <div className='flex flex-col rounded-lg bg-white my-6 p-6'>
        <p className='text-2xl font-semibold'>Sentiment</p>
        <div className='py-4'>
            <div className='flex items-center gap-2 text-[#44475B]'>
                <p>Key Events</p>
                <IoIosInformationCircle />
            </div>

            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Sentiment