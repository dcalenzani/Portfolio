'use client'
import Image from "next/image";
import React from "react";
import Navbar from "@/components/navbar";
import BreadcrumbsComponent from "@/components/bredcrums";

function Curriculum() {
    return (
        <div>
            <main>
                <Navbar/>
                <BreadcrumbsComponent />
                <h1>CURRICULUM</h1>
                <p>Here you will find my own curriculum vitae for download.</p>
            </main>
        </div>
    );
}

export default Curriculum;