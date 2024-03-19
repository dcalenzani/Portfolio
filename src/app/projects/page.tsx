import Image from "next/image";
import React from "react";
import Navbar from "@/components/navbar";
import BreadcrumbsComponent from "@/components/bredcrums";

function Projects() {

    return (
        <div>
            <main>
                <Navbar/>
                <BreadcrumbsComponent />
                <h1>PROJECTS</h1>
                <p>Here you will find my own projects and contributions to open source projects.</p>
            </main>
        </div>
    );
}

export default Projects;