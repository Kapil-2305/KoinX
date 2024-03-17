import React from 'react'

const Footer = () => {
    return (
        <div className='py-12'>
            <div className='p-6'>
                <p className='text-xl font-semibold pb-2'>You May Also Like</p>
                <div className='w-[1300px] h-[160px] bg-blue-100 rounded-lg items-center justify-center flex'>
                    First Carousal
                </div>
            </div>

            <div className='p-6'>
                <p className='text-xl font-semibold pb-2'>Trending Coins</p>
                <div className='w-[1300px] h-[160px] bg-blue-100 rounded-lg items-center justify-center flex'>
                    Second Carousal
                </div>
            </div>
        </div>
    )
}

export default Footer