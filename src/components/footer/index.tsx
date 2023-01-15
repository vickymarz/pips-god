import { Link } from "react-router-dom";
import { companyData, resourceData } from "./footerData";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { Input } from "components/input";
import { Button } from "components/button";
import ellipse from '../../assets/images/ellipse.png'

export const Footer = () => {
  const company = companyData.map((item, i) => (
    <li className="text-[#19275E] text-[0.87rem] lg:text-[1.12rem]" key={i}>
      <Link to={item.to} className=" hover:underline">
        {item.title}
      </Link>
    </li>
  ));

  const help = resourceData.map((item, i) => (
    <li className="text-[#19275E] text-[0.87rem] lg:text-[1.12rem]" key={i}>
      <Link to={item.to} className=" hover:underline">
        {item.title}
      </Link>
    </li>
  ));

  return (
    <footer className="bg-[#F8FAFC] overflow-hidden px-[1.6rem] lg:px-[5rem] lg:py-[4.37rem] py-[1.3rem]">
      <div className="mx-auto grid grid-cols-2 gap-8 lg:gap-x-[4rem] lg:grid-cols-4 items-start justify-between">
        <div>
          <h2 className="mb-[0.5rem] lg:mb-[2rem] text-[1.12rem] lg:text-[1.37rem] font-semibold text-[#0D142E]">
            Company
          </h2>
          <ul className="flex flex-col justify-start items-start gap-y-[1.37rem] text-[#0D142E]">{company}</ul>
        </div>
        <div>
          <h2 className="mb-[0.5rem] lg:mb-[2rem] text-[1.12rem] lg:text-[1.37rem] font-semibold text-[#0D142E]">
            Resources
          </h2>
          <ul className="flex flex-col justify-start items-start gap-y-[1.37rem] text-[#0D142E]">{help}</ul>
        </div>
        <div>
          <h2 className="mb-[0.5rem] lg:mb-[2rem] text-[1.12rem] lg:text-[1.37rem] font-semibold text-[#0D142E]">
            Contact Us
          </h2>
          <ul className="flex flex-col justify-start items-start gap-y-[1.37rem]">
            <li className="text-[#19275E] text-[0.87rem] lg:text-[1.12rem]">+2347012345678</li>
            <li className="text-[#19275E] text-[0.87rem] lg:text-[1.12rem]">We are on social media</li>
            <li className="flex text-[0.87rem] lg:text-[1.12rem] text-[#0D142E] gap-x-[1.75rem] justify-between">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" >
                <BsFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" >
                <BsInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" >
                <BsTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" >
                <BsYoutube />
              </a>
          </li>
        </ul>
        </div>
        <div className='flex justify-center items-center'>
            <Input
              type='email'
              name='email'
              placeholder='Enter email address'
              className='border border-[#0D142E] py-[0.9rem] md:py-[1.1rem] pl-[0.5rem] md:pl-[2rem] rounded-tl-[4px] md:rounded-tl-[10px] md:rounded-bl-[10px] bg-white text-[#CCCCCC] font-medium text-[0.7rem] md:text-[1.25rem]'
            />
            <div className='relative'>
              <img src={ellipse} alt="" className='block w-[10px] h-[10px] md:w-[26px] md:h-[26px] object-contain absolute top-[-5px] md:top-[-10px] right-0'/>
              <Button type="button" className='rounded-tl-none rounded-br-[10px] bg-[#0D142E] text-[#fff] py-[1.12rem] px-[0.5rem] md:py-[1.45rem] md:px-[1.3rem] text-[0.62rem] md:text-[0.87rem] font-bold'>
                Send
              </Button>
            </div>
          </div>
      </div>
      <div className="flex justify-center items-center">
        <span className="font-medium text-[0.75rem] lg:text-[1.25rem] text-[#19275E] mt-[100px]">
          © 2022 <span>Pips god Academy - All Rights Reserved</span>
        </span>
      </div>
    </footer>
  );
};

