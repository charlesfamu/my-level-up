'use client'

import Certification from '@/components/report/Certification';
import Introduction from '@/components/report/Introduction';
import TechnicalSkills from '@/components/report/TechnicalSkills';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ReportKeys, Steps, useResumeContext } from '@/context/ResumeContext';
import { useEffect } from 'react';

const Report = () => {
  const { courses, handleFetchCourses, skillsNeeded, setStep } = useResumeContext();

  useEffect(() => {
    setStep(Steps.Input);
  }, [setStep]);

  useEffect(() => {
    const fetchData = async () => {
      if (!courses) {
        await handleFetchCourses();
      }
    };
    
    fetchData();
  }, [courses, handleFetchCourses]);

  const { desiredRole, report } = skillsNeeded ?? {};
  const reportKeys = Object.keys(report ?? {});
  if (!desiredRole || !report) return null;

  return (
    <Carousel className="w-full max-w-[1200px]">
      <CarouselContent className="w-full h-full">
        {reportKeys.map((reportKey, index) => {
          let Component = null;
          if (reportKey === ReportKeys.Certification) {
            Component = <Certification />;
          } else if (reportKey === ReportKeys.Industry) {
    
          } else if (reportKey === ReportKeys.Introduction) {
            Component = <Introduction />;
          } else if (reportKey === ReportKeys.Networking) {
            
          } else if (reportKey === ReportKeys.SoftSkills) {
            
          } else if (reportKey === ReportKeys.TechnicalSkills) {
            Component = <TechnicalSkills />;
          } else if (reportKey === ReportKeys.TransferableSkills) {
            
          }
          return Component ? (
            <CarouselItem key={index} className="flex justify-center items-center min-h-[calc(100vh-14rem)]">
              {Component}
            </CarouselItem>
          ) : null;
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"/>
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"/>
    </Carousel>
  );
}

export default Report;