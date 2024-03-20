import Image from "next/image";
import React from "react";
import Navbar from "@/components/navbar";
import BreadcrumbsComponent from "@/components/bredcrums";

function About() {
    const text=`A lil bit of meeself`
    return (
        <div>
            <main className="h-screen">
                <Navbar/>
                <BreadcrumbsComponent />
                <div id="Banner" className="whitespace-pre-wrap">
                    <h1 className="flex justify-end text-zinc-100 bg-[#0c62c1] w-screen px-4 py-10 text-4xl font-black">
                        ABOUT
                    </h1>
                    <p className="p-4 pt-6 whitespace-pre-wrap font-thin">
                        {text}
                    </p>
                </div>
                <div id="Profile container" className="flex flex-col md:flex-row px-6">
                    <Image
                        src="/img/profile.png"
                        alt="Picture of the author: Daniel Calenzani"
                        width={500}
                        height={500}
                        className="overflow-hidden rounded-full w-[100rem] md:w-[200rem] object-none shadow-2xl"
                    />
                    <div id="Personal information" className="flex flex-col space-y-4 p-4">
                        <h2 className="text-xl font-extrabold shadow-bottom">Daniel Calenzani - Since 1995</h2>
                        <p className="text-justify"> Im a Bachelor of Anthropology by the <a href="https://www.pucp.pe">PUCP</a>, but have been working as a marketing analyst for the past 3 years. I started my journey into programming by searching for new tools to develop products and solutions at my workplace, and I&quot;ve been hooked ever since. I&quot;m eager to learn and grow in the programming field, so I&quot;m glad for everytime you reach me with your insights!</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default About;