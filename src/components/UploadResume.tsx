'use client'
import { useResumeContext } from '@/context/ResumeContext';

const UploadResume = () => {
  const { handleUploadResume, loading } = useResumeContext();
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await handleUploadResume(file);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Upload Your Resume</h2>
      <input
        type="file"
        onChange={handleFileChange}
        disabled={loading}
        className="mt-2 cursor-pointer"
      />
    </div>
  );
};

export default UploadResume;