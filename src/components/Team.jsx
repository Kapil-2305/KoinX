import React from 'react'
import John1 from "../assets/John1.png"
import John2 from "../assets/John2.png"
import Elina from "../assets/Elina.png"

const Team = () => {
  return (
    <div className='p-6 bg-white rounded-lg'>
        <p className='text-2xl font-semibold'>Team</p>
        <p className='py-2'>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>

        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-6 p-4 py-2 bg-[#E8F4FD] rounded-lg'>
                <div className='p-2 flex flex-col '>
                    <img className='rounded-lg' src={John1} alt="John Smith" />
                    <p className='font-semibold'>John Smith</p>
                    <p className='text-sm text-[#788F9B]'>Designation here</p>
                </div>
                <div>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
                    </p>
                </div>
            </div>

            <div className='flex items-center gap-6 p-4 py-2 bg-[#E8F4FD] rounded-lg'>
                <div className='flex flex-col items-center'>
                    <img className='rounded-lg' src={Elina} alt="John Smith" />
                    <div>
                        <p className='font-semibold'>Elina Williams</p>
                        <p className='text-sm text-[#788F9B]'>Designation here</p>
                    </div>
                </div>
                <div>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
                    </p>
                </div>
            </div>

            <div className='flex items-center gap-6 p-4 py-2 bg-[#E8F4FD] rounded-lg'>
                <div className='p-2 flex flex-col '>
                    <img className='rounded-lg' src={John2} alt="John Smith" />
                    <p className='font-semibold'>John Smith</p>
                    <p className='text-sm text-[#788F9B]'>Designation here</p>
                </div>
                <div>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team