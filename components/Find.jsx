'use client';

import { Button } from './ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const hotelData = [
    {
        image: '/find/borabora.jpg',
        name: 'Four Seasons Resort Bora Bora',
        location: 'Bora Bora, French Polynesia',
    },
    {
        image: '/find/thailand.png',
        name: 'Six Senses Yao Noi',
        location: 'Phang Nga Bay, Thailand',
    },
    {
        image: '/find/dubai.jpg',
        name: 'Burj Al Arab Jumeirah',
        location: 'Dubai, United Arab Emirates',
    },
    {
        image: '/find/italy.jpg',
        name: 'Rosa Alpina Hotel & Spa',
        location: 'San Cassiano, Italy',
    },
]

const Find = () => {
  return (
    <section className='py-12 xl:py-36'>
        <div className='container mx-auto'>
            {/*Text*/}
            <div className='text-center'>
                <motion.h2 
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{once:false, amount: 0.2}}
                    className='h2 mb-6'
                >
                    Explore stays in trending destinations
                </motion.h2>
                <motion.p 
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{once:false, amount: 0.2}}
                    className='max-w-[638px] mx-auto mb-8'
                >
                    Embark on a journey of unparalleled luxury with Veloura as you explore stays in trending destinations. 
                    From iconic cityscapes to exotic retreats, discover handpicked accommodations that redefine your travel experience.
                </motion.p>
                <motion.div
                    variants={fadeIn('up', 0.6)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{once:false, amount: 0.2}}
                >
                    <Button variant='accent' className='px-12 mb-14 xl:mb-28'>
                        View Deals
                    </Button>
                </motion.div>
            </div>
            {/*Hotel Grid*/}
            <motion.div 
                variants={fadeIn('up', 0.6)}
                initial='hidden'
                whileInView='show'
                viewport={{once:false, amount: 0.2}}
                className='grid gap-y-10 xl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[30px]'
            >
                {hotelData.map((hotel, index) => {
                    return (
                        <div 
                            className='border-2 border-outline w-[270px] h-[390px] rounded-xl overflow-hidden hover:cursor-pointer group hover:bg-soft_green transition-all duration-700 mx-auto xl:mx-0' 
                            key={index}
                        >
                            <Image 
                                src={hotel.image} 
                                width={270} 
                                height={270} 
                                alt='' 
                            />
                            <div className='p-6'>
                                <h4 className='h4 group-hover:text-white transition-all duration-300'>
                                    {hotel.name}
                                </h4>
                                <p className='group-hover:text-white transition-all duration-300'>
                                    {hotel.location}
                                </p>
                            </div> 
                        </div>
                    );
                })}
            </motion.div>
        </div>
    </section>
  );
};

export default Find;