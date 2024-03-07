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

            <div className='h-[204px] bg-blue-300 rounded-lg my-2'>

            </div>
        </div>
        <div>
            <div className='flex items-center gap-2 text-[#44475B]'>
                    <p>Analyst Estimates</p>
                    <IoIosInformationCircle />
                </div>

                <div className='bg-blue-300 rounded-lg my-2 flex items-center gap-6'>
                    <div className='bg-[#EBF9F4] rounded-full content-center h-24 w-24 flex items-center justify-center my-6'>
                        <p className='text-2xl font-semibold text-[#0FBA83]'>76</p>
                        <p className='text-[#0FBA83] text-sm'>%</p>
                    </div>
                    <div className='w-[580px]'>
                        <div className='flex gap-2 items-center justify-between'>
                            <p>Buy</p>
                            <div className='flex items-center gap-2'>
                                <div className='h-[6px] w-[480px] bg-green-600 rounded-lg'></div>
                                <p>76%</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center '>
                            <p>Hold</p>
                            <div className='flex items-center gap-2'>
                                <div className='h-[6px] w-[70px] bg-gray-600 rounded-lg'></div>
                                <p>8%</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p>Sell</p>
                            <div className='h-[6px] w-[200px] bg-red-600 rounded-lg'></div>
                            <p>16%</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Sentiment