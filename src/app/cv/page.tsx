'use client'
import React from "react";
import Navbar from "@/components/navbar";
import BreadcrumbsComponent from "@/components/bredcrums";
import { Document, Page } from 'react-pdf';
import { Download } from "react-feather";

function Curriculum() {

    const text = `Here you will find my own curriculum vitae for reading and downloading. I try to keep it light and updated with my formal education and work experience. But please, check my github repository for a deeper insight on my work.
                    
    As an educational note, I used the Harvard format, which I found on a small course of improving your CV skills. I must note that, based on my experience, this format still could be improved, and I've seen some variations on the same template that could be of use for you. Take the time to search them online if you can.
    `;
    
    return (
        <div>
            <main className="h-screen">
                <Navbar/>
                <BreadcrumbsComponent />
                <div id="Banner" className="whitespace-pre-wrap">
                    <h1 className="flex justify-end text-zinc-100 bg-[#0c62c1] w-screen px-4 py-10 text-4xl font-black">CURRICULUM</h1>
                    <p className="p-4 pt-6 whitespace-pre-wrap font-thin">
                        {text}
                    </p>
                </div>
                <div className="flex flex-col space-y-10 items-center justify-center">
                    <a href="/cv/CV_DanielCalenzani_2024_SPA.pdf" className="p-4 text-zinc-100 bg-[#0c62c1] rounded-md">
                            <button className="flex flex-row"><Download className="mr-4"/>Download current Curriculum</button>
                    </a>
                    <div className="w-full md:w-3/4">
                        <object
                            data="/cv/CV_DanielCalenzani_2024_SPA.pdf"
                            type="application/pdf"
                            width="100%" 
                            height="500px"
                        >
                        </object>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default Curriculum;