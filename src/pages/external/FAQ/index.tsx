import { Link } from "react-router-dom";
import { Accordions } from "./components";
import pipsgod from "../../../assets/images/pipsgod.png";
import {Footer, Header, Button} from "../../../components";

export const Faq = () => {
  return (
    <>
      <Header />
      <section className="pt-[90px] pb-[20px] md:pt-[150px] md:px-[80px]  bg-[#281B5B]">
        <div className="flex flex-col justify-center items-center gap-y-3 md:gap-y-[24px] mb-16 md:mb-18">
          <div className='flex flex-col justify-center items-center gap-y-[8px] md:gap-y-[12px]'>
            <h2 className="text-[#fff] font-medium text-[1.25rem] md:text-[2.5rem]">
              Frequently Asked Questions
            </h2>
            <p className="font-medium text-[#9F9F9F] text-[0.75rem] md:text-[1.5rem]">
              Things you need to know about Pipsgod Academy
            </p>
          </div>
        </div>
        <div className="w-[90%] md:w-6/12 m-auto">
          <Accordions />
        </div>
        <div className="h-[294px] mt-[64px] mb-[60px] md:mb-[60px] md:mt-[137px] w-[90%] md:w-[80%] mx-auto bg-[#E7F0FF] rounded flex flex-col justify-center items-center gap-y-[10px] md:gap-y-6">
          <div className=" mt-[64px] mb-[60px] md:mb-[108px] md:mt-[100px] w-[90%] md:w-[80%] mx-auto bg-[#E7F0FF] rounded flex flex-col justify-center items-center gap-y-[10px] md:gap-y-4">
            <div>
                <img className="w-50px"src={pipsgod} alt="" />
            </div>
            <h3 className="text-[#0D142E] font-medium text-[1.25rem]">Still have questions?</h3>
            <p className="text-[#717172] md:text-[1.125rem] text-center">Can’t find the answer you’re looking for? Please, reach out to our friendly team.</p>
            <Button type="button" className='bg-[#0D142E] rounded py-2.5 md:py-3 px-6 md:px-8 mt-4'>
              <Link to='/contact-us' className="text-[#fff] font-medium">
                Get in touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
