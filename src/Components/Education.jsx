import React from 'react';
import first from '../assets/images (1).jpeg'
import second from '../assets/images.png'
import third from '../assets/images.jpeg'

const Education = () => {
    return (
        <div className='bg-[#190b1f] pb-20  w-[90%] mx-auto' id='education'>
            <h2 className='text-4xl text-center md:mt-10 font-medium text-gray-200 font-ysabeau md:text-6xl font-grotesk'>My Education</h2>

            <div className='grid md:grid-cols-3 gap-8  mt-16'>
                <div className='flex justify-center items-center gap-4 border py-10 px-5 rounded-lg bg-[#230e2c]'>
                    <img className='w-28 object-cover  h-28 rounded-lg' src={first} alt="" />
                <div className=' space-y-1'>
                    <h5 className='text-[18px] font-semibold '>Secondary School Certificate (SSC)</h5>
                    <p>Khan Khana Pur Scholl & College</p>
                    <span className='flex gap-2 justify-start '><p>GPA-4.33</p> <p>Year: 2021</p></span>
                </div>
                </div>
                <div className='flex justify-center items-center gap-4 border py-10 px-5 rounded-lg bg-[#230e2c]'>
                    <img className='w-28 object-cover  h-28 rounded-lg' src={second} alt="" />
                <div className=' space-y-1'>
                    <h5 className='text-[18px] font-semibold '>Higher Secondary Certificate (H.S.C)</h5>
                    <p>Goalando Kamrul Islam College</p>
                    <span className='flex gap-2 justify-start '><p>GPA-4.00</p> <p>Year: 2023</p></span>
                </div>
                </div>
                <div className='flex justify-center items-center gap-4 border py-10 px-5 rounded-lg bg-[#230e2c]'>
                    <img className='w-28 object-cover  h-28 rounded-lg' src={third} alt="" />
                <div className=' space-y-1'>
                    <h5 className='text-[18px] font-semibold '>Secondary School Certificate (SSC)</h5>
                    <p>Khan Khana Pur Scholl & College</p>
                    <span className='flex gap-2 justify-start '><p>GPA-4.33</p> <p>Year: 2021</p></span>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Education;