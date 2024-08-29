'use client'
import { useResumeContext } from '@/context/ResumeContext';

const Industry = () => {
  const { skillsNeeded } = useResumeContext();
  const { desiredRole, report } = skillsNeeded ?? {};
  if (!desiredRole || !report?.industryKnowledge) return null;

  return (
    <section id="industryKnowledge" className="w-full max-w-5xl">
      <div className="mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Industry Knowledge Needed
            </h1>
          </div>
          <ul className="overflow-y-auto h-96 text-center lg:text-left">
            {report.industryKnowledge.map((knowledge, index) => (
              <li key={index} className="p-4">
                <div className="">
                  <h3 className="text-lg font-semibold">{knowledge}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Industry;