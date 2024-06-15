import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Feature One',
      description: 'Detailed description of the first feature.',
    },
    {
      title: 'Feature Two',
      description: 'Detailed description of the second feature.',
    },
    {
      title: 'Feature Three',
      description: 'Detailed description of the third feature.',
    },
    {
      title: 'Feature One',
      description: 'Detailed description of the first feature.',
    },
    {
      title: 'Feature Two',
      description: 'Detailed description of the second feature.',
    },
    {
      title: 'Feature Three',
      description: 'Detailed description of the third feature.',
    },
  ];

  return (
    <section className='p-[10px] bg-gray-100'>
      <div>
        <h1 className='text-[#0B2B82] font-semibold text-3xl ml-2 md:text-5xl'>Explore By <span className='text-[#7B66FF]'>category</span> </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-6 mt-4'>
          {features.map((feature, index) => (
            <div key={index} className='p-6 bg-white rounded shadow-md'>
              <h3 className='text-xl md:text-2xl font-semibold mb-4'>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
