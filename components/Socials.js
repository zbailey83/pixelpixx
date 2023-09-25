// links
import Link from 'next/link';

// icons
import {
  RiTwitterLine,
  RiLinkedinLine,
  RiMediumLine,
  RiGmailLine,
  RiBehanceLine,
  RiPinterestLine,
} from 'react-icons/ri';

import { SiGumroad } from "react-icons/si";

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://twitter.com/zbailey83'} className='hover:text-accent transition-all duration-300'>
        <RiTwitterLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/zbailey83'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
     <Link href={'https://promptpro.gumroad.com'} className='hover:text-accent transition-all duration-300'>
        <SiGumroad />
      </Link>
      <Link href={'https://promptpro.medium.com'} className='hover:text-accent transition-all duration-300'>
        <RiMediumLine />
      </Link>
    
    </div>
  );
};

export default Socials;
