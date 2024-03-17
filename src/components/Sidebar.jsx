import React from 'react'
import GetStarted from "../assets/GetStarted.png"
import { GoArrowRight } from "react-icons/go";

const Sidebar = () => {
    return (
        <div className='bg-[#EFF2F5] pt-16 px-8'>
            <div className='bg-[#0052FE] p-6 rounded-lg w-[426px] h-[515px]'>
                <p className='text-white text-xl font-semibold'>Get Started with KoinX for FREE</p>
                <p className='text-white '>With our range of features that you can equip for free,
                        KoinX allows you to be more educated and aware of your tax reports.
                </p>
                <img src={GetStarted} alt="Get Started" />
                <button>
                    Get Started for FREE
                    <GoArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Sidebar