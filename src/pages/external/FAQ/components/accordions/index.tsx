import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export const Accordions = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  function Icon({ id, open }: {id: number, open: number}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform text-[#fff] border border-solid border-[#fff] p-1 rounded-full `}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }

  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="!font-bold !text-[1rem] lg:!text-xl !text-[#fff] !border-0 !border-[#fff]"
        >
          What is pipsgod academy?
        </AccordionHeader>
        <AccordionBody className="!text-[#fff] !text-[0.75rem] lg:!text-sm">
          This is an online learning platform for users interested in learning FOREX trading, This website is built with comprehensive courses from the basics of forex market to advanced trading strategies.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="!font-bold !text-[1rem] lg:!text-xl !text-[#fff] !border-0 !border-[#fff]"
        >
          How much do I pay for VIP Mentorship?
        </AccordionHeader>
        <AccordionBody className="!text-[#fff] !text-[0.75rem] lg:!text-sm">
           Our VIP signal group costs $100 (50,000 Naira.) monthly.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="!font-bold !text-[1rem] lg:!text-xl !text-[#fff] !border-0 !border-[#fff] !text-left"
        >
          Who is Pipsgod academy for?
        </AccordionHeader>
        <AccordionBody className="!text-[#fff] !text-[0.75rem] lg:!text-sm">
          Pipsgod academy is for anyone who wants to learn how to trade forex.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="!font-bold !text-[1rem] lg:!text-xl !text-[#fff] !border-0 !border-[#fff]"
        >
          Is Pipsgod academy a guarantee of success in trading?
        </AccordionHeader>
        <AccordionBody className="!text-[#fff] !text-[0.75rem] lg:!text-sm">
          Pipsgod academy is not a guarantee of success in trading, but it is a platform that will help you learn how to trade forex.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="!font-bold !text-[1rem] lg:!text-xl !text-[#fff] !border-0 !border-[#fff]"
        >
         Does Pigsgod academy offer support?
        </AccordionHeader>
        <AccordionBody className="!text-[#fff] !text-[0.75rem] lg:!text-sm">
          Yes, we offer support to our users.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className="!font-bold !text-[1rem] lg:!text-xl !text-[#fff] !border-0 !border-[#fff]"
        >
          Does pipsgod academy offer courses?
        </AccordionHeader>
        <AccordionBody className="!text-[#fff] !text-[0.75rem] lg:!text-sm">
          Yes, we offer some free courses on forex trading.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className="!font-bold !text-[1rem] lg:!text-xl !text-[#fff] !border-0 !border-[#fff] !text-left"
        >
         Can I join both the VIP signal group and the premium mentorship?
        </AccordionHeader>
        <AccordionBody className="!text-[#fff] !text-[0.75rem] lg:!text-sm">
          Yes, you can join both the VIP signal group and the premium mentorship.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
};
