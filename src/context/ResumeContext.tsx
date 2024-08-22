'use client'
import React, { createContext, ReactNode, useContext, useState } from 'react';

export enum Steps {
  Upload = 'upload',
  Input = 'input',
  Results = 'results',  
}

interface ResumeContextType {
  resumeSkills: string[];
  desiredProfession: string;
  skillsNeeded: string[];
  roles: string[];
  courses: { name: string; url: string }[];
  salary: string;
  loading: boolean;
  step: string;
  handleResumeUpload: (file: File) => Promise<void>;
  handleProfessionSubmit: (profession: string, isJobDescription?: boolean) => Promise<void>;
  setStep: React.Dispatch<React.SetStateAction<string>>;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function useResumeContext() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResumeContext must be used within a ResumeProvider');
  }
  return context;
}

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [resumeSkills, setResumeSkills] = useState<string[]>([]);
  const [desiredProfession, setDesiredProfession] = useState<string>('');
  const [skillsNeeded, setSkillsNeeded] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [courses, setCourses] = useState<{ name: string; url: string }[]>([]);
  const [salary, setSalary] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [step, setStep] = useState<string>(Steps.Upload);

  const handleResumeUpload = async (file: File) => {
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Error uploading file, response not okay.');
      }

      const data = await response.json();
      setResumeSkills(data.analysis);
      setStep(Steps.Input);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProfessionSubmit = async (profession: string, isJobDescription: boolean = false) => {
    if (!profession) return;
    
    setLoading(true);
    setDesiredProfession(profession);

    try {
      const response = await fetch('/api/skills', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          currentSkills: resumeSkills, 
          desiredProfession: profession, 
          isJobDescription 
        }),
      });

      if (!response.ok) {
        throw new Error('Error fetching desired skills, response not okay.')
      }

      const data = await response.json();
      setSkillsNeeded(data.skillsNeeded);
      
      // Fetch additional info such as roles, courses, and salary
      // Example:
      // setRoles(data.roles);
      // setCourses(data.courses);
      // setSalary(data.salary);
      
      setStep(Steps.Results);
    } catch (error) {
      console.error('Error fetching desired skills:', error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    resumeSkills,
    desiredProfession,
    skillsNeeded,
    roles,
    courses,
    salary,
    loading,
    step,
    handleResumeUpload,
    handleProfessionSubmit,
    setStep
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
}
