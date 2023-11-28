'use client';
import Nav from './Nav';
import Image from 'next/image';
import Link from 'next/link';
import Socials from './Socials';

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {Menu} from 'lucide-react';


const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu size={36} className='text-white' />
        </SheetTrigger>

        <SheetContent side='left'>
            <div className='flex flex-col justify-between h-full p-12'>
                {/*Company Logo*/}
                <Link href='/' className='mb-24'>
                <Image 
                    src='/footer/logo.png' 
                    width={180} 
                    height={60} 
                    alt='' 
                    priority
                />
                </Link>

                {/*Navigation Menu*/}
                <Nav 
                    containerStyles='text-black' 
                    listStyles='flex flex-col gap-y-6 text-xl' 
                />
                
                {/*Socials*/}
                <Socials containerStyles='flex gap-x-4 text-black' />
            </div>
        </SheetContent>
    </Sheet>
  );
};

export default MobileNav;