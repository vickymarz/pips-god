import { useState } from 'react';
import MediaQuery from 'react-responsive';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from "components";
import { Navbar } from 'components';
import { Logo } from 'components';
import { Link } from 'react-router-dom';

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
    <header className={`w-full h-20 md:h-24 fixed top-0 left-0 right-0 px-5 py-5 md:px-[5%] flex justify-between items-center z-10 ${inView ? '' : 'bg-[#fff] shadow-headerShadow'}`}>
      <Logo />
      <MediaQuery maxWidth={768}>
        {matches =>
          matches ? (
            <>
              {isMenuOpen ? (
			          <Button type="button" onClick={handleMenuOpen} className="z-10">
				          <FontAwesomeIcon icon={faTimes} className={` text-[25px] ${inView ? 'text-white' : 'text-[#232323]'}`}/>
				        </Button>
				      ) : (
				        <Button type="button" onClick={handleMenuOpen}>
				          <FontAwesomeIcon icon={faBars}  className={` text-[25px] ${inView ? 'text-white' : 'text-[#232323]'}`}/>
				        </Button>
				      )
              }

              <Navbar menuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} view={inView} />

            </>
          ) :
          (
            <>
             <Navbar menuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} view={inView}/>
             <div className='flex justify-start items-center gap-x-[25px]'>
              <Link to={'./login'} className={`font-productSans rounded-lg py-[0.5rem] px-[0.9rem] text-[0.9rem] ${inView ? 'text-white border border-white' : 'text-[#0D142E] border border-[#0D142E]'}`}>
                Log in
              </Link>
              <Link to={'/mentorship_payment'} className={`font-productSans rounded-lg  py-[0.5rem] px-[0.9rem] text-[0.9rem] font-bold ${inView ? 'bg-white text-[#0D142E]' : 'text-[#fff] bg-[#0D142E]'}`}>
                Get Started
              </Link>
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


