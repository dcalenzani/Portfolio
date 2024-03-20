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
        <Breadcrumbs aria-label="breadcrumb" className='flex text-zinc-900 pl-4 py-2 items-center'>
            <p>{'>>'}</p>
            {paths.length === 0 ? (
                <Link className="text-zinc-900" href="/">
                    Home
                </Link>
            ) : (
                paths.map((path, index) => (
                    <Link key={index} color="#A3A7FF" href={`./${path}`}>
                        {path}
                    </Link>
                ))
            )}
        </Breadcrumbs>
    );
};

export default BreadcrumbsComponent;