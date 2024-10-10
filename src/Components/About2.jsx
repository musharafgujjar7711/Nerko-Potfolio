import React from 'react';
import { GrSelect } from 'react-icons/gr';
import { PiSelectionPlus } from 'react-icons/pi';

function About2() {
  return (
    <div className='container mx-auto mt-24 flex flex-col gap-6 items-center text-center'>
      <div className="row flex md:flex-row-reverse items-center mt-36 flex-col sm:flex-col lg:flex-row-reverse xl:flex-row-reverse text-center">
        
        {/* Image Section with Animation */}
        <div className="col-lg-6 fadeInRight">
          <div className="about__img" style={{ opacity: 1 }}>
            <img
              decoding="async"
              src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/features-02.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Content Section with Animation */}
        <div className="col-lg-6 fadeInLeft">
          <div className="about__content flex flex-col gap-10" style={{ opacity: 1 }}>
            <div className="section__title md:text-start">
              <span className="sub-title text-center text-2xl text-text4 font-semibold">Sync and Track</span>
              <h2 className="title text-5xl text-center md:text-start md:w-5/6 md:text-8xl font-roboto font-extrabold mt-3">
                Multiple Chains, One Home
              </h2>
            </div>
            <p className="mb-4 md:text-start text-text2 text-3xl md:w-4/6">
              We make it easy to Discover, Invest and manage all your NFTs at one place, looked up one of the more obscure. 
              Find the right NFT collections to buy within the platform.
            </p>

            <div className="about__facts-list flex md:text-start w-5/6 ">
              <div className="about__icon-box flex items-center gap-2 flex-col md:flex-row ">
                <div className="icon bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-5 py-5 rounded-3xl">
                  <i className="tp unicon-select-02 text-4xl text-center "><PiSelectionPlus /></i>
                </div>
                <p className='font-roboto font-light text-2xl'>Collections Indexed every 5mins.</p>
              </div>
              <div className="about__icon-box w-1/2 p-4 flex items-center gap-2 flex-col md:flex-row">
                <div className="icon bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-5 py-5 rounded-3xl">
                  <i aria-hidden="true" className="tp unicon-select-window text-center text-4xl"><GrSelect /></i>
                </div>
                <p className='font-roboto font-light text-2xl'>Difference in Floor &amp; Estimated Value</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='mt-12'>
        <div
          className="section-divider mt-28"
          data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;"
          style={{ opacity: 1, transform: 'scale(1)' }}
        >
          <img
            decoding="async"
            src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/divider-01.svg"
            alt="Divider"
            className="w-24 h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default About2;
