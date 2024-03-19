import Image from "next/image";
import React from "react";
import Navbar from "@/components/navbar";
import BreadcrumbsComponent from "@/components/bredcrums";

function About() {

    return (
        <div>
            <main>
                <Navbar/>
                <BreadcrumbsComponent />
                <h1>ABOUT</h1>
                <p>Information about who am I and what I&quot;ve been up to.</p>
            </main>
        </div>
    );
}

export default About;