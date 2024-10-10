import React, { useState } from 'react';
import { BiLogoTwitter } from 'react-icons/bi';
import { FaDiscord } from 'react-icons/fa';
import { GrAppsRounded } from 'react-icons/gr';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <header className="bg-transparent sticky top-0 z-50 bg-white">
            <div className="container mx-auto">
                <div className="flex md:justify-around items-center py-4 justify-between">
                    <div className="flex items-center gap-4">
                        <a href="https://themegenix.net/wp/nerko/" className="light-logo">
                            <img src="https://themegenix.net/wp/nerko/wp-content/themes/nerko/assets/img/logo/logo.svg" alt="Logo" className="h-auto max-w-[120px]" />
                        </a>
                        <a href="https://themegenix.net/wp/nerko/" className="dark-logo ml-4">
                            <img src="https://themegenix.net/wp/nerko/wp-content/themes/nerko/assets/img/logo/secondary_logo.svg" alt="Logo" className="h-auto max-w-[120px]" />
                        </a>
                    </div>

                    

                    <nav className={`flex ${isMobileMenuOpen ? 'block' : 'hidden'} lg:flex`}>
                        <ul className={`lg:flex hidden sm:hidden md:block space-x-6 font-roboto font-bold text-xl text-text`}>
                            <li
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onMouseLeave={() => setIsDropdownOpen(false)}
                                className="relative"
                            >
                                <a href="https://themegenix.net/wp/nerko/" className="text-gray-800 hover:text-jamo duration-300">Home</a>
                                {isDropdownOpen && (
                                    <ul className="absolute bg-white shadow-md mt-2 w-[200px]">
                                        <li><a href="https://themegenix.net/wp/nerko/" className="block px-4 py-2 hover:text-jamo duration-300">Home One</a></li>
                                        <li><a href="https://themegenix.net/wp/nerko/home-02/" className="block px-4 py-2 hover:text-jamo duration-300">Home Two</a></li>
                                        <li><a href="https://themegenix.net/wp/nerko/home-03/" className="block px-4 py-2 hover:text-jamo duration-300">Home Three</a></li>
                                        <li><a href="https://themegenix.net/wp/nerko/home-04/" className="block px-4 py-2 hover:text-jamo duration-300">Home Four</a></li>
                                    </ul>
                                )}
                            </li>
                            <li><a href="https://themegenix.net/wp/nerko/#minting" className="text-gray-800 hover:text-jamo duration-300 ">Minting</a></li>
                            <li><a href="https://themegenix.net/wp/nerko/#about" className="text-gray-800 hover:text-jamo duration-300">About</a></li>
                            <li><a href="https://themegenix.net/wp/nerko/#collection" className="text-gray-800 hover:text-jamo duration-300">Collection</a></li>
                            <li><a href="https://themegenix.net/wp/nerko/#roadmap" className="text-gray-800 hover:text-jamo duration-300">Roadmap</a></li>
                            <li><a href="https://themegenix.net/wp/nerko/blog/" className="text-gray-800 hover:text-jamo duration-300">Blog</a></li>
                        </ul>
                    </nav>

                    <div className="relative flex items-center flex-row-reverse gap-x-10">
                        <button
                            onClick={toggleModal}
                            className="btn border hidden md:block border-gray-300 py-2 px-4 rounded-full hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-200 hover:text-white font-medium w-full md:w-auto"
                        >
                            Connect wallet
                        </button>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-800 ">
                                <BiLogoTwitter size={30} className="hover:text-jamo duration-300" />
                            </a>
                            <a href="#">
                                <FaDiscord size={30} className="hover:text-jamo duration-300" />
                            </a>
                            <div className="mobile-nav-toggler cursor-pointer" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (
                            <AiOutlineClose className="h-6 w-6 sm:block md:hidden text-jamo hover:text-jamo duration-300" />
                        ) : (
                            <GrAppsRounded className="h-6 w-6 md:hidden text-jamo hover:text-jamo duration-300" />
                        )}
                    </div>
                        </div>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="lg:hidden">
                        <nav className="bg-white shadow-md  p-4">
                            <ul className="flex flex-col w-56 ">
                                <li><a href="https://themegenix.net/wp/nerko/" className="block py-2 font-bold">Home</a></li>
                                <hr />
                                <li><a href="https://themegenix.net/wp/nerko/#minting" className="block py-2 font-bold">Minting</a></li>
                                <hr />
                                <li><a href="https://themegenix.net/wp/nerko/#about" className="block py-2 font-bold">About</a></li>
                                <hr />
                                <li><a href="https://themegenix.net/wp/nerko/#collection" className="block py-2 font-bold">Collection</a></li>
                                <hr />
                                <li><a href="https://themegenix.net/wp/nerko/#roadmap" className="block py-2 font-bold">Roadmap</a></li>
                                <hr />
                                <li><a href="https://themegenix.net/wp/nerko/blog/" className="block py-2 font-bold">Blog</a></li>
                                <hr />
                            </ul>
                        </nav>
                    </div>
                )}
            </div>

            {/* Connect Wallet Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Connect Wallet</h2>
                            <button onClick={toggleModal} className="text-gray-600">
                                <i className="flaticon-close-1"></i>
                            </button>
                        </div>
                        <p className="mt-4 text-center">Please select a wallet to connect for start Minting your NFTs</p>
                        <div className="mt-4">
                            <ul className="list-disc list-inside">
                                <li><a href="#" className="flex items-center"><img src="https://themegenix.net/wp/nerko/wp-content/themes/nerko/assets/img/icons/metamask.svg" alt="MetaMask" className="mr-2" /> MetaMask</a></li>
                                <li><a href="#"><img src="https://themegenix.net/wp/nerko/wp-content/themes/nerko/assets/img/icons/bitgo.svg" alt="BitGo" className="mr-2" /> BitGo</a></li>
                                <li><a href="#"><img src="https://themegenix.net/wp/nerko/wp-content/themes/nerko/assets/img/icons/trust.svg" alt="Trust" className="mr-2" /> Trust Wallet</a></li>
                                <li><a href="#"><img src="https://themegenix.net/wp/nerko/wp-content/themes/nerko/assets/img/icons/coinbase.svg" alt="Coinbase" className="mr-2" /> Coinbase</a></li>
                            </ul>
                        </div>
                        <p className="mt-4 text-sm text-gray-500 text-center">By connecting your wallet, you agree to our Terms of Service and our Privacy Policy</p>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
