import React from 'react'

const Work = () => {
    return (
        <div>

            <h1 className="text-center text-4xl font-semibold my-5">Check My Recent Works!</h1>


            <div class="container mx-auto">
                <div class="flex flex-wrap justify-center lg:justify-between mb-0 p-5 pb-0">

                    <div class="w-full lg:w-1/3 md:w-1/2 p-2">
                        <div class="bg-transparent rounded-3 overflow-hidden shadow-lg img-container">
                            <img src="images/portfolio/amazon.png" class="card-img" alt="Amazon Clone" />
                            <a href="https://amazonbubun.netlify.app" target="_blank">
                                <div class="img-overlay">
                                    <p class="text-3xl font-bold text-white">See Live Preview</p>
                                </div>
                            </a>
                            <small class="block text-center my-3">Amazon Clone</small>
                        </div>
                    </div>

                    <div class="w-full lg:w-1/3 md:w-1/2 p-2">
                        <div class="bg-transparent rounded-3 overflow-hidden shadow-lg img-container">
                            <img src="images/portfolio/curex.png" class="card-img" alt="Curex Doctor Website" />
                            <a href="https://curexx.netlify.app" target="_blank">
                                <div class="img-overlay">
                                    <p class="text-3xl font-bold text-white">See Live Preview</p>
                                </div>
                            </a>
                            <small class="block text-center my-3">Curex Doctor Website</small>
                        </div>
                    </div>

                    <div class="w-full lg:w-1/3 md:w-1/2 p-2">
                        <div class="bg-transparent rounded-3 overflow-hidden shadow-lg img-container">
                            <img src="images/portfolio/bizee.png" class="card-img" alt="VC filling Website" />
                            <a href="https://vcfilling.netlify.app" target="_blank">
                                <div class="img-overlay">
                                    <p class="text-3xl font-bold text-white">See Live Preview</p>
                                </div>
                            </a>
                            <small class="block text-center my-3">VC filling Website</small>
                        </div>
                    </div>

                    <div class="w-full lg:w-1/3 md:w-1/2 p-2">
                        <div class="bg-transparent rounded-3 overflow-hidden shadow-lg img-container">
                            <img src="images/portfolio/apex.png" class="card-img" alt="Apex Athletics Gym" />
                            <a href="https://apexathletics.netlify.app" target="_blank">
                                <div class="img-overlay">
                                    <p class="text-3xl font-bold text-white">See Live Preview</p>
                                </div>
                            </a>
                            <small class="block text-center my-3">Apex Athletics Gym</small>
                        </div>
                    </div>

                    <div class="w-full lg:w-1/3 md:w-1/2 p-2">
                        <div class="bg-transparent rounded-3 overflow-hidden shadow-lg img-container">
                            <img src="images/portfolio/aviana.png" class="card-img" alt="Premium SPA Salon" />
                            <a href="https://avianastyles.netlify.app/" target="_blank">
                                <div class="img-overlay">
                                    <p class="text-3xl font-bold text-white">See Live Preview</p>
                                </div>
                            </a>
                            <small class="block text-center my-3">Premium SPA Salon</small>
                        </div>
                    </div>

                    <div class="w-full lg:w-1/3 md:w-1/2 p-2">
                        <div class="bg-transparent rounded-3 overflow-hidden shadow-lg img-container">
                            <img src="images/Firefightercar/Robotcar.jpg" class="card-img" alt="Fire Firefightercar" />
                            <a href="firefightercar.html">
                                <div class="img-overlay">
                                    <p class="text-3xl font-bold text-white">See Project Details</p>
                                </div>
                            </a>
                            <small class="block text-center my-3">Fire Firefightercar</small>
                        </div>
                    </div>


                    <button
                        onClick={() => window.location.href = '#contact'}
                        className="bttn font-bold px-10 mx-auto py-3 my-10 text-lg rounded-lg border-0"
                        type="button"
                    >
                       Load More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Work