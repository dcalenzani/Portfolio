'use client'

import React, { useRef } from "react";
import Banner from "@/components/banner";
import Carousel from "@/components/carousel";

function Home() {
  const title = `WELCOME`
  const subtitle = `This is an static portfolio to showcase my work and experience in programming and research.`

  return (

  <div>
    <main className="fixed h-screen w-screen overflow-y-auto">
      <Banner title={title} subtitle={subtitle}/>
      <p id="Broad description of the portfolio for Daniel Calenzani's profile" className="mx-10 [&>br]:mb-8"> The font you are ready is <a id="lexent google fonts url" className="text-orange-500" href="https://fonts.google.com/specimen/Lexend">Lexent</a>, a font designed for people with dyslexia and other reading disabilities. I hope this makes your experience more enjoyable, and if you are a developer, I hope you consider using it in your projects.
      <br/>
      Remember, <strong>knowledge is meant to be shared and discussed!</strong>
      <br/>
      My name is Daniel Calenzani, I&apos;m 28 Y/O. In this portfolio you will find a collection of my projects (at least the parts not disclosed by NDA&apos;s) and some of my thoughts on programming and research. Feel free to reach out to me if you have any questions or want to discuss any of the topics I&apos;ve written about.
      <br/>
      I hope you enjoy your stay and grasp something useful </p>
      <Carousel/>
    </main>
  </div>
  );
}

export default Home;
