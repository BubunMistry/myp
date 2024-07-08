import React, { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    skillBars.forEach(bar => {
      const skill = bar.getAttribute('data-skill');
      bar.style.width = skill;
    });
  }, []);

  return (
    <div>
        <section className="w-full lg:w-2/3 md:w-2/3 mx-auto te p-5">
            <h1 className="text-center text-4xl font-semibold my-5">My Skills</h1>

            <div className="skill">
                <h5 className='mb-2'>Web Development</h5>
                <div className="skill-bar">
                    <div className="skill-bar-fill" data-skill="80%"></div>
                </div>
            </div>
            <div className="skill">
                <h5 className='mb-2'>Bootstrap</h5>
                <div className="skill-bar">
                    <div className="skill-bar-fill" data-skill="85%"></div>
                </div>
            </div>
            <div className="skill">
                <h5 className='mb-2'>Graphics Design</h5>
                <div className="skill-bar">
                    <div className="skill-bar-fill" data-skill="75%"></div>
                </div>
            </div>
            <div className="skill">
                <h5 className='mb-2'>Communication Skills</h5>
                <div className="skill-bar">
                    <div className="skill-bar-fill" data-skill="70%"></div>
                </div>
            </div>
            <div className="skill hidden">
                <h5 className='mb-2'>Node.js</h5>
                <div className="skill-bar">
                    <div className="skill-bar-fill" data-skill="65%"></div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Skills;
