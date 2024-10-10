import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

const Roadmap = () => {
  const phases = [
    {
      percent: 34,
      title: "Planning",
      description: "Quality comes first. We took our time to plan out everything and build our production pipeline for good quality artworks.",
      tasks: [
        "Release website and logo",
        "Grow community",
        "Launch the project",
      ],
    },
    {
      percent: 25,
      title: "Production",
      description: "Quality comes first. We took our time to plan out everything and build our production pipeline for good quality artworks.",
      tasks: [
        "Release website and logo",
        "Grow community",
        "Launch the project",
      ],
    },
    {
      percent: 50,
      title: "Launch",
      description: "Quality comes first. We took our time to plan out everything and build our production pipeline for good quality artworks.",
      tasks: [
        "Release website and logo",
        "Grow community",
        "Launch the project",
      ],
    },
    {
      percent: 75,
      title: "Minting",
      description: "Quality comes first. We took our time to plan out everything and build our production pipeline for good quality artworks.",
      tasks: [
        "Release website and logo",
        "Grow community",
        "Launch the project",
      ],
    },
    {
      percent: 95,
      title: "New NFTs",
      description: "Quality comes first. We took our time to plan out everything and build our production pipeline for good quality artworks.",
      tasks: [
        "Release website and logo",
        "Grow community",
        "Launch the project",
      ],
    },
    {
      percent: 70,
      title: "Metaverse",
      description: "Quality comes first. We took our time to plan out everything and build our production pipeline for good quality artworks.",
      tasks: [
        "Release website and logo",
        "Grow community",
        "Launch the project",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % phases.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + phases.length) % phases.length);
  };

  return (
    <section className="roadmap-area">
      <div className="w-full mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold">Nerko's Roadmap</h2>
        </div>
        <div className="flex justify-center items-center relative gap-8">
          {/* Active Card */}
          <div className="roadmap__card p-6 flex flex-col gap-9 mb-10 bg-white shadow-md border w-[370px] h-[470px] rounded-lg" style={{ opacity: 1 }}>
           <div className=' flex justify-between'>
           <div className="roadmap__step">
              <span className="text-gradient text-text4 text-2xl font-medium">{`Phase 0${currentIndex + 1}`}</span>
            </div>
           <div className="roadmap__percent p-2 rounded-full rotate-6 bg-gradient-to-r from-violet-800 to-fuchsia-400 text-white text-center items-center font-bold">
              <span className='text-lg'>{phases[currentIndex ].percent}</span>%
            </div>
           
           </div>
            <h3 className="roadmap__heading text-3xl font-extrabold font-roboto">{phases[currentIndex].title}</h3>
            <p className=' leading-7 text-text2 text-xl'>{phases[currentIndex].description}</p>
            <ul className="roadmap__lists list-disc pl-5 mt-2">
              {phases[currentIndex].tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="flex items-center p-1 ">
                    <span className=' border p-2 rounded-full text-text4 border-text4'><TiTick className=' rounded text-text4'/></span>
                  <i className="unicon-checkmark-outline text-gradient mr-2"></i>
                  {task}
                  
                </li>
              ))}
            </ul>
          </div>

          {/* Fixed Navigation Icons */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 flex items-center p-4">
            <button className="bg-white rounded-full p-2 shadow-lg" aria-label="Previous slide" onClick={handlePrev}>
              <MdKeyboardArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0 flex items-center p-4">
            <button className="bg-white rounded-full p-2 shadow-lg" aria-label="Next slide" onClick={handleNext}>
              <MdKeyboardArrowRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;


