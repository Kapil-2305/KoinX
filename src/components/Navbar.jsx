import React from 'react'
import Logo from "../assets/Nav_Logo.png"

const Navbar = () => {
    return (
        <div className='flex flex-row items-center justify-between h-[80px] p-8'>
            <div>
                <img src={Logo} alt="KoinX" />
            </div>
            <div className='flex flex-row space-x-6 items-center'>
                <ul className='flex flex-row gap-6'>
                    <li>Crypto Taxes</li>
                    <li>Free Tools</li>
                    <li>Resource Center</li>
                </ul>
                <button className='w-[136px] h-[40px] rounded-lg bg-[linear-gradient(81.62deg,_#2870EA_8.72%,_#1B4AEF_85.01%)] text-white'>Get Started</button>
            </div>
        </div>
    )
}

export default Navbar