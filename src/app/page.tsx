import Image from "next/image";
import React from "react";
import Navbar from "../components/navbar";
import BreadcrumbsComponent from "@/components/bredcrums";
function Home() {
  return (
  <div>
    <main>
        <Navbar/>
        <BreadcrumbsComponent/>
        <h1>Welcome to my portfolio!</h1>
        <p>This is a simple portfolio to showcase my work and experience as a productive cog in the social engine.</p>
        <div id="Profile container">
            <Image
                src="/img/profile.png"
                alt="Picture of the author: Daniel Calenzani"
                width={500}
                height={500}
            />
            <h2>Daniel Calenzani - Since 1995</h2>
            <p> Im a Bachelor of Anthropology by the <a href="https://www.pucp.pe">PUCP</a>, but have been working as a marketing analyst for the past 3 years. I started my journey into programming by searching for new tools to develop products and solutions at my workplace, and I&quot;ve been hooked ever since. I&quot;m eager to learn and grow in the programming field, so I&quot;m glad for everytime you reach me with your insights!</p>
        </div>
    </main>
  </div>
  );
}

export default Home;
