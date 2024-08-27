'use client'
import { Steps, useResumeContext } from '@/context/ResumeContext';

const UploadResumeCard = () => {
  const { handleUploadResume, loading, setStep } = useResumeContext();
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await handleUploadResume(file);
    }
  };

  return (
    <div className="bg-card text-card-foreground p-6 max-w-md mx-auto">
      <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center relative">
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <span className="text-gray-500 text-xl mb-2">Drag or select your resume</span>
          </div>
        )}
      </div>
      <button
        className={`flex items-center justify-center bg-primary text-primary-foreground px-4 py-2 mt-8 hover:bg-accent transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => setStep(Steps.Input)}
        disabled={loading}
      >
        Next
      </button>
    </div>
  );
};

export default UploadResumeCard;