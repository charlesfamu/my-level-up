'use client'
import { useResumeContext } from '@/context/ResumeContext';

const Industry = () => {
  const { skillsNeeded } = useResumeContext();
  const { desiredRole, report } = skillsNeeded ?? {};
  if (!desiredRole || !report?.industryKnowledge) return null;

  return (
    <section id="industryKnowledge" className="w-full max-w-5xl mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-8 text-center">Learn the Industry</h1>
        <ul className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
          {report.industryKnowledge.map((knowledge, index) => (
            <li key={index} className="text-center align-middle py-4 px-8 border border-gray-300">
              <h3 className="text-base md:text-lg font-semibold">{knowledge}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Industry;