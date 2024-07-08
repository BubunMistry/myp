import React from 'react'

const Experience = () => {
    return (
        <div>


            <div class="container mx-auto mt-5 border p-5 lg:flex gap-5 justify-between">
                <div class="w-full lg:w-1/4 mb-4 lg:mb-0">
                    <h2 class="text-center text-4xl font-semibold my-5">Experience</h2>
                    <div class="p-4 rounded-4 shadow mt-5 rounded-xl pb-4 transform transition duration-300 hover:scale-105">
                        <ul class="list-none text-center">
                            <li class="mb-1 font-bold">Frontend Web Developer</li>
                            <li class="mb-1">DEM Webs India</li>
                            <li class="mb-3">February 2024 - May 2024</li>
                            <a class="text-decoration-none" target="_blank" href="https://drive.google.com/file/d/1BbpFlJyD6tvJcetQcoF08Hy12WZSdQH_/view?usp=sharing">
                                <li class="m-3 text-blue-600 text-lg">View Credentials</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div class="w-full lg:w-3/4">
                    <h2 class="text-center text-4xl font-semibold my-5">Education</h2>
                    <div class="flex flex-wrap lg:flex-nowrap justify-between gap-4">
                        <ul class="w-full lg:w-1/3 list-none text-center shadow p-4 rounded-xl transform transition duration-300 hover:scale-105">
                            <li class="mb-1 font-bold">Bachelor's Degree (2024)</li>
                            <li class="mb-1">Electronics & Communication Engineering</li>
                            <li class="mb-1">Sister Nivedita University</li>
                            <li class="mb-1">CGPA: <strong>7.95</strong></li>
                        </ul>
                        <ul class="w-full lg:w-1/3 list-none text-center shadow p-4 rounded-xl transform transition duration-300 hover:scale-105">
                            <li class="mb-1 font-bold">School</li>
                            <li class="mb-1">Jadavpur N.K.Pal Adarsha Sikshayatan</li>
                            <li class="mb-1">12th Grade: <strong>71.8%</strong></li>
                        </ul>
                        <ul class="w-full lg:w-1/3 list-none text-center shadow p-4 rounded-xl transform transition duration-300 hover:scale-105">
                            <li class="mb-1 font-bold">School</li>
                            <li class="mb-1">Jadavpur N.K.Pal Adarsha Sikshayatan</li>
                            <li class="mb-1">10th Grade: <strong>71.14%</strong></li>
                        </ul>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Experience