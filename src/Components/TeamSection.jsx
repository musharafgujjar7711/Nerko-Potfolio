import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa6';
import { useInView } from 'react-intersection-observer';

const TeamSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const teamMembers = [
    {
      name: "Steps Jobs",
      designation: "Artist",
      image: "https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/02.png",
    },
    {
      name: "Andry Moray",
      designation: "Artist",
      image: "https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/03.png",
    },
    {
      name: "Zaid Ed",
      designation: "Artist",
      image: "https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/01.png",
    },
    {
      name: "Laila Ed",
      designation: "Artist",
      image: "https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/04.png",
    },
    {
      name: "Almaktari",
      designation: "Artist",
      image: "https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/05.png" ,
    },
  ];

  return (
    <section className="team-area py-20">
      <div className="container mx-auto">
        <div className="row justify-center mb-20">
          <div className="col-xl-8 col-lg-10 text-center">
            <h2 className="title text-4xl font-bold">Meet the artists</h2>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`team__item text-center shadow-xl rounded-xl p-2 transition-transform duration-700 ${index % 2 === 0 ? 'mt-8' : ''}  ${
                inView
                  ? index % 2 === 0 
                    ? 'opacity-100 translate-y-0 slideInUp' 
                    : 'opacity-100 translate-y-0 slideDown'
                  : 'opacity-0 -translate-y-10'
              }`}
            >
              <div className="team__item-thumb mb-4">
                <img decoding="async" src={member.image} alt={member.name} className="rounded-xl" />
              </div>

              <div className="team__item-content">
                <h4 className="name text-xl font-semibold">{member.name}</h4>
                <span className="designation text-gray-600">{member.designation}</span>
                <ul className="team__social-list list-wrap flex justify-center space-x-4 mt-2">
                  <li><a href="#"><BsTwitter/></a></li>
                  <li><a href="#"><FaFacebook/></a></li>
                  <li><a href="#"><BsInstagram/></a></li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

