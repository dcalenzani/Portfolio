'use client'

import Image from "next/image";
import Head from "next/head";
import React, { useRef } from "react";
import Banner from "@/components/banner";
import Carousel from "@/components/carousel";
import { ChevronsUp, Download } from "react-feather";

function Home() {

  const mainRef = useRef<HTMLElement>(null);
  const title = `WELCOME`
  const subtitle = `This is an static portfolio to showcase my work and experience in programming and research.`
  
  const scrollToTop = () => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }  
  };

  return (
  <div>
    <Head>
      <title>Daniel Calenzani&apos;s Portfolio</title>
      <meta name="description" content="Daniel Calenzani's portfolio, a collection of his work and thoughts on programming and research."/>
      <link rel="icon" href="/favicon.ico" /> 
    </Head>
    <main ref={mainRef} className="fixed h-screen w-screen overflow-y-auto space-y-10">
      <Banner title={title} subtitle={subtitle}/>
      <button
          className="fixed bottom-4 right-4"
          onClick={scrollToTop}
      >
          <ChevronsUp className="h-[2rem] w-[2rem] hover:scale-110 bg-zinc-100 rounded-full border-1 border-zinc-400"/>
      </button>
      <div id="Content" className="flex flex-col">
        <h2 className='mx-10 text-3xl opacity-75 mb-8 font-extrabold shadow-bottom md:text-3xl md:pb-3 z-1'>Daniel Calenzani - Since 1995</h2>
        <div className="md:mx-auto pt-10">
          <Image
              src='/img/profile.jpeg'
              alt='Picture of the author: Daniel Calenzani'
              width={500}
              height={500}
              className='overflow-hidden rounded-full h-[16rem] object-cover shadow-2xl'
          />
          <h3 className="italic font-light text-center py-3 px-10">24 yo Daniel in Yauyos Natural Reserve</h3>
        </div>
        <div id="Buttons" className="flex flex-col md:flex-row pt-10 space-y-8 md:space-y-0 pb-10">
          <a href="https://www.github.com/dcalenzani" className="p-4 text-zinc-100 bg-[#0c62c1] rounded-md w-1/2 h-36 md:w-1/4 mx-auto text-center justify-center items-center hover:scale-105 hover:bg-gray-600"> <Image className="h-[70px] invert pb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width={500} height={500} alt="Github logo"/> My personal Repository </a>
          <a href="/cv/CV_DanielCalenzani_2024_SPA.pdf" className="p-4 text-zinc-100 bg-[#0c62c1] rounded-md w-1/2 h-36 md:w-1/4 mx-auto text-center justify-center items-center hover:scale-105 hover:bg-gray-600">
            <Download className="h-[70px] w-[3.5rem] mx-auto"/>
            Download current CV
          </a>
        </div>
        <div className="py-10">
          <p id="Broad description of the portfolio for Daniel Calenzani's profile" className="mx-10 [&>br]:mb-4">
          My name is Daniel Calenzani, UX specialist, Bachelor in Anthropology and self-taught programmer with 28 Y/O. In this portfolio you will find a collection of my projects (at least the parts not disclosed by NDA&apos;s) and some of my thoughts on programming and research. Feel free to reach out to me if you have any questions or want to discuss any of the topics I&apos;ve written about.
          <br/>
          I&apos;ve done most of my work on Python and SQL, but for the last year I&apos;ve been working as a freelance developer using React and Next.js to build static and dynamic webpages. I have experience in IoT implementations and web development, but mostly data analysis. I believe that, in the end, a language is just a tool for a selected work. We should never be afraid to learn new tools and languages, as they will only make us <strong> better developers.</strong>
          <br/>
          I hope you <strong>enjoy your stay</strong> and leave with something of value.
          </p>
        </div>
        <Carousel/>
        <div className="py-32">
          <p id="Broad description of the portfolio for Daniel Calenzani's profile" className="mx-10 [&>br]:mb-4 pb-20 italic"> The font you are reading is <a id="lexent google fonts url" className="text-orange-500 hover:text-green-500" href="https://fonts.google.com/specimen/Lexend">Lexent</a>, a font designed for people with dyslexia and other reading disabilities. At the same time, it results in a more relaxed experience for people without this differences. I hope this makes your experience more enjoyable, and if you are a developer, I hope you consider using it in your projects.
          <br/>
          Remember, <strong>knowledge is meant to be shared and discussed!</strong>
          <br/>
          </p>
        </div>
      </div>
    </main>
  </div>
  );
}

export default Home;
