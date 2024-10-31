"use client";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

function Accordion() {
  const [isActive, setIsActive] = useState(false);
  const accordionData = {
    title: "FAQs",

    content: [
      {
        heading: "about CRED",
        subHeading:
          "CRED is a members-only club that rewards trustworthy individuals with financial and lifestyle progress. members are rewarded with exclusive perks and privileges for making sound financial decisions. trusted by over 25 million creditworthy members, CRED transforms each payment into a rewarding experience.",
      },
      {
        heading: "getting a membership",
        subHeading:
          "to become a CRED member, you need a credit score of 750 or above. you can apply for membership by signing up on CRED with your name and a valid mobile number (issued within India). if your credit score makes the cut, we'll see you there.",
      },
      {
        heading: "the CRED member experience",
        subHeading:
          "CRED's suite of products is designed to help the creditworthy fast-track their financial & lifestyle progress. we partner with premier brands to offer unparalleled experiences and rewards to our members. members also earn cashback and coins on their payments, along with opportunities to elevate their lifestyle.",
      },
      {
        heading: "checking your credit score ",
        subHeading:
          "members can check and refresh their credit score on the CRED app. CRED acquires the updated credit score through a CIBIL score soft inquiry. you can access your credit score data anytime without any extra charges. as a member, this helps you keep regular checks on your credit score and re-evaluate your spending patterns to maintain a healthy credit status.",
      },
      {
        heading: "banks supported on CRED",
        subHeading:
          "CRED supports credit card bill payments for American Express, Standard Chartered, Citibank, HSBC, HDFC, ICICI, SBI, AXIS, RBL, PNB, and other top Indian banks. We support VISA, MasterCard, American Express & RuPay cards.",
      },
    ],
  };

  const { title, content } = accordionData;
  return (
    <div class="border-t border-b border-zinc-600 p-16 text-white cursor-pointer">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div class="text-zinc-300 text-[30px] font-medium tracking-[10px] text-center flex flex-row items-center justify-center">
            {title}
            <RiArrowDropDownLine
              class={`arrow ${isActive ? "rotate-180" : ""}`}
            />
          </div>
        </div>
        <div
          class={`overflow-hidden  duration-500 ease-in-out  ${
            isActive ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <div class="p-10">
            {content.map((item, index) => (
              <div key={index} class="flex flex-col">
                <span class="text-[31px] font-bold mt-12">{item.heading}</span>
                <span class="text-[22px] text-zinc-600 font-sans  mt-12 leading-loose">
                  {item.subHeading}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
