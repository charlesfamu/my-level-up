'use client';
import { useResumeContext } from '@/context/ResumeContext';

const TransferableSkills = () => {
  const { skillsNeeded } = useResumeContext();
  const { desiredRole, report } = skillsNeeded ?? {};
  if (!desiredRole || !report?.transferableSkills) return null;

  return (
    <section id="transferableSkills" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-left text-[#0083A4]">
        Your Transferable Skills
      </h2>
      <ol className="list-decimal pl-8 space-y-2">
        {report.transferableSkills.map((skill, index) => (
          <li key={index} className="text-lg font-semibold">
            {skill}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default TransferableSkills;
