import Image from "next/image";
import React from "react";
import Banner from "@/components/banner";
import ContactForm from "@/components/email";

function About() {
    const text=`A lil bout of meeself`
    return (
        <div>
            <Banner title='ABOUT' subtitle={text}/>
            <main className='h-full'>
                <div id='Profile container' className='flex flex-col px-6 space-x-4 pt-4 pb-20'>
                    <h2 className='text-3xl opacity-75 mb-8 font-extrabold shadow-bottom md:text-3xl md:pb-3'>Daniel Calenzani - Since 1995</h2>
                    <div className='flex justify-center'>
                        <Image
                            src='/img/profile.jpeg'
                            alt='Picture of the author: Daniel Calenzani'
                            width={500}
                            height={500}
                            className='overflow-hidden rounded-full h-[16rem] object-none shadow-2xl'
                        />
                    </div>
                    <div id='Personal information' className='flex flex-col space-y-4 p-4 pt-10 text-xl font-light'>
                        <p className='md:text-lg [&>br]:mb-6'> I&apos;m a Bachelor of Anthropology by the <a className='text-orange-500' href='https://www.pucp.pe'>PUCP</a>, but have been working as a marketing analyst for the past <a className='text-orange-500' href='/cv'>3 years</a>.
                        <br/>
                        I started my journey into programming by searching for new tools to develop products and solutions for my working life, and I&apos;ve been hooked ever since. My degree in anthropology has my mind working on solutions to problems that are not only technical, but also social and cultural. I believe that the best solutions are the ones that are not only technically sound, but primarily take into account the people that will use them now and on the future.
                        <br/>
                        Currently, I have worked as an independent developer for small businesses. Outside of work, I&apos;m a member of <a href="https://github.com/BehData" id="BehData" className="text-orange-500
                        ">BehData</a>, a research group that focuses on the use of data science and programming within psycology and social science.
                        </p>
                    </div>
                    <ContactForm/>
                </div>
            </main>
        </div>
    );
}

export default About;