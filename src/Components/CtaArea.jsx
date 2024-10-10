import React from 'react';

function CtaArea() {
  return (
    <div className='relative flex flex-col items-center'>
      {/* Background Image with reduced opacity */}
      <img 
        src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/collection_cta.png" 
        className='absolute  object-cover opacity-15 z-0' 
        alt="" 
      />

      <div className="container mx-auto relative z-10 ">
        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            <div className="cta__content text-center relative mt-36">
              <img 
                decoding="async" 
                src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/circle-01.png" 
                width="24" 
                alt="" 
                className="absolute top-0 left-[-16%] z-20" 
              />
              <img 
                decoding="async" 
                src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/bitcoin-01.png" 
                width="48" 
                alt="" 
                className="absolute bottom-4 left-[-8%] z-20" 
              />
              <img 
                decoding="async" 
                src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/ethereum-02.png" 
                width="40" 
                alt="" 
                className="absolute top-0 right-[-7%] lg:right-[-27%] z-20" 
              />
              <img 
                decoding="async" 
                src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/x.png" 
                width="24" 
                alt="" 
                className="absolute bottom-4 right-[-17%] z-20" 
              />

              <h2 className="title text-4xl lg:text-9xl  lg:w-[700px]  mt-6 font-extrabold">Let's start minting</h2>
              <a 
                href="#" 
                target="_blank" 
                rel="nofollow" 
                className="btn gradient-btn mt-9 lg:mt-24 inline-block py-3 px-3  lg:px-16 text-lg lg:text-2xl lg:py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full"
              >
                Join community
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=' mt-14 lg:mt-32'>
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
  );
}

export default CtaArea;
