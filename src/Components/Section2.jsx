import React from 'react';
import { useInView } from 'react-intersection-observer';

const Section2 = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, 
    triggerOnce: true, 
  });
  return (
    <div className="brand-area" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;" style={{ opacity: 1, transform: 'translateY(0px)' }}>

      <div
       className="container mx-auto mt-40 ">
        <div  ref={ref}  className={`flex justify-center  ${inView ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="w-full max-w-7xl flex flex-col items-center gap-10">
            <h6 className="brand__title text-center text-text2 text-2xl font-semibold mb-4">POWERED BY AMAZING INVESTORS:</h6>
            <div className="brand__list flex flex-col md:flex-row justify-center items-center gap-11 text-lg">
              {[
                { light: "wallet-01.svg", dark: "wallet-light-01.svg" },
                { light: "wallet-02.svg", dark: "wallet-light-02.svg" },
                { light: "wallet-03.svg", dark: "wallet-light-03.svg" },
                { light: "wallet-04.svg", dark: "wallet-light-04.svg" },
                { light: "wallet-05.svg", dark: "wallet-light-05.svg" },
              ].map((item, index) => (
                <div key={index} className="brand__item flex items-center">
                  <a href="#" aria-label="Investor brand">
                    <img 
                      decoding="async" 
                      src={`https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/${item.light}`} 
                      className="has-active-light" 
                      alt={`Investor logo ${index + 1}`} 
                    />
                  </a>
                  <a href="#" aria-label="Investor brand dark version">
                    <img 
                      decoding="async" 
                      src={`https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/${item.dark}`} 
                      className="has-active-dark hidden" 
                      alt={`Investor logo ${index + 1} dark`} 
                    />
                  </a>
                </div>
              ))}
              
            </div>
            <div 
      className="section-divider mt-28" 
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
      </div>
      
    </div>
  );
};

export default Section2;
