import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = () => {
  const faqItems = [
    {
      question: "What is Nerko's NFT Collection?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    },
    {
      question: "How we can buy and invest NFT?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    },
    {
      question: "Why we should choose Nerko's NFT?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    },
    {
      question: "Where we can buy and sell NFTs?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    },
    {
      question: "How secure is this token?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    },
    {
      question: "What is your contract address?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-area py-20">
      <div className=" container">
      <div className=' flex items-center flex-col w-5/6 '>
      <div className="mb-20 ">
          <div className="col-xl-8 col-lg-10 text-center">
            <h2 className="title lg:text-7xl text-2xl font-extrabold font-roboto">Asked Questions</h2>
          </div>
        </div>
        <div className=' mt-7 lg:mt-24 flex flex-col  gap-20 shadow-lg   lg:w-[1200px]  '>
          {faqItems.map((item, index) => (
            <div key={index} className='items-center flex-col mx-auto p-6  flex gap-11 sm:shadow-lg'>
              <div className='flex items-center  md:gap-40'>
                <h1 className='sm:text-2xl font-bold lg:text-3xl  capitalize lg:w-[700px] sm:w-2/4'>
                  {item.question}
                </h1>
                <button onClick={() => toggleAccordion(index)} className="focus:outline-none">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
              {openIndex === index && (
                <p className=' md:mr-20  md:w-[650px] text-text2 text-xl  leading-8 md:text-3xl transition-all duration-300 ease-in-out'>
                  {item.answer}
                </p>
              )}
             
            </div>
          ))}
        </div>
        <div 
      className="section-divider mt-10 lg:mt-40" 
      data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" 
      style={{ opacity: 1, transform: 'scale(1)' }}
    >
      <img 
        decoding="async" 
        src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/divider-01.svg" 
        alt="Divider"
        className="w-24 h-auto  " // Adjust as needed
      />
    </div>
      </div>
        
      </div>
    </section>
  );
};

export default FAQSection;

