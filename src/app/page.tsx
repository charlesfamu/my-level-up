'use client'

import DesiredProfessionInput from '@/components/DesiredProfessionInput';
import ProcessingState from '@/components/ProcessingState';
import Skills from '@/components/Skills';
import UploadResume from '@/components/UploadResume';
import { Steps, useResumeContext } from '@/context/ResumeContext';
import Link from 'next/link';

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export default function Home() {
  const { step, loading } = useResumeContext();
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-muted sticky top-0 z-50">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">A Level Up</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">

        </nav>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Career Transition Assistant
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Meet your AI career coach, bridging the gap between your current skills and the ones you need to land your dream job!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step: Upload Resume */}
        {step === Steps.Upload && (
          <div>
            <UploadResume />
            {loading && <ProcessingState prompt="Processing your resume..." />}
          </div>
        )}

        {/* Step: Input Desired Profession */}
        {step === Steps.Input && (
          <div>
            <DesiredProfessionInput />
            {loading && <ProcessingState prompt="Analyzing your desired profession..." />}
          </div>
        )}

        {/* Step: Display Skills Results */}
        {step === Steps.Results && (
          <div>
            <Skills />
            {loading && <ProcessingState prompt="Loading your results..." />}
          </div>
        )}
      </main> 
      <footer
        id="contact"
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
      >
        <p className="text-xs text-muted-foreground">&copy; 2024 A Level Up. All rights reserved.</p>
      </footer>     
    </div>
  );
}
