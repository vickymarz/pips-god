import React, { useEffect } from "react";
import { ContactUsDetails, ContactUsForm  } from "./components";
import { Footer, Header } from "components";

export const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 20);
  }, []);

  return (
    <>
    <Header />
    <section className="bg-authImg bg-cover bg-no-repeat">
    <div className="w-full h-full bg-[#e5e5e5] py-[70px] md:py-[90px]">
        <div className="w-[90%] md:w-[80%] mx-[auto]">
           <h2 className="w-full text-center text-[1.37rem] text-[3.12rem] font-bold font-productSans text-[#0D142E]">Contact Us</h2>
           <div className="w-full flex flex-col md:flex-row md:justify-between items-start mt-[10px] md:mt-[40px]">
                <ContactUsForm />
                <ContactUsDetails />
            </div>
        </div>
    </div>
    </section>
    <Footer />
    </>
  );
};

