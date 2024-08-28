'use client'
import ProcessingState from '@/components/ProcessingState';
import { useResumeContext } from '@/context/ResumeContext';
import { camelCaseToTitleCase } from '@/utils';

const Certification = () => {
  const { courses, loading, skillsNeeded } = useResumeContext();
  const { desiredRole, report } = skillsNeeded ?? {};
 
  if (!desiredRole || !report?.certificationsOrCourses) return null;
  return (
    <section id="certification" className="w-full flex items-center">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl items-end gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Certifications and Industry Knowledge for a {desiredRole}</h2>
            </div>
            <ul className="grid gap-6 overflow-y-auto">
              {report.certificationsOrCourses.map((cert, index) => {
                return (
                  <li key={index}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">{camelCaseToTitleCase(cert.id)}</h3>
                      <p>{cert.details}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          {loading && <ProcessingState prompt='loading couses...'/>}
          {!loading && courses && (
            <div className="grid grid-cols-2 gap-4 overflow-y-auto lg:order-last h-96">
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
  );
}

export default Certification;