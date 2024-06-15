import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Job Search',
      description: 'Search for job openings based on keywords, location, and job category.',
      description2: 'Filter results by various criteria such as salary range and experience level.',
    },
    {
      title: 'Candidate Management',
      description: 'Store candidate profiles with details like skills, experience, and contact information.',
      description2: 'Track candidate status throughout the recruitment process.',
    },
    {
      title: 'Application Tracking',
      description: 'Monitor job application status for candidates.',
      description2: 'Notify candidates of application updates and interview schedules.',
    },
    {
      title: 'Resume Parsing',
      description: 'Automatically parse and extract information from resumes.',
      description2: 'Populate candidate profiles with parsed data for easier evaluation.',
    },
    {
      title: 'Interview Scheduling',
      description: 'Schedule interviews with candidates directly through the platform.',
      description2: 'Sync interview details with calendars and send reminders.',
    },
    {
      title: 'Analytics and Reporting',
      description: 'Generate reports on recruitment metrics such as time-to-hire and applicant demographics.',
      description2: 'Analyze data to optimize recruitment strategies and processes.',
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
              <p>{feature.description2}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
