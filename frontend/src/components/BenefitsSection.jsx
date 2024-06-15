import React from 'react';

const BenefitsSection = () => {
  // Array of benefits with their titles and descriptions
  const benefits = [
    {
      title: 'Efficient Recruitment Process',
      description: 'Streamline job postings, applicant tracking, and candidate evaluation.'
    },
    {
      title: 'Improved Candidate Experience',
      description: 'Provide a user-friendly interface for job seekers to apply and track applications.'
    },
    {
      title: 'Time and Cost Savings',
      description: 'Cut down recruitment cycle times with automated resume parsing and scheduling.'
    },
    {
      title: 'Scalability',
      description: 'Scale recruitment efforts seamlessly as the organization grows.'
    },
    {
      title: 'Compliance and Security',
      description: 'Protect sensitive candidate information with robust security measures.'
    },
    {
      title: 'Data-Driven Decision Making',
      description: 'Access real-time analytics to make informed hiring decisions.'
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
                <h3 className='text-l md:text-xl font-semibold mb-4'>{benefit.title}</h3>
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
