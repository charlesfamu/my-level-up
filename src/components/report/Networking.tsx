'use client';
import { useResumeContext } from '@/context/ResumeContext';
import { camelCaseToTitleCase } from '@/utils';

const Networking = () => {
  const { skillsNeeded } = useResumeContext();
  const { desiredRole, report } = skillsNeeded ?? {};
  if (!desiredRole || !report?.networkingAndCommunity) return null;

  return (
    <section id="networkingAndCommunity" className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-[#0083A4]">
        Find Your Community and Network
      </h2>
      <ol className="list-decimal pl-8 space-y-2">
        {report.networkingAndCommunity.map((network, index) => (
          <li key={index} className="text-lg font-semibold">
            {camelCaseToTitleCase(network)}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Networking;
