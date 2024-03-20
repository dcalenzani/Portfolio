import Image from "next/image";
import React from "react";
import Navbar from "../components/navbar";
import BreadcrumbsComponent from "@/components/bredcrums";
function Home() {
  return (
  <div>
    <main className="h-screen">
        <Navbar/>
        <BreadcrumbsComponent/>
        <div id="Banner" className="flex flex-col space-y-4">
          <h1 className="bg-[#0c62c1] w-screen px-4 py-10 text-4xl font-semibold text-zinc-100 font-">Welcome to my portfolio!</h1>
          <p className="p-6">This is a simple portfolio to showcase my work and experience as a productive cog in the social engine.</p>
        </div>
    </main>
  </div>
  );
}

export default Home;
