import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white z-10 lg:pt-0 sticky top-0">
            <div className="container py-5 mx-auto lg:flex items-center justify-between">
                <a className="navbar-brand" href="index.html">
                    <img
                        src="/images/blacklogo.png"
                        style={{ maxHeight: '50px' }}
                        alt="Light Logo"
                    />
                </a>
                <div className="lg:hidden">
                    <button
                        className="text-black focus:outline-none float-end me-5"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
                <ul
                    className={`text-lg ms-5 font-semibold lg:flex lg:gap-10 mb-0 ps-3 fw-bold mb-3 mb-lg-0 ms-lg-4 ${
                        isOpen ? 'block' : 'hidden'
                    } lg:block`}
                >
                    <li className="nav-item">
                        <a className="nav-link text-black" aria-current="page" href="index.html">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#blog">
                            Blog
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#about">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
                <form className="flex px-5 text-center mb-2 mb-lg-0 items-center gap-3">
                    <img
                        src="/images/dark.png"
                        className="img-fluid rounded-full ps-0 p-1 cursor-pointer"
                        style={{
                            height: '40px',
                            backgroundImage: 'linear-gradient(95deg, #2d42ff 11%, #ca1bff 55%, #ff8e23 100%)',
                        }}
                        alt="Dark Mode Logo"
                    />
                    <div className="col-lg">
                        <div className="flex">
                            <input
                                className="shadow-lg form-control py-2 px-5 rounded-lg me-2 flex-grow-1"
                                id="searchInput"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="shadow-lg font-bold py-2 rounded-lg px-5 border-0"
                                id="bttn"
                                type="button"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
