/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Logo = () => {
    const router = useRouter();
    return (
        <image 
            alt="Logo" 
            className='hidden md:block cursor-pointer' 
            height={100}
            width={100} 
            src="https://utfs.io/f/oKBxKAtP36VOtq5phtG1FHCgJGTwD3NRdsmiYu6Skh5lqQUE" 
        />
    )
}

export default Logo
