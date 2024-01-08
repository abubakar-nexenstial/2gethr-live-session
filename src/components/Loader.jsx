import React from 'react'

export default function Loader() {
  return (
    <section className='h-screen w-full flex justify-center align-items-center bg-[#1a1a1a]'>
        <span className="loading loading-spinner loading-lg text-white"></span>
    </section>
  )
}
