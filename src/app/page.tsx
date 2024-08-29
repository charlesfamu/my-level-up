'use client'

import DesiredProfessionCard from '@/components/DesiredProfessionCard';
import MainContainer from '@/components/MainContainer';
import ProcessingState from '@/components/ProcessingState';
import UploadResumeCard from '@/components/UploadResumeCard';
import WelcomeCard from '@/components/WelcomeCard';
import { Steps, useResumeContext } from '@/context/ResumeContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { step, setStep, loading, clearCourses, courses } = useResumeContext();
  const router = useRouter();

  useEffect(() => {
    if (step === Steps.Upload && courses) {
      clearCourses();
    }
  }, [step, courses, clearCourses]);

  useEffect(() => {
    if (step === Steps.Results) {
      router.push('/report');
    }
  }, [step, router, setStep]);

  if (step === Steps.Results) {
    return (
      <div className="flex items-center justify-center w-full">
        <ProcessingState prompt="Loading Report..."/>
      </div>
    );
  }

  return (
    <MainContainer>
      {step === Steps.Welcome && <WelcomeCard />}
      {step === Steps.Upload && <UploadResumeCard />}
      {step === Steps.Input && <DesiredProfessionCard />}
    </MainContainer>
  );

  // return (
  //   <div className="flex flex-col min-h-[100dvh]">
  //     <main className="flex-1">
  //       <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
  //         <div className="container px-4 md:px-6">
  //           <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
  //             <div className="flex flex-col justify-center space-y-4">
  //               <div className="space-y-2">
  //                 <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
  //                   Welcome to My Level Up, your career transition assistant
  //                 </h1>
  //                 <p className="max-w-[600px] text-muted-foreground md:text-xl">
  //                   Meet your AI career coach, bridging the gap between your current skills and the ones you need to land your dream job!
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>

  //       {/* Step: Upload Resume */}
  //       {step === Steps.Upload && (
  //         <div>
  //           <UploadResume />
  //           {loading && <ProcessingState prompt="Processing your resume..." />}
  //         </div>
  //       )}

  //       {/* Step: Input Desired Profession */}
  //       {step === Steps.Input && (
  //         <div>
  //           <DesiredProfessionInput />
  //           {loading && <ProcessingState prompt="Analyzing your desired profession..." />}
  //         </div>
  //       )}
  //     </main>     
  //   </div>
  // );
}
