'use client'

import Navbar from "@/components/navbar";
import React, { useEffect, useState } from 'react';
import BreadcrumbsComponent from './bredcrums';

interface BannerProps {
    title: string;
    subtitle: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
    return (
        <div id='Banner' className='w-screen pb-10 '>                            
            <Navbar/>
            <BreadcrumbsComponent />
            <div id='Contents' className='w-screen bg-[#0c62c1] flex flex-col justify-end mt-1'>
                <h1 className='w-2/3 text-zinc-100 px-4 pt-6 pb-4 text-4xl font-black items-end text-right shadow-bottom ml-auto'>
                    {title}
                </h1>
                <p className='text-zinc-100 px-4 pt-4 pb-6 items-end text-right whitespace-pre-wrap text-lg font-extralight italic'>
                    {subtitle}
                </p>
            </div>
        </div>
    )    
};
export default Banner;