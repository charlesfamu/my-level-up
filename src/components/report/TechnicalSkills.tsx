'use client';
import { useResumeContext } from '@/context/ResumeContext';
import { camelCaseToTitleCase } from '@/utils';

const TechnicalSkills = () => {
  const { skillsNeeded } = useResumeContext();
  const { desiredRole, report } = skillsNeeded ?? {};
  if (!desiredRole || !report?.technicalSkills) return null;

  return (
    <section id="techskills" className="mb-12">
      <h2 className="text-3xl font-bold mb-8 text-[#0083A4]">
        {desiredRole} Need These Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {report.technicalSkills.map((skill, index) => (
          <div key={index} className="p-6 rounded-sm border shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              {camelCaseToTitleCase(skill.id)}
            </h3>
            <p>{skill.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
