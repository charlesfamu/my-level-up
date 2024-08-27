import { RightArrowIcon } from '@/components/CustomIcons';
import { Steps, useResumeContext } from '@/context/ResumeContext';

const WelcomeCard = () => {
  const { setStep } = useResumeContext();
  return (
    <div className="flex flex-col justify-between bg-card text-card-foreground p-6 max-w-md min-w-96 min-h-80">
      <h1 className="text-2xl font-bold">Welcome to your career transition assistant</h1>
      <p className="mb-8">
        Meet the AI career coach, bridging the gap between your current skills and the ones you need to land your dream job.
      </p>
      <button 
        className="flex items-center justify-between bg-primary text-primary-foreground px-4 py-2 hover:bg-accent transition-all w-60"
        onClick={() => setStep(Steps.Upload)}
      >
        <span>Let's Get Started</span>
        <RightArrowIcon className="w-4 h-4 text-primary-foreground" />
      </button>
    </div>
  );
}

export default WelcomeCard;
