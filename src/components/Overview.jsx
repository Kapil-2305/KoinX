import React from 'react'
import { IoIosInformationCircle } from "react-icons/io";


const Overview = () => {
  return (
    <div className='bg-white rounded-lg p-6'>
        <div>
            <div className='text-xl text-[#0F1629] font-bold'>
                Performance
            </div>
            <div className='flex flex-col gap-6 text-[#44475B] font-light py-6'>
                <div className='flex justify-between items-center'>
                    <div>
                        <p>Today's Low</p>
                        <p>46,930.22</p>
                    </div>
                    <div className='h-[5px] w-[580px] bg-[linear-gradient(90deg,_rgba(131,58,180,1)_0%,_rgba(253,29,29,1)_50%,_rgba(252,176,69,1)_100%)]'>

                    </div>
                    <div>
                        <p>Today's High</p>
                        <p>49,343.83</p>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div>
                        <p>52W Low</p>
                        <p>16,930.22</p>
                    </div>
                    <div className='h-[5px] w-[580px] bg-[linear-gradient(90deg,_rgba(131,58,180,1)_0%,_rgba(253,29,29,1)_50%,_rgba(252,176,69,1)_100%)]'>

                    </div>
                    <div>
                        <p>52W High</p>
                        <p>49,743.83</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='py-6'>
            <div className='flex gap-4 items-center'>
                <p className='text-lg font-semibold'>Fundamentals</p>
                <IoIosInformationCircle />
            </div>
            <div className='grid grid-cols-2 gap-32 py-4'>
                <div>
                    <div className='flex justify-between border-b-2 h-12 items-center'>
                        <p>Bitcoin Price</p>
                        <p>$16,815.46</p>
                    </div>
                    <div className='flex justify-between border-b-2 h-12 items-center'>
                        <p>24h Low / 24h High</p>
                        <p>$16,382.07 / $16,874.12</p>
                    </div>
                    <div className='flex justify-between border-b-2 h-12 items-center'>
                        <p>7d Low / 7d High</p>
                        <p>$16,382.07 / $16,874.12</p>
                    </div>
                    <div className='flex justify-between border-b-2 h-12 items-center'>
                        <p>Trading Volume</p>
                        <p>$23,249,202,782</p>
                    </div>
                    <div className='flex justify-between border-b-2 h-12 items-center'>
                        <p>Market Cap Rank</p>
                        <p>#1</p>
                    </div>
                </div>

                <div>
                    <div className='flex justify-between border-b-2 h-12 items-center'>
                        <p>Market Cap</p>
                        <p>$323,507,290,047</p>
                    </div>
                    <div className='flex justify-between border-b-2 h-12 items-center'>
                        <p>Market Cap Dominance</p>
                        <p>38.343%</p>
                    </div>
                    <div className='flex justify-between border-b-2 h-12 items-center'>
                        <p>Volume / Market Cap</p>
                        <p>0.0718</p>
                    </div>
                    <div className='flex justify-between border-b-2 h-12 items-center'>
                        <p>All-Time High</p>
                        <div>
                            <p>$69,044.77 -75.6%</p>
                            <p>Nov 10, 2021 (about 1 year)</p>
                        </div>
                    </div>
                    <div className='flex justify-between border-b-2 h-12 items-center'>
                        <p>All-Time Low</p>
                        <div>
                            <p>$67.81 24729.1%</p>
                            <p>Jul 06, 2013 (over 9 years)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview