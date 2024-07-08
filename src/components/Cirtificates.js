import React from 'react';

const Cirtificates = () => {
  return (
    <div className="border-t my-5 container-fluid text-center">
      <h1 className="text-center text-4xl font-semibold my-5">Certifications</h1>

      <div className="flex flex-wrap justify-center lg:justify-evenly mb-0 mx-auto p-5 pb-0">
        {/* Card 1 */}
        <div className="w-full md:w-1/2 lg:w-1/4 p-2 mb-4">
          <div className="relative overflow-hidden bg-transparent">
            <img src="images/Cirtificates/AWS data system manage.jpg" className="w-full shadow-lg rounded-xl" alt="AWS Certificate" />
            <a href="https://drive.google.com/file/d/1jJcXLpjpI0UFTC3sJEjCkLpj7pOfshDy/view" target="_blank" rel="noopener noreferrer">
              <div className="absolute inset-0 flex items-center justify-center rounded-xl">
                <p className="text-white text-lg font-bold">AWS</p>
              </div>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/2 lg:w-1/4 p-2 mb-4">
          <div className="relative overflow-hidden bg-transparent">
            <img src="images/Cirtificates/cloud computing IBM cirtificate.jpeg" className="w-full shadow-lg rounded-xl" alt="Cloud Computing Certificate" />
            <a href="https://coursera.org/share/0f7d758c415877514f104fcb1030c43d" target="_blank" rel="noopener noreferrer">
              <div className="absolute inset-0 flex items-center justify-center rounded-xl">
                <p className="text-white text-lg font-bold">Cloud Computing</p>
              </div>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/2 lg:w-1/4 p-2 mb-4">
          <div className="relative overflow-hidden bg-transparent">
            <img src="images/Cirtificates/cyber security google.jpeg" className="w-full rounded-xl" alt="Cyber Security Certificate" />
            <a href="https://coursera.org/share/1538b1bc7f0d796e7e4c1675e62a21b1" target="_blank" rel="noopener noreferrer">
              <div className="absolute inset-0 flex items-center justify-center rounded-xl">
                <p className="text-white text-lg font-bold">Cyber Security</p>
              </div>
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full md:w-1/2 lg:w-1/4 p-2 mb-4">
          <div className="relative overflow-hidden bg-transparent">
            <img src="images/Cirtificates/ui ux google.jpeg" className="w-full rounded-xl" alt="UI/UX Design Certificate" />
            <a href="https://coursera.org/share/8b3c25c7dddd935af4e2f1a55283bd56" target="_blank" rel="noopener noreferrer">
              <div className="absolute inset-0 flex items-center justify-center rounded-xl">
                <p className="text-white text-lg font-bold">UI/UX Design</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cirtificates;
