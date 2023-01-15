import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { useInView } from 'react-intersection-observer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {Button} from "components";
import { Navbar } from 'components';
import { Logo } from 'components';

export const Header = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};

  return (
    <>
    <header className={`w-full h-20 md:h-24 fixed top-0 left-0 right-0 px-5 py-5 md:px-[5%] flex justify-between items-center z-10 ${inView ? '' : 'bg-[#0D142E]'}`}>
      <Logo />
      <MediaQuery maxWidth={768}>
        {matches =>
          matches ? (
            <>
              {isMenuOpen ? (
			          <Button type="button" onClick={handleMenuOpen} className="z-10">
				          <FontAwesomeIcon icon={faTimes} className="text-white text-[25px]"/>
				        </Button>
				      ) : (
				        <Button type="button" onClick={handleMenuOpen}>
				          <FontAwesomeIcon icon={faBars}  className="text-white text-[25px]"/>
				        </Button>
				      )
              }

              <Navbar menuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />

            </>
          ) :
          (
            <>
             <Navbar menuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen}/>
             <div className='flex justify-start items-center gap-x-[25px]'>
               <Button type="button" className='font-productSans rounded-lg border border-white text-white py-[0.3rem] px-[0.9rem] text-[0.9rem]'>
                 Log in
               </Button>
               <Button type="button" className='font-productSans rounded-lg bg-white text-[#0D142E] py-[0.3rem] px-[0.9rem] text-[0.9rem] font-bold'>
                 Get Started
               </Button>
             </div>
            </>
          )
        }
        </MediaQuery>
    </header>
    <div ref={ref}></div>
  </>
  )
}


