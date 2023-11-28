import Image from "next/image";
import Link from 'next/link';
import { Button } from './ui/button';
import MobileNav from './MobileNav';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='absolute w-full max-w-[1440px] py-8 xl:py-10'>
      <div className='container mx-auto'>
        {/*Logo, Desktop Navigation, Button*/}
        <div className='flex items-center justify-between'>
          {/*Logo*/}
          <Link href='/'>
          <Image 
            src='/header/logo.png'
            width={180}
            height={60}
            alt=''
            className='mb-2'
          />
          </Link>
          {/*Desktop Navigation & Button*/}
          <div className='hidden xl:flex'>
            <div className='flex items-center gap-x-12'>
              <Nav 
                containerStyles='flex items-center justify-between'
                listStyles='flex gap-x-12 text-white'
              />
              <Button variant='outline' className='px-10 h-[58px]'>Sign In</Button>
            </div>
          </div>
        </div>
        {/*Mobile Navigation*/}
        <div className="xl:hidden absolute right-8 top-8">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;