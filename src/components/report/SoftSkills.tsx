'use client'
import { useResumeContext } from '@/context/ResumeContext';

const SoftSkills = () => {
  const { skillsNeeded } = useResumeContext();
  const { desiredRole, report } = skillsNeeded ?? {};
  if (!desiredRole || !report?.softSkills) return null;

  return (
    <section id="softSkills" className="w-full max-w-5xl mx-auto text-center px-4 md:px-6">
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold mb-8">Soft Skills Needed</h1>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-6xl">
          {report.softSkills.map((skill, index) => (
            <li key={index} className="flex flex-col items-center justify-center py-4 px-8 border border-gray-300 rounded-sm">
              <h3 className="text-base md:text-lg font-semibold">{skill}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SoftSkills;