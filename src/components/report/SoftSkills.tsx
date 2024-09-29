'use client';
import { useResumeContext } from '@/context/ResumeContext';
import { camelCaseToTitleCase } from '@/utils';

const SoftSkills = () => {
  const { skillsNeeded } = useResumeContext();
  const { desiredRole, report } = skillsNeeded ?? {};
  if (!desiredRole || !report?.softSkills) return null;

  return (
    <section id="softSkills" className="mb-12">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold mb-6 text-[#0083A4]">
          How About the Soft Skills
        </h2>
        <ol className="list-decimal pl-8 space-y-2">
          {report.softSkills.map((skill, index) => (
            <li key={index} className="text-lg font-semibold">
              {camelCaseToTitleCase(skill)}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default SoftSkills;
