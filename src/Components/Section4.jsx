import React from 'react';
import { useInView } from 'react-intersection-observer';

const  Section4 = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="fact-area relative">
      <div className="container mx-auto mt-28 ">
        <div ref={ref} className={`fact__items-wrap relative ${inView ? 'animate-spin-grow' : 'scale-50 opacity-0'}`}>

          {/* Decorative Shapes */}
          <img 
            decoding="async" 
            className="shape absolute w-12" 
            src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/bitcoin-01.png" 
            width="32" 
            alt="" 
            style={{ bottom: '-32%', left: '30%', opacity: 1, transform: 'scale(1)' }} 
            data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200"
          />
          <img 
            decoding="async" 
            className="shape absolute w-11" 
            src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/ethereum-01.png" 
            width="24" 
            alt="" 
            style={{ top: '-25%', right: '25%', opacity: 1, transform: 'scale(1)' }} 
            data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200"
          />

          {/* Facts Grid */}
          <div className="row flex flex-col md:flex-row justify-between" data-anime="targets: > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -250; delay: anime.stagger(100)">
            <div className="col-lg-4 col-md-6 col-sm-8 opacity-100 transform scale-100">
              <div className="fact__item text-center flex flex-col gap-5">
                <h2 className="fact__count text-7xl lg:text-8xl font-extrabold text-text3 ">4,000+</h2>
                <span className="meta text-2xl text-text2">Wallets Connected</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8 opacity-100 transform scale-100">
              <div className="fact__item text-center flex flex-col gap-5">
                <h2 className="fact__count text-7xl lg:text-8xl font-extrabold text-text3">20,000+</h2>
                <span className="metatext-2xl text-text2">Collections Indexed every 5 mins.</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8 opacity-100 transform scale-100">
              <div className="fact__item text-center flex flex-col gap-5">
                <h2 className="fact__count text-7xl lgtext-8xl font-extrabold text-text3">2.5x</h2>
                <span className="meta text-2xl text-text2">Difference in Floor &amp; Estimated Value</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
