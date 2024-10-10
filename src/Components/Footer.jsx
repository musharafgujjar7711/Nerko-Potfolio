import React from 'react';
import { BsDiscord, BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="footer-area py-32 relative">
      <div className="container mx-auto">
        <div className="footer__wrapper relative">

          {/* Absolute positioned images */}
          <img 
            decoding="async" 
            src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/ethereum-01.png" 
            width="32" 
            alt="" 
            className="absolute top-[32%] lg:left-[16%] z-0" 
          />
          <img 
            decoding="async" 
            src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/x.png" 
            width="16" 
            alt="" 
            className="absolute top-[8%] lg:right-[16%] z-0" 
          />
          <img 
            decoding="async" 
            src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/circle-01.png" 
            width="16" 
            alt="" 
            className="absolute bottom-[24%] lg:right-[40%] z-0" 
          />
          <img 
            decoding="async" 
            src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/circle-03.png" 
            width="24" 
            alt="" 
            className="absolute bottom-[-8%] lg:left-[30%] z-0" 
          />

          <div className="flex justify-center">
            <div className="w-full max-w-xl">
              <div className="footer__info text-center flex items-center flex-col gap-10 mb-20 ">
                <div className="footer-logo ">
                  <a href="https://themegenix.net/wp/nerko/">
                    <img 
                      decoding="async" 
                      src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/nerko.svg" 
                      width="200" 
                      className=' lg:w-80'
                      alt="Logo" 
                    />
                  </a>
                </div>

                <p className=' text-center text-text2 font-medium text-3xl'>We make it easy to Discover, Invest and manage all your NFTs at one place.</p>

                <ul className="list-wrap footer__social flex justify-center space-x-8">
                  <li><a href="#"><i className="fab fa-twitter opacity-30"><BsTwitter size={35}/></i></a></li>
                  <li><a href="#"><i className="fab fa-discord opacity-30"> <BsDiscord size={35}/></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram opacity-30"> <BsInstagram size={35}/></i></a></li>
                  <li><a href="#"><i className="fab fa-telegram-plane opacity-30"><BsTelegram size={35}/></i></a></li>
                </ul>
              </div>
            </div>
          </div>
     <hr />
          <div className="copyright__wrapper mt-10 lg:mt-20">
            <div className="flex justify-between">
              <div className="col-md-6">
                <div className="copyright__text">
                  <p className=' text-text2 text-2xl'>© 2023 Nerko. All rights reserved.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="copyright__menu">
                  <ul className="list-wrap flex space-x-4">
                    <li className='text-text2 text-2xl'><a href="#">Privacy policy</a></li>
                    <li className='text-text2 text-2xl'><a href="#">Terms of use</a></li>
                    <li className="backTop">
                      <a href="javascript:void(0)" className="scroll-to-target open">
                        <i className="flaticon-arrowhead-up"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
