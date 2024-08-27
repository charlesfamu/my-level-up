import { Steps, useResumeContext } from '@/context/ResumeContext';

type RightArrowIconProps = {
  className?: string;
};

const RightArrowIcon = ({ className }: RightArrowIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={`w-6 h-6 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const WelcomeCard = () => {
  const { setStep } = useResumeContext();
  return (
    <div className="bg-card text-card-foreground p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome to your career transition assistant</h1>
      <p className="mb-8">
        Meet the AI career coach, bridging the gap between your current skills and the ones you need to land your dream job.
      </p>
      {/* <p className="mb-6 font-semibold">
        Two Steps on your journey to leveling up!
      </p> */}
      <button 
        className="flex items-center justify-center bg-primary text-primary-foreground px-4 py-2 hover:bg-accent transition-all"
        onClick={() => setStep(Steps.Upload)}
      >
        Let's Get Started
        <RightArrowIcon className="ml-2 w-4 h-4 text-primary-foreground" />
      </button>
    </div>
  );
}

export default WelcomeCard;
