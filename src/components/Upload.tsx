'use client'

import { useCallback, useEffect, useState } from 'react';

const Upload = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [analysis, setAnalysis] = useState<string>('');
  const [skillsNeeded, setSkillsNeeded] = useState<string>('');

  const uploadFile = useCallback(async () => {
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('File upload failed');
      }
    
      const result = await response.json();
      setAnalysis(result.analysis);
    } catch (error) {
      console.log(error)
    }
  }, [formData, setAnalysis]);

  const getSkills = useCallback(async () => {
    try {
      const response = await fetch('/api/skills', {
        method: 'POST',
        body: JSON.stringify({
          currentSkills: analysis,
          desiredProfession: 'Airline Pilot',
        }),
      });
  
      if (!response.ok) {
        throw new Error('File upload failed');
      }
    
      const result = await response.json();
      console.log(result)
      setSkillsNeeded(result.skillsNeeded);
    } catch (error) {
      console.log(error);
    }
  }, [analysis]);

  useEffect(() => {
    if (formData) {
      uploadFile();
    }
  }, [formData, uploadFile]);

  useEffect(() => {
    if (analysis) {
      getSkills();
    }
  }, [getSkills, analysis]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const data = new FormData();
      data.append('file', e.target.files[0]);
      setFormData(data);
    }
  };

  return (
    <div>
      <h2>Upload Resume</h2>
      <form>
        <input 
          name="file" 
          type="file" 
          onChange={handleFileChange} 
        />
      </form>
      <div>Skills Needed</div>
      <div>{skillsNeeded}</div>
    </div>
  );
};

export default Upload;