'use client'

import Banner, { BannerHandles } from '@/components/Banner';
import Certification from '@/components/report/Certification';
import Industry from '@/components/report/Industry';
import Introduction from '@/components/report/Introduction';
import Networking from '@/components/report/Networking';
import SoftSkills from '@/components/report/SoftSkills';
import TechnicalSkills from '@/components/report/TechnicalSkills';
import TransferableSkills from '@/components/report/TransferableSkills';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Steps, useResumeContext } from '@/context/ResumeContext';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

const Report = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const { courses, handleFetchCourses, skillsNeeded, setStep } = useResumeContext();
  const router = useRouter();
  const bannerRef = useRef<BannerHandles>(null);

  const goToWelcomePage = () => {
    router.replace('/');
  };

  const goToSlide = useCallback((index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  }, [api]);

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
  if (!desiredRole || !reportKeys.length) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={goToWelcomePage}
            aria-label="Get Started"
          >
            Get Started
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <Banner
        bannerText="Take a look at the courses that can help you get the skills you need."
        ref={bannerRef} 
        onClose={() => bannerRef.current?.hide()} 
        onTriggerGoToSlide={goToSlide}
        slideIndex={3}
      />
      
      <Carousel className="w-full max-w-[1200px]" setApi={setApi}>
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
    </div>
  );
}

export default Report;