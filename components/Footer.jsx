'use client';

import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Footer = () => {
  return (
    <footer className='bg-soft_green-secondary relative pt-12 xl:pt-0'>
      <div className='container mx-auto'>
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView='show'
          viewport={{once:false, amount: 0}}
        >
          <div className='flex flex-col xl:flex-row bg-white p-8 rounded-xl min-h-[394px] xl:p-20 xl:-translate-y-36 xl:gap-x-12'>
          {/*Logo & Text*/}
            <div className='xl:w-[470px] mb-6 xl:mb-0'>
              <Link href='/'>
                <Image 
                  src='/footer/logo.png'
                  width={180}
                  height={60}
                  alt=''
                  className='mb-2'
                />
              </Link>
              <p className='ml-1 text-lg leading-9'>
                Veloura 2023 <br />
                All rights reserved &copy;
              </p>
            </div>
            {/*External Links*/} 
            <div className='flex xl:gap-x-16 xl:ml-32'>
              {/*Company*/}
              <div className='flex-1'>
                <h4 className='h4 mb-6'>Company</h4>
                <ul className='flex flex-col gap-y-6 text-sm'>
                  <li>
                    <Link href='/'>About</Link>
                  </li>
                  <li>
                    <Link href='/'>Jobs</Link>
                  </li>
                  <li>
                    <Link href='/'>Partnerships</Link>
                  </li>
                  <li>
                    <Link href='/'>Feedback</Link>
                  </li>
                  <li>
                    <Link href='/'>Advertising</Link>
                  </li>
                </ul>  
              </div>
              {/*Policies*/}
              <div className='flex-1'>
                <h4 className='h4 mb-6'>Policies</h4>
                <ul className='flex flex-col gap-y-6 text-sm'>
                  <li>
                    Privacy
                  </li>
                  <li>
                    Cookies
                  </li>
                  <li>
                    Accessibility
                  </li>
                  <li>
                    Terms of use
                  </li>
                  <li>
                    Your Privacy Choices
                  </li>
                </ul>  
              </div>
              {/*Help*/}
              <div className='flex-1'>
                <h4 className='h4 mb-6'>Help</h4>
                <ul className='flex flex-col gap-y-6 text-sm'>
                  <li>
                    <Link href='/'>Support</Link>
                  </li>
                  <li>
                    <Link href='/'>Cancel your booking</Link>
                  </li>
                  <li>
                    <Link href='/'>Refund timelines, polices & processes</Link>
                  </li>
                  <li>
                    <Link href='/'>Use a Veloura coupon</Link>
                  </li>
                </ul>  
              </div>  
            </div> 
          </div>
        </motion.div>
        {/*Copyright*/}
        <div className='py-12 xl:-mt-32 flex flex-col xl:flex-row xl:justify-between'>
          <p className='text-black font-semibold text-center mb-4 xl:mb-0'>&copy; Kobe Pho 2023</p>
          <Socials containerStyles='flex gap-x-4 text-black mx-auto xl:mx-0' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;