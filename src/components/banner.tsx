'use client'

import Navbar from "@/components/navbar";
import React, { useEffect, useState } from 'react';

interface BannerProps {
    title: string;
    subtitle: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
    return (
        <div id='Banner' className='relative w-screen pb-2 mt-[4rem] z-50'>
            <div className="fixed flex flex-row">
                <Navbar/>
            </div>
            <div id='Contents' className='w-screen mt-32 bg-[#0c62c1] flex flex-col'>
                <div className="w-auto">
                    <h1 className='w-auto md:w-1/3 ml-auto text-zinc-100 px-6 pt-6 pb-4 text-4xl font-black text-right shadow-bottom'>
                        {title}
                    </h1>
                </div>
                <p className='text-zinc-100 px-6 pt-4 pb-6 items-end text-right whitespace-pre-wrap text-lg font-extralight italic'>
                    {subtitle}
                </p>
            </div>
        </div>
    )    
};
export default Banner;