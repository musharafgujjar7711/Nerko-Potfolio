import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useInView } from 'react-intersection-observer';

const CollectionArea = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const collections = [
    {
      id: 1,
      image: "https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_09.jpg",
      title: "#metaverse",
      description: "Description of Collection 1"
    },
    {
      id: 2,
      image: "https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_02.jpg",
      title: "#pollyDoll",
      description: "Description of Collection 2"
    },
    {
      id: 3,
      image: "https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_03.jpg",
      title: "#Alec Art",
      description: "Description of Collection 3"
    },
    {
      id: 4,
      image: "https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_04.jpg",
      title: "#Toxic ocis",
      description: "Description of Collection 4"
    },
    {
      id: 5,
      image: "https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_05.jpg",
      title: "#Toxic ocis",
      description: "Description of Collection 5"
    },
    {
      id: 6,
      image: "https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_07.jpg",
      title: "#Toxic ocis",
      description: "Description of Collection 6"
    },
    {
      id: 7,
      image: "https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_04.jpg",
      title: "#Toxic ocis",
      description: "Description of Collection 7"
    },
    {
      id: 8,
      image: "https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_08.jpg",
      title: "#Toxic ocis",
      description: "Description of Collection 8"
    }
  ];

  return (
    <section className="collection-area py-16 relative">
      <div className="container text-center flex flex-col items-center">
        <div className="section__title text-center mb-16">
          <h2 
            ref={ref}
            className={`title text-3xl lg:text-7xl lg:font-extrabold transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            Latest artworks
          </h2>
        </div>

        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          {collections.map((collection, index) => (
            <div key={collection.id} className={`collection-item shadow-md p-2 rounded-lg relative ${index % 2 === 0 ? 'mt-8' : ''}`}>
              <img 
                src={collection.image} 
                alt={`Collection Art ${collection.id}`} 
                className="w-[304px] h-[392px] object-cover rounded-3xl"
              />
              <div className="mt-4 text-center flex flex-col gap-4">
                <h3 className="text-3xl md:text-5xl lg:text-5xl font-bold cursor-pointer hover:text-text5 duration-300">{collection.title}</h3>
                <p className="text-text2 text-lg">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className='lg:mt-36 mt-14'>
          <div className='bg-gradient-to-r from-violet-800 to-fuchsia-400 text-white rounded-full p-6 gap-3 flex items-center'>
            <span className='text-lg lg:text-2xl'>View more in OPENSEA</span>
            <i className='text-xl lg:text-3xl'><IoIosArrowRoundForward/></i>
          </div>
        </div>
        
        <div className='mt-12'>
          <div 
            className="section-divider mt-28" 
            style={{ opacity: 1, transform: 'scale(1)' }}
          >
            <img 
              decoding="async" 
              src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/divider-01.svg" 
              alt="Divider"
              className="w-24 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionArea;


