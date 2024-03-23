'use client'

import React, { useEffect, useState } from 'react';
import { AppBar, Breadcrumbs, Drawer, Toolbar, Typography } from '@mui/material';
import { Menu } from 'react-feather';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  }

  const [paths, setPaths] = useState<string[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const currentPath = window.location.pathname;
            setPaths(currentPath.split('/').filter((path) => path !== ''));
        }
    }, []);
    
  return (
    <div>
    <AppBar className="bg-[#0c62c1]">
      <Toolbar className="grid grid-cols-8 gap-4">
        <div className="col-span-8 md:col-span-4 flex flex-row justify-between">
          <Link href="/">
            <Image
                src="/logo.png"
                alt="Personal D.C logo"
                className="dark:invert"
                width={100}
                height={24} 
            />
          </Link>
          <button onClick={toggleDrawer(true)} className="block md:hidden">
            <Menu />
          </button>
        </div>
        <div className='col-span-4 md:grid grid-cols-4 hidden text-xl'>
          <Link href="/about" id="about-link" className="col-span-1 hover:text-yellow-500">About</Link>
          <Link href="/cv" id="cv-link" className="col-span-1 hover:text-yellow-500">Curriculum</Link>
          <Link href="/blog" id="blog-link" className="col-span-1 hover:text-yellow-500">Blog</Link>
          <Link href="/projects" id="projects-link" className="col-span-1 hover:text-yellow-500">Projects</Link>
        </div>
      </Toolbar>
    <Breadcrumbs aria-label="breadcrumb" className='flex flex-col text-zinc-900 bg-zinc-100 w-screen p-1'>
            <p>{'>>'}</p>
            <Link className="text-zinc-900" href="/">
                Home
            </Link>
            {paths.map((path, index) => (
                <div key={index} className="">
                    <Link className="text-zinc-900" href={`./${path}`}>
                        {path}
                    </Link>
                </div>
            ))}
    </Breadcrumbs>
    </AppBar>
    <Drawer open={open} onClose={toggleDrawer(false)} className='md:hidden w-1/2 text-xl'>
      <div className='flex flex-col space-y-4 px-10 pr-20 py-2 pt-8'>  
        <Link href="/about" id="about-link-mobile" className="col-span-1 hover:text-red-500">About</Link>
        <Link href="/cv" id="cv-link-mobile" className="col-span-1 hover:text-yellow-500">Curriculum</Link>
        <Link href="/blog" id="blog-link-mobile" className="col-span-1 hover:text-blue-500">Blog</Link>
        <Link href="/projects" id="projects-link-mobile" className="col-span-1 hover:text-green-500">Projects</Link>
      </div>
    </Drawer>
    </div>
  );
};

export default Navbar;