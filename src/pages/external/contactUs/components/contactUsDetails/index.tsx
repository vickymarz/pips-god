import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from 'react-icons/fa'
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";

export const ContactUsDetails = () => {
  return (
    <div className="flex flex-col mt-12 md:mt-0 basis-6/12">
      <div className="mb-[20px] md:mb-[32px]">
        <h3 className="md:text-[2.37rem] font-bold text-[#424245] font-productSans #19275E mb-[16px]"> Get in touch</h3>
        <p className="text-[#19275E] text-[1.12rem] leading-[1.7rem] md:leading-[2.37rem]">Ask us whatever burning questions you have, we are always on standby to answer them.</p>
      </div>
      <div className="flex flex-col justify-start items-start md:gap-y-[20px] md:pb-[50px] md:border-b border-[#8B8B8B]">
        <div className="flex items-start text-[0.87rem] md:text-[1.37rem] font-bold text-[#0D142E] gap-x-[17px]">
          <FiPhoneCall className="w-6 h-6 text-[#0D142E]" />
          <span>+2347012345678</span>
        </div>
        <div className="flex justify items-center text-[0.87rem] md:text-[1.37rem] font-bold text-[#0D142E] gap-x-[17px]">
          <FaRegEnvelope className="w-6 h-6 text-[#0D142E]" />
          <a href="mailto:hello@pipsgod@gmail.com" className="text-[#0D142E]">
            hello@pipsgod@gmail.com
          </a>
        </div>
      </div>
      <div className="mt-[20px]">
        <h4 className="text-[#0D142E] text-[0.87rem] font-productSans md:font-bold md:text-[24px]">We are on social media:</h4>
        <ul className="flex justify-start items-center gap-x-[20px] text-[#0D142E] mt-[20px]">
          <li>
            <a href="/" target="_blank">
              <FaFacebook className="w-6 h-6 text-[#0D142E]" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <FaTwitter className="w-6 h-6 text-[#0D142E]" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <FaInstagram className="w-6 h-6 text-[#0D142E]" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <FaTelegram className="w-6 h-6 text-[#0D142E]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

