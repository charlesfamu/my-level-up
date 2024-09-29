'use client';
import { useResumeContext } from '@/context/ResumeContext';
import { camelCaseToTitleCase } from '@/utils';

const Industry = () => {
  const { skillsNeeded } = useResumeContext();
  const { desiredRole, report } = skillsNeeded ?? {};
  if (!desiredRole || !report?.industryKnowledge) return null;

  return (
    <section id="industryKnowledge" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-[#0083A4]">
        Learn the Industry
      </h2>
      <ol className="list-decimal pl-8 space-y-2 w-full">
        {report.industryKnowledge.map((knowledge, index) => (
          <li key={index} className="text-lg font-semibold">
            {camelCaseToTitleCase(knowledge)}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Industry;
