import React from 'react';

const BenefitsSection = () => {
  // Array of benefits with their titles and descriptions
  const benefits = [
    {
      title: 'Benefit One',
      description: 'Detailed description of the first benefit.'
    },
    {
      title: 'Benefit Two',
      description: 'Detailed description of the second benefit.'
    },
    {
      title: 'Benefit Three',
      description: 'Detailed description of the third benefit.'
    },
    {
      title: 'Benefit Four',
      description: 'Detailed description of the fourth benefit.'
    },
    {
      title: 'Benefit Five',
      description: 'Detailed description of the fifth benefit.'
    },
    {
      title: 'Benefit Six',
      description: 'Detailed description of the sixth benefit.'
    }
  ];

  return (
    <section className='py-10 bg-white'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold md:mb-10 mb-5 text-[#0B2B82]'>Benefits</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8'>
          {benefits.map((benefit, index) => (
            <div key={index} className='flex flex-col md:flex-row items-center mt-8 md:mt-0'>
              <div className='order-2 md:order-1 flex-shrink-0 w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center'>
                {index + 1}
              </div>
              <div className='p-6 bg-gray-100 rounded-lg shadow-md text-left md:ml-4 order-1 md:order-2'>
                <h3 className='text-xl md:text-2xl font-semibold mb-4'>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
