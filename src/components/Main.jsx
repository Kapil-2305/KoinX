import React from 'react'
import { RxDoubleArrowRight } from "react-icons/rx";
import Bitcoin_Logo from "../assets/Bitcoin.png"
import Chart from './Chart';
import Overview from './Overview';
import Sentiment from './Sentiment';
import About from './About';
import Tokenomics from './Tokenomics';
import Team from './Team';

const Main = () => {
    return (
        <div className='bg-[#EFF2F5] h-full p-6'>
            {/* heading */}
            <div className='flex gap-2'>
                <div className='text-[#3E5765] flex items-center juce gap-2'>
                    <p>Cryptocurrencies</p>
                    <RxDoubleArrowRight />
                </div>
                <div className='text-[#0F1629]'>
                    Bitcoin
                </div>
            </div>

            <div>
                <div className='bg-white rounded-lg p-6 mt-4'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-1'>
                                <img src={Bitcoin_Logo} alt="Bitcoin" />
                                <p className='font-bold text-2xl'>Bitcoin</p>
                                <p className='text-sm'>BTC</p>
                            </div>
                            <div className='bg-[#808A9D] rounded-lg p-2 text-white'>
                                Rank#1
                            </div>
                        </div>
                        <div className='w-[837px] h-[574px] bg-blue-300 rounded-lg'>
                            {/* <Chart /> */}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='py-6'>
                    <ul className='flex gap-6 text-[#3E424A] border-b-2'>
                        <li className='text-[#0141CF] border-blue-500 border-b-2'>Overview</li>
                        <li>Fundamentals</li>
                        <li>News Insights</li>
                        <li>Sentiments</li>
                        <li>Team</li>
                        <li>Technicals</li>
                        <li>Tokenomics</li>
                    </ul>
                </div>

                <Overview />

                <Sentiment />

                <About />

                <Tokenomics />

                <Team />
            </div>
        </div>
    )
}

export default Main