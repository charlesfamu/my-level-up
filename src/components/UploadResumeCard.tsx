'use client'
import { LeftArrowIcon, RightArrowIcon } from '@/components/CustomIcons';
import ProcessingState from '@/components/ProcessingState';
import { Steps, useResumeContext } from '@/context/ResumeContext';

const UploadResumeCard = () => {
  const { handleUploadResume, loading, resumeFile, resumeSkills, setStep } = useResumeContext();
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await handleUploadResume(file);
    }
  };

  return (
    <div className="flex flex-col justify-between bg-card text-card-foreground p-6 max-w-md min-w-96 min-h-80">
      <h2 className="text-2xl font-bold">Upload Your Resume</h2>
      <p className="text-xs">Let us help you in your journey. Upload your most up-to-date resume to get started and receive personalized recommendations.</p>
      <label className="flex flex-col justify-center border-dashed border rounded-sm border-gray-300 p-4 text-center min-h-24 cursor-pointer">
        
        {loading ? (
          <ProcessingState prompt='Loading your resume...'/>
        ) : (
          <>
            <span className="text-xs">{
              resumeFile 
                ? `Click to update your resume (${resumeFile?.name})`
                : 'Click to upload your resume'
              }
            </span>
            <input
              type="file"
              className="w-full hidden"
              onChange={handleFileChange}
            />
          </>
        )}
      </label>
      <div className="flex flex-row justify-between">
      <button 
        className={`flex items-center justify-between bg-primary text-primary-foreground px-4 py-2 w-24 hover:bg-accent transition-all`}
        onClick={() => setStep(Steps.Welcome)}
      >
        <LeftArrowIcon className="w-4 h-4 text-primary-foreground" />
        <span>Back</span>
      </button>
      <button
        className={`flex items-center justify-between bg-primary text-primary-foreground px-4 py-2 w-24 hover:bg-accent transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => setStep(Steps.Input)}
        disabled={loading || !resumeSkills}
      >
        <span>Next</span>
        <RightArrowIcon className="w-4 h-4 text-primary-foreground" />
      </button>
      </div>

    </div>
  );
};

export default UploadResumeCard;