'use client';

//Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';
//Swiper Modules
import { Pagination } from 'swiper/modules';
//Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const testimonialData = [
    {
        img: '/testimonials/img-1.png',
        message: 'Veloura made planning my dream vacation a breeze! The selection of luxury hotels was impressive, and the personalized assistance throughout the booking process was unmatched. Not only did Veloura find me the best deals on exquisite accommodations, but their attentive support and seamless service added an extra layer of comfort to my travel experience. Thanks to Veloura, my getaway exceeded all expectations, as I will undoubtedly return to them for future travel plans!',
        personName: 'Daniel Tanaka',
        location: 'San Francisco, California, USA',
    },
    {
        img: '/testimonials/img-2.png',
        message: 'Veloura is a game-changer in the world of travel! Their platform not only curated an impressive array of 5-star resorts and hotels but also ensured that I got the best value for my money. The flexibility in trip planning, combined with their commitment to delivering top-notch services, made my vacation stress-free and unforgettable. Dedication to excellence shines through in every aspect of their service, making them my go-to for finding the perfect blend of luxury and affordability in my travels.',
        personName: 'Isabella Thompson',
        location: 'Manhattan, New York, NY',
    },
];

const Testimonials = () => {
  return (
    <motion.section 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once:false, amount: 0}}
        className='bg-soft_green xl:h-[880px]'
    >
        <motion.div 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{once:false, amount: 0}}
            className='container mx-auto'
        >
            <Swiper 
            modules={[Pagination]} 
            pagination={{clickable: true}}
            className='xl:h-[680px] overflow-hidden'
            >
                {testimonialData.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24'>
                                <Image 
                                    src={slide.img} 
                                    width={470} 
                                    height={470} 
                                    quality={100} 
                                    alt='' 
                                    className='hidden xl:flex'
                                />
                                <div className='flex-1 bg-white/20 text-white p-12'>
                                    <p className='text-lg leading-9 mb-8'>{slide.message}</p>
                                    <p className='text-xl font-bold'>{slide.personName}</p>
                                    <p>{slide.location}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </motion.div>
    </motion.section>
  );
};

export default Testimonials;