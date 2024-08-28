'use client'
import { useResumeContext } from '@/context/ResumeContext';

const Introduction = () => {
  const { skillsNeeded } = useResumeContext();
  const { desiredRole, report } = skillsNeeded ?? {};
  if (!desiredRole || !report?.introduction) return null;

  return (
    <section id="introduction" className="text-center">
      <div className="flex flex-col items-center">
        <div className="lg:text-left mx-8">
          <h1 className="text-5xl font-bold max-w-[600px] mb-4">
            Transitioning to {desiredRole}
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
            {report.introduction}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;