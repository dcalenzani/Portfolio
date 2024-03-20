import Image from "next/image";
import React from "react";
import Navbar from "@/components/navbar";
import BreadcrumbsComponent from "@/components/bredcrums";

function Blog() {
    const text=`A lil bit of my thoughts`
    return (
        <div>
            <main className="h-screen">
                <Navbar/>
                <BreadcrumbsComponent />
                <div id="Banner" className="whitespace-pre-wrap">
                    <h1 className="flex justify-end text-zinc-100 bg-[#0c62c1] w-screen px-4 py-10 text-4xl font-black">
                        BLOG
                    </h1>
                    <p className="p-4 pt-6 md:text-xl whitespace-pre-wrap font-thin">
                        {text}
                    </p>
                </div>
            </main>
        </div>
    );
}

export default Blog;