import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../button';
import MediaQuery from 'react-responsive';

type navbarProps = {
    menuOpen: boolean,
    handleMenuOpen: () => void
}

const Navbar = ({menuOpen, handleMenuOpen}: navbarProps) => {
    const nav = [
        {
          id: 1,
          path: '',
          children: 'Home',
        },
        {
          id: 2,
          path: 'about',
          children: 'About Us',
        },
        {
          id: 3,
          path: 'academy',
          children: 'The Academy',
        },
        {
          id: 4,
          path: 'faq',
          children: 'FAQs',
        },
        {
          id: 4,
          path: 'contact',
          children: 'Contact & Support',
        },
      ];

      const navigation = nav.map(({ id, path, children }) => (
        <li key={id}>
          <Link
            to={`/${path}`}
            onClick={handleMenuOpen}
          >
            {children}
          </Link>
        </li>
      ));

  return (
    <nav className={`flex flex-col lg:flex-row lg:justify-center lg:justify-between items-center lg:gap-x-44 gap-y-24 lg:gap-y-0 fixed lg:static w-full h-full lg:w-max lg:h-max top-16 ${menuOpen ? 'right-0' : '-right-full'} bottom-0 bg-pink lg:bg-light z-8 transition-all duration-1000 ease-in-out lg:transition-none`}>
      <ul className='flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:gap-x-12 gap-y-9 lg:gap-y-0 text-light lg:text-blackk text-2xl lg:text-xl mt-16 lg:mt-0'>
        {navigation}
      </ul>
      <MediaQuery maxWidth={1024}>
      { (matches: boolean) =>
         matches ? (
            <>
          <Button type="button" onClick={handleMenuOpen} className='rounded-lg bg-light text-pink lg:text-light lg:bg-pink px-7 py-3.5 text-2xl lg:text-base'>
          Log in
        </Button>
          <Button type="button" onClick={handleMenuOpen} className='rounded-lg bg-light text-pink lg:text-light lg:bg-pink px-7 py-3.5 text-2xl lg:text-base'>
          Get Started
        </Button>
        </>
         ): (
            <>
          <Button type="button"  className='rounded-lg bg-light text-pink lg:text-light lg:bg-pink px-7 py-3.5 text-2xl lg:text-base'>
            Log in
          </Button>
          <Button type="button"  className='rounded-lg bg-light text-pink lg:text-light lg:bg-pink px-7 py-3.5 text-2xl lg:text-base'>
            Get Started
          </Button>
        </>
        )
      }
      </MediaQuery>
    </nav>
  )
}

export default Navbar

