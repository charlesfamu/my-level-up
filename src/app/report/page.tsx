'use client'

import Certification from '@/components/report/Certification';
import Industry from '@/components/report/Industry';
import Introduction from '@/components/report/Introduction';
import Networking from '@/components/report/Networking';
import SoftSkills from '@/components/report/SoftSkills';
import TechnicalSkills from '@/components/report/TechnicalSkills';
import TransferableSkills from '@/components/report/TransferableSkills';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Steps, useResumeContext } from '@/context/ResumeContext';
import { useEffect } from 'react';

const Report = () => {
  const { courses, handleFetchCourses, skillsNeeded, setStep } = useResumeContext();

  useEffect(() => {
    setStep(Steps.Welcome);
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
  if (!desiredRole || !reportKeys.length) return null;

  return (
    <Carousel className="w-full max-w-[1200px]">
      <CarouselContent className="w-full h-full">
        <CarouselItem className="flex justify-center items-center min-h-[calc(100vh-14rem)]">
          <Introduction />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center min-h-[calc(100vh-14rem)]">
          <TechnicalSkills />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center min-h-[calc(100vh-14rem)]">
          <SoftSkills />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center min-h-[calc(100vh-14rem)]">
          <Certification />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center min-h-[calc(100vh-14rem)]">
          <Networking />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center min-h-[calc(100vh-14rem)]">
          <Industry />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center min-h-[calc(100vh-14rem)]">
          <TransferableSkills />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"/>
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"/>
    </Carousel>
  );
}

export default Report;