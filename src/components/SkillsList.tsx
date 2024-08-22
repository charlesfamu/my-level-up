'use client'
import { useResumeContext } from '@/context/ResumeContext';

const SkillsList = () => {
  const { skillsNeeded } = useResumeContext();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Skills Needed</h2>
      {skillsNeeded}
      {/* <ul className="list-disc ml-6 mt-2">
        {skills.map((skill: any) => (
          <li key={skill.id} className="text-lg">{skill}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default SkillsList;