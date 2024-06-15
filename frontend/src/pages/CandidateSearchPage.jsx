
import { AddIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import axios from 'axios';
import { Button } from "@chakra-ui/react";
import PopupModal from '../components/PopupModal';

const HeroPattern = ({ pttrn, children }) =>
  <div className={pttrn}>
    {children}
  </div>

const CandidateSearchPage = () => {
  const [location, setLocation] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to search candidates');
      return;
    }
    try {
      const res = await axios.get('https://recruit-backend-gwku.onrender.com/api/candidates', {
        params: { location, jobRole },
        headers: { 'x-auth-token': token },
      });
      setCandidates([...candidates, ...res.data]); // Concatenating the new data with existing candidates
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to search candidates. Please try again.');
    }
  };

  const handleAddCandidate = async (newCandidate) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to add a candidate');
      return;
    }
    try {
      const res = await axios.post('https://recruit-backend-gwku.onrender.com/api/candidates', newCandidate, {
        headers: { 'x-auth-token': token },
      });
      // setCandidates(prevCandidates => [...prevCandidates, res.data]); // Add the new candidate to the list
      setError('');
      alert('Candidate added successfully!');
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
      setError('Failed to add candidate. Please try again.');
    }
  };

  return (
    <HeroPattern pttrn={'candidate'} >
    <div className='  md:grid md:grid-cols-2 md:p-20 gap-4 p-5'>
      {error &&<h1>{error}</h1>}

      <form onSubmit={handleSearch} className='mb-6 bg-white p-6 rounded shadow-md col-span-1'>
      <Button onClick={() => setIsModalOpen(true)} className='gap-1   bg-blue-500 text-white px-2 py-1 rounded'>
      <AddIcon />  Add Candidate
        </Button>


        <h2 className='text-2xl mb-4 '>Search Candidates</h2>


        <input
          type='text'
          placeholder='Location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className='w-full mb-4 p-2 border rounded'
        />
        <input
          type='text'
          placeholder='Job Role'
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          className='w-full mb-4 p-2 border rounded'
        />
        <button type='submit' className='w-[30%] bg-blue-500 text-white py-2 rounded'>Search</button>

      </form>

      <div className='col-span-1'>

        {candidates.map((candidate) => (
          <div key={candidate._id} className='mb-4 p-4 bg-white rounded shadow-md'>
            <h3 className='text-xl'>{candidate.name}</h3>
            <p>{candidate.location}</p>
            <p>{candidate.jobRole}</p>
          </div>
        ))}
      </div>

      <PopupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddCandidate}
      />
    </div>
    </HeroPattern>
  );
};

export default CandidateSearchPage;
