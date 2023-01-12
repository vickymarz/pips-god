import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {Button} from "components";
import { Navbar } from 'components';
import { Logo } from 'components';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};

  return (
    <header className='w-full h-20 lg:h-24 fixed top-0 left-0 right-0 px-5 py-5 lg:px-20 flex justify-between items-center z-10'>
      <Logo />
      <MediaQuery maxWidth={1024}>
        {matches =>
          matches ? (
            <>
              {isMenuOpen ? (
			          <Button type="button" onClick={handleMenuOpen}>
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
            </>
          )
        }
        </MediaQuery>
    </header>

  )
}


