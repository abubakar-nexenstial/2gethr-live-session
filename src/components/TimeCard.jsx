import React from 'react'

export default function TimeCard() {
  return (
    <>
    
    <div className='backdrop-blur-md bg-white/15 border-[#424242] border-2 rounded-md flex justify-center align-items-center flex-col px-10 py-10 gap-6 shadow-2xl'>
        <div className='flex justify-between align-items-center gap-7 text-white'>
            <span className='text-2xl'>From:</span>
            <span className='text-5xl'>08:00 AM</span>
        </div>
        <div className='flex justify-between align-items-center gap-7 text-white'>
            <span className='text-2xl'>To:</span>
            <span className='text-5xl'>09:00 AM</span>
        </div>
    </div>
    </>
  )
}
