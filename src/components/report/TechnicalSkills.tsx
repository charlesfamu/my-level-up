'use client'
import { useResumeContext } from '@/context/ResumeContext';
import { camelCaseToTitleCase } from '@/utils';

const TechnicalSkills = () => {
  const { skillsNeeded } = useResumeContext();
  const { desiredRole, report } = skillsNeeded ?? {};
  if (!desiredRole || !report?.technicalSkills) return null;

  return (
    <section id="techskills" className="w-full max-w-5xl mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-8 text-center">{desiredRole} Technical Skills</h1>
        <ul className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
          {report.technicalSkills.map((skill, index) => (
            <li key={index} className="p-4 min-w-[250px] max-w-[300px]">
              <div className="flex flex-col text-center">
                <h2 className="text-lg font-semibold">{camelCaseToTitleCase(skill.id)}</h2>
                <p className="text-sm md:text-base mt-2 leading-tight">{skill.details}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TechnicalSkills;