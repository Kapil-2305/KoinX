import React from 'react'

const Tokenomics = () => {
  return (
    <div className='bg-white rounded-lg p-6 my-6'>
        <p className='text-2xl font-semibold'>Tokenomics</p>
        <div>
            <p className='text-xl font-medium pt-4'>Initial Distribution</p>
            <div className='flex items-center gap-6 py-4'>
                <div className='h-40 w-40 bg-green-400 rounded-full flex items-center justify-center'>
                    <div className='h-28 w-28 bg-white rounded-full'></div>
                </div>
                <div>
                    <div className='flex gap-2 items-center'>
                        <p>*</p>
                        <p>Crowdsale investors: 80%</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p>*</p>
                        <p>Foundation: 20%</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-4'>
            <p>Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.</p>
        </div>
    </div>
  )
}

export default Tokenomics