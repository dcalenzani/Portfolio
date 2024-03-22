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
        <div id='Banner' className='w-screen pb-2'>                            
            <Navbar/>
            <BreadcrumbsComponent />
            <div id='Contents' className='w-screen bg-[#0c62c1] flex flex-col mt-1'>
                <div className="w-auto">
                <h1 className='w-auto md:w-1/3 ml-auto text-zinc-100 px-4 pt-6 pb-4 text-4xl font-black text-right shadow-bottom'>
                    {title}
                </h1>
                </div>
                <p className='text-zinc-100 px-4 pt-4 pb-6 items-end text-right whitespace-pre-wrap text-lg font-extralight italic'>
                    {subtitle}
                </p>
            </div>
        </div>
    )    
};
export default Banner;