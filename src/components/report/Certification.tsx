'use client';
import ProcessingState from '@/components/ProcessingState';
import { useResumeContext } from '@/context/ResumeContext';
import { trackEvent } from '@/services/mixpanel.services';
import { camelCaseToTitleCase } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

const Certification = () => {
  const { courses, loading, skillsNeeded } = useResumeContext();
  const { desiredRole, report } = skillsNeeded ?? {};

  if (!desiredRole || !report?.certificationsOrCourses) return null;
  return (
    <>
      <section id="certification" className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-[#0083A4]">
          {desiredRole} Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {report.certificationsOrCourses.map((cert, index) => (
            <div key={index} className="p-6 rounded-sm border shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                {camelCaseToTitleCase(cert.id)}
              </h3>
              <p>{cert.details}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Courses List */}
      {loading && <ProcessingState prompt="loading courses..." />}
      {!loading && courses && (
        <section id="recommendedCourses" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#0083A4]">
            Recommended Courses from Udemy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`https://www.udemy.com${course.url}`}
                onClick={() =>
                  trackEvent('course_recommendation_clicked', { course })
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col rounded-sm shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <div className="relative w-full h-0 pb-[56.25%]">
                  {' '}
                  {/* Aspect ratio for video */}
                  <Image
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={course.image_240x135}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                  <p className="text-sm">{course.headline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Certification;
