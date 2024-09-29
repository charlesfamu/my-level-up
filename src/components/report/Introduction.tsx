'use client';
import { useResumeContext } from '@/context/ResumeContext';

const Introduction = () => {
  const { skillsNeeded } = useResumeContext();
  const { desiredRole, report } = skillsNeeded ?? {};
  if (!desiredRole || !report?.introduction) return null;

  return (
    <section id="introduction" className="mb-12">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Your {desiredRole} Transition Plan
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-center">
          {report.introduction}
        </p>
      </div>
    </section>
  );
};

export default Introduction;
