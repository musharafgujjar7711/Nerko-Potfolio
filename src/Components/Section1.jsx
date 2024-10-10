import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useInView } from 'react-intersection-observer';

function Section1() {
  const { ref, inView } = useInView({
    threshold: 0.1, 
    triggerOnce: true, 
  });
  return (
    <div className='relative bg-col w-full'>
      <div ref={ref} className={`container mx-auto flex flex-col lg:flex-row items-center mt-24 px-4  ${inView ? 'fade-in-up' : 'opacity-0'}`}>
        {/* Left Content Section */}
        <div className='fade-in-up relative flex flex-col items-center lg:items-start flex-1 gap-10'>
          <h1 className='text-5xl sm:text-4xl lg:text-7xl leading-10 font-Grotesk text-center lg:text-left font-extrabold md:w-[600px]'>
            Supercharge your NFT Adventure
          </h1>
          <p className='text-text2 text-xl sm:text-2xl w-full sm:w-[390px] text-center lg:text-left'>
            Find the right NFT collections to buy within the platform.
          </p>
          <img
            src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/ethereum-01.png"
            alt="Ethereum Icon"
            className='absolute left-[50%] transform -translate-x-1/2 -translate-y-12 w-12 h-12'
          />
          <div className='flex items-center flex-wrap gap-5 mb-12'>
            <a
              href="https://opensea.io/"
              target="_blank"
              rel="nofollow"
              className="flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:bg-gradient-to-l transition"
            >
              <span className='flex gap-2 items-center'>View in OPENSEA <FaArrowRightLong /></span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className=' flex justify-center flex-1 mb-10 lg:mb-16 relative'>
          <img
            src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/x.png"
            className='absolute lg:w-8 w-5 h-5 right-[56px] lg:h-8 lg:right-4 lg:bottom-24 lg:top-[-37px] lg:left-[533px] z-40'
            alt="Decorative Element"
          />
          <img
            className='absolute w-10 h-10 left-[-70px] md:top-[210px] sm:left-[-90px]'
            src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/bitcoin-01.png"
            alt="Bitcoin Icon"
          />
          <img
            src="/back.svg"
            className='w-[500px] h-[200px] lg:h-[450px] absolute bg-red-200 rounded-3xl -rotate-6'
            alt=""
          />
          <img
            className='relative h-auto left-[100px] top-[-23px] w-[300px] md:w-[520px] md:top-[-62px] md:left-[353px] opacity-30'
            src="https://themegenix.net/wp/nerko/wp-content/themes/nerko/assets/img/others/blob-dashed.svg"
            alt=""
          />

          <div className='flex gap-5 absolute justify-center'>
            <div className='flex-1'>
              <img
                className='md:w-[450px] w-auto rounded-xl relative'
                src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_09.jpg"
                alt="NFT Artwork 1"
              />
            </div>
            <div className='flex-1'>
              <img
                className='md:w-[380px] w-auto rounded-xl relative top-7'
                src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_06.jpg"
                alt="NFT Artwork 2"
              />
            </div>
          </div>

          {/* Circular Text Link */}
          <div className='z-40 left-0 top-[80px] flex justify-center w-full'>
  <a
    href="https://opensea.io/"
    target="_blank"
    rel="nofollow"
    className="flex items-center justify-center absolute left-14 md:-left-20 top-14 text-rose-300 bg-white rounded-full"
  >
    <svg
      className="tg-circle-text-path tg-animation-spin"
      viewBox="0 0 100 100"
      width="120"
      height="120"
    >
      <defs>
        <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"></path>
      </defs>
      <text fontSize="11.75" fill="none" stroke="currentColor" strokeWidth="0.5">
        <textPath xlinkHref="#circle">view in opensea • view in opensea •</textPath>
      </text>
    </svg>
    <i className="unicon-arrow-up-right ml-2"></i>
  </a>
</div>
        </div>
      </div>
    </div>
  );
}

export default Section1;

