'use client'
import { useResumeContext } from '@/context/ResumeContext';
import { useState } from 'react';

const DesiredProfessionInput = () => {
  const { handleSubmitProfession, loading } = useResumeContext();
  const [profession, setProfession] = useState<string>('');
  const [isJobDescription, setIsJobDescription] = useState<boolean>(false);

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    handleSubmitProfession(profession, isJobDescription);
  };

  const handleProfessionChange = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setProfession(e.target.value);
  };

  const handleJobDescriptionChange = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setIsJobDescription(e.target.checked);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Enter Desired Profession or Job Description</h2>
      <textarea
        value={profession}
        onChange={handleProfessionChange}
        className="border p-2 w-full text-black"
        placeholder="Type your desired profession or job description"
      />
      <div className="mt-2">
        <label>
          <input
            type="checkbox"
            checked={isJobDescription}
            onChange={handleJobDescriptionChange}
            className="mr-2 text-black"
          />
          Job Description
        </label>
      </div>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2"
      >
        {loading ? 'Processing...' : 'Submit'}
      </button>
    </div>
  );
}

export default DesiredProfessionInput;
