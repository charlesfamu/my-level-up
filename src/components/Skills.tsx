'use client'
import { useResumeContext } from '@/context/ResumeContext';

const SkillsList = () => {
  const { courses, handleFetchCourses, skillsNeeded } = useResumeContext();
  if (!skillsNeeded) return;

  // export interface SkillsNeeded {
  //   currentJob: string;
  //   desiredRole: string;
  //   introduction: string;
  //   technicalSkills: string[];
  //   softSkills: string[];
  //   certificationsOrCourses: string[];
  //   industryKnowledge: string[];
  //   networkingAndCommunity: string[];
  //   transferableSkills: string[];
  // }

  return (
    <>
      <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
            
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Skills</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  As a seasoned software developer, I possess a deep understanding of the software development
                  lifecycle (SDLC), proficiency in project management tools, and expertise in Agile and Scrum
                  methodologies. I'm well-versed in collaborating with cross-functional teams to ensure successful
                  project delivery.
                </p>
              </div>
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Project Management</h3>
                    <p className="text-muted-foreground">
                      Experienced in using tools like Jira, Trello, and Asana to manage complex projects and track
                      progress.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">SDLC Knowledge</h3>
                    <p className="text-muted-foreground">
                      Thorough understanding of the software development lifecycle, including requirements gathering,
                      design, development, testing, and deployment.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Agile and Scrum</h3>
                    <p className="text-muted-foreground">
                      Proficient in Agile and Scrum methodologies, with experience in facilitating stand-ups, sprint
                      planning, and retrospectives.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="certifications" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Essential Soft Skills</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                In addition to my technical expertise, I possess a strong set of soft skills that are crucial for
                success as a Technical Program Manager. I excel at leading cross-functional teams, effective
                communication, and problem-solving.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Leadership</h3>
                    <p className="text-muted-foreground">
                      Proven track record of leading and motivating cross-functional teams to achieve project goals.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Communication</h3>
                    <p className="text-muted-foreground">
                      Excellent written and verbal communication skills, with the ability to effectively convey
                      complex technical information to stakeholders.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Problem-Solving</h3>
                    <p className="text-muted-foreground">
                      Adept at identifying and resolving issues, with a solutions-oriented mindset and the ability to
                      think critically.
                    </p>
                  </div>
                </li>
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
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  To further demonstrate my expertise and readiness for the Technical Program Manager role, I've
                  obtained relevant certifications and continuously expand my industry knowledge through ongoing
                  learning and development.
                </p>
              </div>
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">PMP Certification</h3>
                    <p className="text-muted-foreground">
                      Holds a Project Management Professional (PMP) certification, demonstrating a deep understanding
                      of project management best practices.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Scrum Master Certification</h3>
                    <p className="text-muted-foreground">
                      Certified Scrum Master, with expertise in leading Agile teams and implementing Scrum
                      methodologies.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Continuous Learning</h3>
                    <p className="text-muted-foreground">
                      Actively participates in industry events, conferences, and online courses to stay up-to-date
                      with the latest trends and best practices in program management.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <img
              src="/placeholder.svg"
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              width="550"
              height="310"
            />
          </div>
        </div>
      </section>
      <section id="video-previews" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Video Previews</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out these video previews to learn more about my experience and skills.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden order-2 lg:order-1">
                <video className="w-full aspect-video" src="https://www.youtube.com/watch?v=By9wCB9IZp0" controls />
              </div>
              <div className="rounded-xl overflow-hidden order-3 lg:order-2">
                <video className="w-full aspect-video" src="https://www.youtube.com/watch?v=By9wCB9IZp0" controls />
              </div>
              <div className="rounded-xl overflow-hidden order-4 lg:order-3">
                <video className="w-full aspect-video" src="https://www.youtube.com/watch?v=By9wCB9IZp0" controls />
              </div>
              <div className="rounded-xl overflow-hidden order-5 lg:order-4">
                <video className="w-full aspect-video" src="https://www.youtube.com/watch?v=By9wCB9IZp0" controls />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsList;