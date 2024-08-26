'use client'
import ProcessingState from '@/components/ProcessingState';
import { useResumeContext } from '@/context/ResumeContext';
import { useEffect } from 'react';

const Skills = () => {
  const { courses, handleFetchCourses, loading, skillsNeeded } = useResumeContext();

  useEffect(() => {
    handleFetchCourses();
  }, [handleFetchCourses, skillsNeeded]);

  const { desiredRole, introduction, requiredSkills } = skillsNeeded ?? {};
  return (
    <main className="flex-1">
      <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transitioning to {desiredRole}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  {introduction}
                </p>
              </div>
              <div className="pt-4">
                <a href="#techskills" className="text-primary hover:underline text-lg font-semibold">
                  Let’s get your journey started to level up!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="techskills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Skills</h2>
              </div>
              <ul className="grid gap-6">
                {requiredSkills?.technicalSkills?.map((technicalSkill, index) => {
                  return (
                    <li key={index}>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">{technicalSkill}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="softskills" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Essential Soft Skills</h2>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                {requiredSkills?.softSkills?.map((softSkill, index) => {
                  return (
                    <li key={index}>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">{softSkill}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="certifications" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Certifications and Industry Knowledge
                </h2>
              </div>
              <ul className="grid gap-6">
                {requiredSkills?.certificationsOrCourses?.map((certification, index) => (
                  <li key={index}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">{certification}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {loading && <ProcessingState prompt='loading couses...'/>}
            {!loading && courses && (
              <div className="grid grid-cols-2 gap-4 rounded-xl overflow-hidden lg:order-last">
                {courses?.map((course) => {
                  return (
                    <a
                      key={course.id} 
                      className="w-full aspect-video"
                      href={`https://www.udemy.com${course.url}`} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={course.image_240x135}
                        alt={course.title}  
                      />
                      <div className="p-2">
                        <h3 className="text-lg font-bold">{course.title}</h3>
                        <p className="text-sm text-gray-600">{course.headline}</p>  
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills;