import React from 'react';
import TimeCard from '../components/TimeCard';
import Footer from "../components/Footer";
import Table from "../components/Table";

export default function CurrentSession() {
  return (
    <>
    <section className="bg-cover bg-center min-h-screen w-full pt-10" >
      <div className='w-full flex justify-center align-items-center text-white '>

    <span className='backdrop-blur-md bg-white/15 border-[#424242] border-2 rounded-md px-12 py-3 shadow-2xl'>Device License : NLV8HDOCKKREEV6T</span>
      </div>
      
      <div className='flex justify-center align-items-center w-full pt-2'>
        <TimeCard />
      </div>

      <div className='p-10'>
      <Table/>
      </div>

    </section>
      <Footer />
      </>
  );
}
