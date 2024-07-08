import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-slate-900  text-white mt-5">
            <section className="flex flex-col lg:flex-row justify-center p-4 border-b border-gray-700 items-center">
                <div className="lg:mr-3 mb-2 lg:mb-0">
                    <span>Connect with me on social networks :</span>
                </div>
                <div className="flex gap-2">
                    <a
                        className="bg-[#007bb5] text-white rounded-full mx-2 transform transition-transform duration-300 hover:scale-110 p-2"
                        href="https://www.linkedin.com/in/bubun-mistry/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="images/social/linkedin.svg"
                            alt="LinkedIn"
                            className="w-6 h-6"
                        />
                    </a>
                    <a
                        className="bg-[#1da1f2] text-white rounded-full mx-2 transform transition-transform duration-300 hover:scale-110 p-2"
                        href="https://github.com/BubunMistry"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="images/social/github.svg"
                            alt="GitHub"
                            className="w-6 h-6"
                        />
                    </a>
                    <a
                        className="bg-[#1877f2] text-white rounded-full mx-2 transform transition-transform duration-300 hover:scale-110 p-2"
                        href="https://www.facebook.com/bubun.mistry.739"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="images/social/facebook.svg"
                            alt="Facebook"
                            className="w-6 h-6"
                        />
                    </a>
                    <a
                        className="bg-[#ac2bac] text-white rounded-full mx-2 transform transition-transform duration-300 hover:scale-110 p-2"
                        href="https://www.instagram.com/senselessbong_bubun/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="images/social/instagram.svg"
                            alt="Instagram"
                            className="w-6 h-6"
                        />
                    </a>
                </div>

            </section>

            <section className="w-full">
                <div className="container px-5 mx-auto text-center text-md-start mt-5">
                    <div className="flex flex-col lg:flex-row justify-evenly items-center">
                        <div className="w-full lg:w-1/4 mb-4 lg:mb-0 text-center">
                            <a href="index.html">
                                <img src="images/Whitelogo.png" className="mx-auto" height="50" alt="Logo" />
                            </a>
                        </div>
                        <form
                            id="contactForm"
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="w-full lg:w-2/4"
                        >
                            <div className="grid grid-cols-1 gap-2">
                                <h2 className="text-center text-4xl font-semibold my-5">Contact Me</h2>
                                <input type="hidden" name="access_key" value="80750372-5759-424c-9d88-2eff862d96fc" />
                                <div className="col-span-1 mb-2">
                                    <div className="relative flex items-center">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-person-fill text-black"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control pl-10 py-2 w-full border border-gray-500 text-black rounded-md"
                                            placeholder="Name"
                                            name="name"
                                            aria-label="Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-span-1 mb-2">
                                    <div className="relative flex items-center">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-envelope text-black"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                            </svg>
                                        </span>
                                        <input
                                            type="email"
                                            className="form-control pl-10 py-2 w-full border border-gray-500 text-black rounded-md"
                                            placeholder="Email Address"
                                            name="email"
                                            aria-label="Email Address"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-span-1 mb-2">
                                    <div className="relative flex items-center">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-pencil-square text-black"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                                />
                                            </svg>
                                        </span>
                                        <textarea
                                            className="form-control pl-10 py-2 w-full border border-gray-500 text-black rounded-md"
                                            placeholder="Message"
                                            name="message"
                                            aria-label="Message"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-span-1 mb-2">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white font-bold border-0 rounded-md py-2 w-full"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <div className="text-center border-t border-white pt-5 my-8 bg-gray-900">
                © 2024 Copyright:
                <a className="text-reset font-bold" href="#">
                    Bubun
                </a>
            </div>
        </footer>
    );
};

export default Footer;
