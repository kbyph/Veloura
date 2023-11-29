'use client';

//Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';
//Swiper Modules
import { Autoplay } from 'swiper/modules';
//Swiper Styles
import 'swiper/css';

//Components
import { Button } from './ui/button';
import Image from 'next/image';

const recommendationData = [
  {
    name: 'Nobu Hotel Los Cabos',
    image: '/recommendation/nobu.png',
    location: 'Cabo San Lucas, Mexico',
    desc: 'Experience the epitome of luxury at Nobu Hotel Los Cabos, where sleek design meets Pacific tranquility. Indulge in world-class dining, breathtaking ocean views, and a harmonious blend of sophistication and relaxation on the pristine shores of the Baja Peninsula.',
    price: 400,
    testimonial: {
      message: '"Nobu Hotel Los Cabos exceeded all expectations. The fusion of sophisticated design, top-notch amenities, and the exceptional Nobu dining experience made our stay an unforgettable blend of luxury and indulgence."',
      personName: 'Emily Rodriguez',
      title: 'Travel Feature Contributor, "Departures Magazine."',
      date: 'May. 2023',
    },
  },
  {
    name: 'Four Seasons Resort Maui at Wailea',
    image: '/recommendation/maui.jpg',
    location: 'Maui, Hawaii, USA',
    desc: 'Four Seasons Resort Maui at Wailea is a tropical paradise with stunning oceanfront accommodations. Enjoy the beauty of Hawaii with luxurious amenities and world-class service.',
    price: 950,
    testimonial: {
      message: '"A haven of tranquility! Four Seasons Maui at Wailea offers a blend of luxury and Hawaiian serenity. The lush gardens, attentive staff, and the mesmerizing sunset views made our stay an extraordinary escape."',
      personName: 'David Patel',
      title: 'Destination Specialist, "Luxury Travel Advisor."',
      date: 'Dec. 2019',
    },
  },
  {
    name: 'Amanemu',
    image: '/recommendation/amanemu.png',
    location: 'Ise-Shima, Japan',
    desc: 'Amanemu is a tranquil retreat in the Japanese countryside, overlooking Ago Bay. Experience traditional Japanese architecture, natural hot springs, and serene landscapes.',
    price: 1400 ,
    testimonial: {
      message: '"Amanemu is a Japanese masterpiece! From the serene hot springs to the minimalist luxury of the accommodations, every element exuded tranquility and refinement. The integration of traditional Japanese aesthetics, impeccable service, and the calming onsen waters made our stay a truly authentic and luxurious escape."',
      personName: 'Michael Anderson',
      title: 'Travel Writer, "Condé Nast Traveler."',
      date: 'Mar. 2022',
    },
  },
];

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Recommendation = () => {
  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount: 0}}
      className='pb-12 xl:pt-[157px] xl:pb-[112px] bg-soft_green-secondary relative'
    >
      {/*Slider*/}
      <motion.div 
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView='show'
        viewport={{once:false, amount: 0}}
      >
        <Swiper 
          modules={[Autoplay]} 
          autoplay={{
            delay:4000,
            disableOnInteraction: true,
          }}
          loop
          speed={1700}
        >
          {recommendationData.map((hotel, index) => {
            return <SwiperSlide key={index}>
              <div className='flex flex-col xl:flex-row xl:pl-[135px] gap-y-12 xl:gap-y-0'>
                {/*Text*/}
                <div className='max-w-[345px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0'>
                  <h2 className='h2 mb-4'>{hotel.name}</h2>
                  <p className='text-soft_green text-sm mb-6'>{hotel.location}</p>
                  <p className='mb-[60px]'>{hotel.desc}</p>
                  <div className='flex items-center gap-x-[50px]'>
                    <Button variant='accent' className='px-[44px]'>Book Now</Button>
                    <div className='text-black'>
                      <span className='font-bold text-2xl'>{hotel.price}</span>
                      <span className='text-sm'>USD/Night</span>
                      </div>
                  </div>
                </div>
                {/*Image*/}
                <div className='order-1 xl:order-2 flex-1 flex justify-center xl:justify-end relative h-[634px]'>
                  <div>
                    <Image 
                      src={hotel.image} 
                      width={905} 
                      height={528} 
                      quality={100} 
                      alt='' 
                      className='xl:rounded-tl-[20px] xl:rounded-bl-[20px]'
                    />
                    <div className='bg-soft_green p-4 text-white text-center xl:text-left xl:max-w-[468px] xl:min-h-[212px] xl:absolute xl:bottom-0 xl:translate-x-1/2 xl:rounded-xl xl:px-10'>
                      <p className='mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6'>
                        {hotel.testimonial.message}
                      </p>
                      <p className='text-xl font-bold'>
                        {hotel.testimonial.personName}
                      </p>
                      <p>{hotel.testimonial.title}</p>
                      <p>{hotel.testimonial.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          })}
        </Swiper>
      </motion.div>
      {/*Pattern*/}
      <Image 
        src={'/recommendation/pattern.svg'} 
        width={240} 
        height={240} 
        alt='' 
        className='hidden xl:flex absolute left-[135px] -bottom-[120px]'
      />
    </motion.section>
  );
};

export default Recommendation;