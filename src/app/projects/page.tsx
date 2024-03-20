import Image from "next/image";
import React from "react";
import Navbar from "@/components/navbar";
import BreadcrumbsComponent from "@/components/bredcrums";

function Projects() {
    const text=`Here are some of the projects I've been working on.`
    return (
        <div>
            <main className="h-screen">
                <Navbar/>
                <BreadcrumbsComponent />
                <div id="Banner" className="whitespace-pre-wrap">
                    <h1 className="flex justify-end text-zinc-100 bg-[#0c62c1] w-screen px-4 py-10 text-4xl font-black">
                        PROJECTS
                    </h1>
                    <p className="p-4 pt-6 whitespace-pre-wrap font-thin text-xl">
                        {text}
                    </p>
                </div>
            </main>
        </div>
    );
}

export default Projects;