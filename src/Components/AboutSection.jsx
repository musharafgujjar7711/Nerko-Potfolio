import React from 'react';
import { GrSelect } from 'react-icons/gr';
import { PiSelectionPlus } from 'react-icons/pi';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="about-area py-16">
      <div className="container mx-auto mt-24 flex flex-col gap-6 items-center text-center">
        <div className="row justify-center mb-20">
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center">
              <h2 className="text-2xl md:text-8xl font-roboto font-extrabold">About the platform</h2>
            </div>
          </div>
        </div>

        <div className="about__row-reverse">
          <div ref={ref} className="flex items-center text-center gap-x-24 flex-col sm:flex-col lg:flex-row md:flex-row xl:flex-row  ">
            <div className={`col-lg-6 ${inView ? 'slideInRight' : 'opacity-0 -translate-x-10'}`}>
              <img
                decoding="async"
                src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/features-03.png"
                alt=""
                className="w-full h-auto"
              />
            </div>

            <div className={`col-lg-6 p ${inView ? 'slideInLeft' : 'opacity-0 -translate-x-10'}`}>
              <div className="about__content flex flex-col  gap-10">
                <div className="section__title md:text-start">
                  <span className="sub-title text-center text-2xl text-text4 font-semibold">Create and Invest</span>
                  <h2 className="title text-5xl text-center md:text-start md:text-8xl font-roboto font-extrabold mt-3">Create your own NFT</h2>
                </div>
                <p className="mb-4 md:text-start text-text2 text-3xl">Multiple Chains, One Home. Stack up all your NFTs from across blockchains.</p>

                <div className="about__facts-list flex flex-wrap md:text-start flex-col md:flex-row items-center">
                  <div className="about__fact-item w-1/2 p-4 flex flex-col gap-4">
                    <h3 className="count text-4xl md:text-6xl sm:font-extrabold font-bold">4,500+</h3>
                    <p className='text-text2'>Collections Indexed <br /> every 5mins.</p>
                  </div>
                  <div className="about__fact-item w-1/2 p-4 flex flex-col gap-4">
                    <h3 className="count text-4xl md:text-6xl sm:font-extrabold font-bold">2.5x</h3>
                    <p className='text-text2'>Difference in Floor &amp; Estimated NFT Value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

