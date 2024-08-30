'use client'
import { useResumeContext } from '@/context/ResumeContext';

const Networking = () => {
  const { skillsNeeded } = useResumeContext();
  const { desiredRole, report } = skillsNeeded ?? {};
  if (!desiredRole || !report?.networkingAndCommunity) return null;

  return (
    <section id="networkingAndCommunity" className="w-full max-w-5xl mx-auto px-4 md:px-6">
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold mb-8 text-center">Find Your Community and Network</h1>
        <ol className="list-none pl-0 space-y-2 w-full max-w-6xl"> 
          {report.networkingAndCommunity.map((network, index) => (
            <li key={index} className="flex text-base md:text-lg font-semibold">
              <span className="mr-2 text-gray-700">-</span> 
              {network}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Networking;