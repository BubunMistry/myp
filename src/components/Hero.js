import React from 'react';

const Hero = () => {
  return (
    <div
      className="container-fluid bg-cover bg-center my-10"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("/images/mainbg.png")',
        height: '90vh',
      }}
    >
      <div className="text-start p-5 flex items-center ms-lg-5" style={{ height: '65vh' }}>
        <div className="lg:w-1/3 mt-5 text-start  lg:ml-5">
          <h1 className="items-center md:text-8xl text-7xl lg:text-8xl font-bold text-gray-600 mt-10">
            Hey I'm <br></br> <span id='bigtext' className="animate-charcter">BUBUN</span>
          </h1>
          <p className=" text-gray-500 text-xl">A Passionate Web developer.....</p>
        </div>
      </div>

      <div className="text-center mt-5">
        <button
          onClick={() => window.location.href = '#contact'}
          className="bttn font-bold px-10 py-3 text-lg rounded-lg border-0"
          type="button"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Hero;
