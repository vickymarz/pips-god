import React, { useEffect } from "react";
import {  ContactUsForm  } from "./components";
import { Footer, Header } from "components";

export const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 20);
  }, []);

  return (
    <>
    <Header />
    <section className="bg-[#281B5B]">
    <div className="w-full h-full py-[80px] md:py-[100px]">
        <div className="w-[90%] mx-[auto]">
           <h2 className="w-full text-center text-[2rem] md:text-[3.12rem] font-bold font-productSans text-[#fff]">Contact Us</h2>
           <div className="w-full flex flex-col justify-center items-start md:block md:w-[80%] mx-auto mt-[10px] md:mt-[40px]">
                <ContactUsForm />
                {/* <ContactUsDetails /> */}
            </div>
        </div>
    </div>
    </section>
    <Footer />
    </>
  );
};

