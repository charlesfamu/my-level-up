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
    <div className="flex flex-col justify-between bg-card text-card-foreground p-4 sm:p-6 max-w-full sm:max-w-md min-h-80">
      <h1 className="text-2xl sm:text-2xl font-bold mb-2">Upload Your Resume</h1>
      <p className="text-sm sm:text-base">Let us help you in your journey. Upload your most up-to-date resume to get started.</p>
      <label className="flex flex-col justify-center items-center border-dashed border border-gray-300 p-2 sm:p-4 text-center min-h-24 cursor-pointer mt-4 mb-4">
        {loading ? (
          <ProcessingState prompt='Processing your resume...'/>
        ) : (
          <>
            <span className="text-xs sm:text-xs">
              {resumeFile 
                ? `Click to update your resume (${resumeFile?.name})`
                : 'Click to upload your resume'}
            </span>
            <input
              type="file"
              className="w-full hidden"
              onChange={handleFileChange}
            />
          </>
        )}
      </label>
      <div className="flex flex-col sm:flex-row justify-between mt-4">
        <button 
          className={`flex items-center justify-center bg-primary text-primary-foreground px-4 py-2 w-full sm:w-24 transition-all mb-2 sm:mb-0 rounded-sm ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent'}`}
          onClick={() => setStep(Steps.Welcome)}
        >
          <LeftArrowIcon className="w-4 h-4 text-primary-foreground mr-2" />
          <span>Back</span>
        </button>
        <button
          className={`flex items-center justify-center bg-primary text-primary-foreground px-4 py-2 w-full sm:w-24 transition-all rounded-sm ${loading || !resumeSkills ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent'}`}
          onClick={() => setStep(Steps.Input)}
          disabled={loading || !resumeSkills}
        >
          <span>Next</span>
          <RightArrowIcon className="w-4 h-4 text-primary-foreground ml-2" />
        </button>
      </div>

    </div>
  );
};

export default UploadResumeCard;