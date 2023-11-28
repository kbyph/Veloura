'use client';

import Image from 'next/image';
import Stats from './Stats';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useInView } from 'react-intersection-observer';
import { Button } from './ui/button';
import { useMediaQuery } from 'react-responsive';

const About = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)',  
    });
    const [ref, inView] = useInView({
        threshold: !isMobile ? 0.5 : null,
    });

    return (
    <section className='py-12 xl:pt-0 xl:pb-24' ref={ref}>
        <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row'>
                {/*Image*/}
                <motion.div 
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.4}}    
                    className='flex-1 relative'
                >
                    <Image 
                        src={'/about/img2.png'} 
                        width={559} 
                        height={721} 
                        alt='' 
                    />
                </motion.div>
                {/*Text*/}
                <motion.div 
                    variants={fadeIn('left', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.4}}
                    className='xl:max-w-[470px]'
                >
                    <h2 className='h2 mb=[38px] mb-4'>About Veloura</h2>
                    <p>
                    At Veloura, our extensive network includes collaborations with thousands of luxury hotels and resorts across over a hundred countries, granting our users access to an expansive array of accommodations worldwide. 
                    We believe in a collaborative approach to trip planning, encouraging users to actively engage with us to craft personalized getaways that offer exceptional value. 
                    Whether you're a solo traveler or a group, we're here to ensure your journey is not just memorable but precisely tailored to your preferences.
                    </p>

                    {/*Stats*/}
                    <div className='my-5 xl:my-10 min-h-[35px]'>
                        {inView && <Stats />}
                    </div>
                    <p className='mb-10'>
                    Our commitment to fostering connections extends beyond individual travelers—we warmly welcome partnerships of all sizes. 
                    By joining forces with us, businesses gain access to a suite of cutting-edge data tools and technologies that not only empower them but also maximize their potential in the ever-evolving landscape of the hospitality industry. 
                    Veloura is more than a hotel-finding service; it's a hub for meaningful connections and mutually beneficial collaborations, dedicated to enhancing the travel experience for all.
                    </p>
                    <Button variant='accent'>Explore More</Button>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default About;