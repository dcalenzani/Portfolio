'use client'

import React, { useEffect, useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const BreadcrumbsComponent: React.FC = () => {
    const [paths, setPaths] = useState<string[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const currentPath = window.location.pathname;
            setPaths(currentPath.split('/').filter((path) => path !== ''));
        }
    }, []);

    return (
        <Breadcrumbs aria-label="breadcrumb" className='flex flex-col text-zinc-900 pl-4 py-2 items-start'>
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
    );
};

export default BreadcrumbsComponent;