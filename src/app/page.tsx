'use client'

import Image from "next/image";
import Head from "next/head";
import React, { useRef } from "react";
import Banner from "@/components/banner";
import Carousel from "@/components/carousel";
import { Download } from "react-feather";
import TopButton from "@/components/toppage";

function Home() {
  const title = `WELCOME`
  const subtitle = `This is an static portfolio to showcase my work and experience in programming and research.`

  return (

  <div>
    <Head>
      <title>Daniel Calenzani&apos;s Portfolio</title>
      <meta name="description" content="Daniel Calenzani's portfolio, a collection of his work and thoughts on programming and research."/>
      <link rel="icon" href="/favicon.ico" /> 
    </Head>
    <main className="fixed h-screen w-screen overflow-y-auto space-y-10">
      <Banner title={title} subtitle={subtitle}/>
      <div id="Content" className="flex flex-col">
        <p id="Broad description of the portfolio for Daniel Calenzani's profile" className="mx-10 [&>br]:mb-4"> The font you are ready is <a id="lexent google fonts url" className="text-orange-500" href="https://fonts.google.com/specimen/Lexend">Lexent</a>, a font designed for people with dyslexia and other reading disabilities. I hope this makes your experience more enjoyable, and if you are a developer, I hope you consider using it in your projects.
        <br/>
        Remember, <strong>knowledge is meant to be shared and discussed!</strong>
        <br/>
        <h2 className='pt-10 text-3xl opacity-75 mb-8 font-extrabold shadow-bottom md:text-3xl md:pb-3'>Daniel Calenzani - Since 1995</h2>
      
        My name is Daniel Calenzani, a Bachelor in Anthropology and self-taught programmer with just 28 Y/O. In this portfolio you will find a collection of my projects (at least the parts not disclosed by NDA&apos;s) and some of my thoughts on programming and research. Feel free to reach out to me if you have any questions or want to discuss any of the topics I&apos;ve written about.
        <br/>
        I&apos;ve done most of my work on Python and SQL, but for the last year I&apos;ve been working as a freelance developer using React and Next.js. I believe that, in the end, a language is just a tool for a selected work. We should never be afraid to learn new tools and languages, as they will only make us <strong> better developers.</strong>
        <br/>
        I hope you <strong>enjoy your stay</strong> and grasp something useful </p>
        <div id="Buttons" className="flex flex-row pt-10">
          <a href="https://www.github.com/dcalenzani" className="p-4 text-zinc-100 bg-[#0c62c1] rounded-md w-1/4 mx-auto text-center justify-center items-center"> <Image className="h-[70px] invert pb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width={500} height={500} alt="Github logo"/> My personal Repository </a>
          <a href="/cv/CV_DanielCalenzani_2024_SPA.pdf" className="p-4 text-zinc-100 bg-[#0c62c1] rounded-md w-1/4 mx-auto text-center justify-center items-center">
            <Download className="h-[70px] mx-auto"/>Download current CV
          </a>
        </div>
        <Carousel/>
      </div>
    </main>
  </div>
  );
}

export default Home;
