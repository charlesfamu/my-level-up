'use client'
import DesiredProfessionInput from '@/components/DesiredProfessionInput';
import ProcessingState from '@/components/ProcessingState';
import SkillsList from '@/components/SkillsList';
import UploadResume from '@/components/UploadResume';
import { Steps, useResumeContext } from '@/context/ResumeContext';

export default function Home() {
  const { step, loading } = useResumeContext();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Career Transition Assistant</h1>

      {/* Step: Upload Resume */}
      {step === Steps.Upload && (
        <div>
          <UploadResume />
          {loading && <ProcessingState prompt="Processing your resume..." />}
        </div>
      )}

      {/* Step: Input Desired Profession */}
      {step === Steps.Input && (
        <div>
          <DesiredProfessionInput />
          {loading && <ProcessingState prompt="Analyzing your desired profession..." />}
        </div>
      )}

      {/* Step: Display Skills Results */}
      {step === Steps.Results && (
        <div>
          <SkillsList />
          {loading && <ProcessingState prompt="Loading your results..." />}
        </div>
      )}
    </div>
  );
}
