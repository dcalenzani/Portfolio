'use client'
import React from 'react';
import { AppBar, Drawer, Toolbar, Typography } from '@mui/material';
import { Menu } from 'react-feather';
import BreadcrumbsComponent from "@/components/bredcrums";
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  }
  return (
    <div>
    <AppBar className="static">
      <Toolbar className="grid grid-cols-8 gap-4">
        <div className="col-span-4 flex flex-row space-x-10">
          <button onClick={toggleDrawer(true)} className="">
            <Menu />
          </button>
          <Link href="/">
            <img
                src="logo.svg"
                alt="Personal D.C logo"
                className="dark:invert"
                width={100}
                height={24} 
            />
          </Link>
        </div>
        <div className='col-span-4 md:grid grid-cols-4 hidden'>
          <Link href="/about" id="about-link" className="col-span-1 hover:text-yellow-500">About</Link>
          <Link href="/cv" id="cv-link" className="col-span-1 hover:text-yellow-500">Curriculum</Link>
          <Link href="/blog" id="blog-link" className="col-span-1 hover:text-yellow-500">Blog</Link>
          <Link href="/projects" id="projects-link" className="col-span-1 hover:text-yellow-500">Projects</Link>
        </div>
      </Toolbar>
    </AppBar>
    <Drawer open={open} onClose={toggleDrawer(false)} className='md:hidden'>
      <div className='flex flex-col space-y-6 px-10 py-4'>  
        <Link href="/about" id="about-link-mobile" className="col-span-1 hover:text-red-500">About</Link>
        <Link href="/cv" id="cv-link-mobile" className="col-span-1 hover:text-yellow-500">Curriculum</Link>
        <Link href="/blog" id="blog-link-mobile" className="col-span-1 hover:text-yellow-500">Blog</Link>
        <Link href="/projects" id="projects-link-mobile" className="col-span-1 hover:text-yellow-500">Projects</Link>
      </div>
    </Drawer>
    </div>
  );
};

export default Navbar;