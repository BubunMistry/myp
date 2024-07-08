import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className=" shadow-lg lg:flex md:flex lg:w-2/3 mx-auto lg:gap-11 p-5 items-center border rounded-4 mt-5 rounded-xl" id="contact">
                    <div className="lg:w-1/2 mb-4 lg:mb-0">
                        <img src="/images/IMG_20230527_212225_436.jpg" className="img-fluid rounded-4 rounded-xl" alt="Profile" />
                    </div>
                    <div className="lg:w-1/2 ps-3 lg:ps-0">
                        <h1 className='text-4xl mb-5'>I'm a Web Developer</h1>
                        <p className=' mb-1'>Web designer and developer worked <br />for DEMs Web India in Kolkata, India.</p>
                        <p className=' mb-2'>Kolkata, 700099</p>
                        <div className="mb-3">
                            <a href="mailto:bubunmistry3@gmail.com" className="no-underline text-indigo-600">bubunmistry3@gmail.com</a>
                        </div>
                        <div className="mb-3">
                            <a href="tel:+919874681419" className="no-underline text-indigo-600">+91-9874681419</a>
                        </div>
                        <a href="cv/bubun_webdeveloper_resume.pdf" className=" text-indigo-600" download>Download My CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
