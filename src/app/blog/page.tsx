import Image from "next/image";
import React from "react";
import Navbar from "@/components/navbar";
import BreadcrumbsComponent from "@/components/bredcrums";

function Blog() {
    return (
        <div>
            <main>
                <Navbar/>
                <BreadcrumbsComponent />
                <h1>BLOG</h1>
                <p>Here you will find my own articles around diverse research topics.</p>
            </main>
        </div>
    );
}

export default Blog;