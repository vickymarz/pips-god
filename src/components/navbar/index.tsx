import { Link } from 'react-router-dom';
import { Button } from 'components';
import MediaQuery from 'react-responsive';

type navbarProps = {
    menuOpen: boolean,
    handleMenuOpen: () => void
}

export const Navbar = ({menuOpen, handleMenuOpen}: navbarProps) => {
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
        <li key={id} className="text-center font-productSans text-white text-[0.9rem]">
          <Link
            to={`/${path}`}
            onClick={handleMenuOpen}
          >
            {children}
          </Link>
        </li>
      ));

  return (
    <nav className={`flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-24 md:gap-y-0 fixed md:static w-full h-full md:w-max md:h-max top-16 ${menuOpen ? 'right-0' : '-right-full'} bottom-0 bg-pink md:bg-light z-8 transition-all duration-1000 ease-in-out md:transition-none`}>
      <ul className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-x-[2rem]  gap-y-9 md:gap-y-0 mt-16 md:mt-0'>
        {navigation}
      </ul>
      <MediaQuery maxWidth={768}>
      { (matches: boolean) =>
         matches && (
            <>
          <Button type="button" onClick={handleMenuOpen} className='font-productSans rounded-lg bg-light text-pink md:text-light md:bg-pink px-[0.9rem] py-[0.3rem] text-2xl md:text-[1rem]'>
          Log in
        </Button>
          <Button type="button" onClick={handleMenuOpen} className='font-productSans rounded-lg bg-light text-pink md:text-light md:bg-pink px-[0.9rem] py-[0.3rem] text-2xl md:text-[1rem]'>
          Get Started
        </Button>
        </>
         )
        //     <div className='flex justify-start items-center gap-x-[25px]'>
        //   <Button type="button" className='font-productSans rounded-lg border border-white text-white py-[0.3rem] px-[0.9rem] text-[0.7rem]'>
        //     Log in
        //   </Button>
        //   <Button type="button" className='font-productSans rounded-lg bg-white text-[#0D142E] py-[0.3rem] px-[0.9rem] text-[0.7rem] font-bold'>
        //     Get Started
        //   </Button>
        // </div>
        // )
      }
      </MediaQuery>
    </nav>
  )
}

