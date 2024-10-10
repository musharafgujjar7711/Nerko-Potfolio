import React from 'react';
import { useInView } from 'react-intersection-observer';

const Section3 = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, 
    triggerOnce: true, 
  });
  return (
    <section className="mint-area">
      <div ref={ref} className={`container lg:mt-32 flex flex-col items-center  ${inView ? 'fade-in-up' : 'opacity-0'}`} >
        {/* Title Section */}
        <div className="flex justify-center " data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200" style={{ opacity: 1, transform: 'translateY(0px)' }}>
          <div className="w-full">
            <h2 className="title text-center text-7xl font-roboto font-extrabold mb-20">How to mint</h2>
          </div>
        </div>

        {/* Mint List Wrapper */}
        <div className="mint__lists-wrapper" data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300">
          {/* Decorative Shapes */}
          <img 
            decoding="async" 
            className="shape absolute w-16" 
            src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/circle-01.png" 
            alt="" 
            style={{ top: '-16%', left: '8%', opacity: 1, transform: 'translateY(0px)' }} 
          />
          <img 
            decoding="async" 
            className="shape absolute w-28" 
            src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/circle-02.png" 
            alt="" 
            style={{ bottom: '16%', left: '-8%', opacity: 1, transform: 'translateY(0px)' }} 
          />
          <img 
            decoding="async" 
            className="shape absolute w-24" 
            src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/x.png" 
            alt="" 
            style={{ bottom: '16%', right: '-8%', opacity: 1, transform: 'translateY(0px)' }} 
          />

          {/* Steps Section in a Grid with 2 Rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: -250; delay: anime.stagger(100)" style={{ opacity: 1, transform: 'translateY(0px)' }}>
            {[
              {
                title: 'Connect your wallet',
                desc: 'Use Trust Wallet, Metamask or any wallet to connect to the app.',
                imgSrc: 'https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-01.png',
              },
              {
                title: 'Select your quantity',
                desc: 'Use Trust Wallet, Metamask or any wallet to connect to the app.',
                imgSrc: 'https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-02.png',
              },
              {
                title: 'Confirm transaction',
                desc: 'Earn ETH and BIT for all your NFTs that you sell on our marketplace.',
                imgSrc: 'https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-03.png',
              },
              {
                title: 'Receive your NFTs',
                desc: 'Latin professor at Hampden-Sydney College in Virginia.',
                imgSrc: 'https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-04.png',
              },
            ].map((item, index) => (
              
                <div key={index} className="mint__item flex text-center flex-col sm:flex-col md:flex-row items-center gap-4 md:gap-14 mb-8 md:p-10 shadow-md  bg-white rounded ">
                <div className="mint__icon mb-4">
                  <img decoding="async" className="light w-20  sm:w-40" src={item.imgSrc} alt="" />
                </div>
                <div className="mint__content flex flex-col gap-3 md:gap-12">
                  <h2 className="title text-lg md:text-4xl font-bold">{item.title}</h2>
                  <p className="desc text-text2 md:w-[380px] text-2xl font-semibold">{item.desc}</p>
                </div>
              </div>
             
            ))}
          </div>
          
        </div>
        <div  ref={ref}
      className={`section-divider mt-28  ${inView ? 'fade-in-up' : 'opacity-0'}`} 
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
    </section>
  );
};

export default Section3;
