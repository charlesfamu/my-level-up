'use client'
import ProcessingState from '@/components/ProcessingState';
import { useResumeContext } from '@/context/ResumeContext';
import { camelCaseToTitleCase } from '@/utils';
import Image from 'next/image';

const Certification = () => {
  const { courses, loading, skillsNeeded } = useResumeContext();
  const { desiredRole, report } = skillsNeeded ?? {};
 
  if (!desiredRole || !report?.certificationsOrCourses) return null;
  return (
    <section id="certification" className="w-full max-w-5xl mx-auto text-center px-4 md:px-6">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-8">{desiredRole} Certifications</h1>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-6xl">
          {report.certificationsOrCourses.map((cert, index) => (
            <li key={index} className="flex flex-col p-4 min-w-[250px] max-w-[300px]">
              <div className="flex flex-col text-left">
                <h2 className="text-lg font-semibold">{camelCaseToTitleCase(cert.id)}</h2>
                <p className="text-sm md:text-base mt-2 leading-tight">{cert.details}</p>
              </div>
            </li>
          ))}
        </ul>
        {/* Courses List */}
        {loading && <ProcessingState prompt="loading courses..." />}
        {!loading && courses && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full mt-8 overflow-y-auto">
            {courses.map((course) => (
              <a
                key={course.id}
                href={`https://www.udemy.com${course.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-between overflow-hidden"
              >
                <div className="relative w-full h-0 pb-[56.25%]"> {/* Aspect ratio for video */}
                  <Image
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={course.image_240x135}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-2 text-left">
                  <h3 className="text-lg font-bold">{course.title}</h3>
                  {/* <p className="text-xs">{course.headline}</p> */}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Certification;