import { SkillsNeeded } from '@/context/ResumeContext';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  const { currentSkills, desiredProfession, isJobDescription } = await request.json();

  const systemPrompt = `
    You are a career transition advisor with expertise in identifying skills and qualifications needed 
    for various professions. Your task is to analyze a user's current skill set and desired career field to provide 
    a comprehensive list of skills, certifications, and knowledge areas required for a successful transition. Also
    highlight any transferrable skills. Please ensure the response is in JSON format with clearly defined keys using camelCase.
    
    The introduction should start by summarizing the user's current skills and explain how these skills relate to the desired profession. 
    Specifically, highlight any transferable skills and how they can be leveraged in the new role. Be very realistic. If the current skills
    and desired career are not related, speak to any challenges one may have during this transition.

    The results generated for the topics, "Technical Skills" and "Certifications and Courses" will return an array of objects where each object has an
    "id" that is the title in camelCase of the topic and "details" that briefly summarizes the topic (i.e. technical skills and certifications and courses)
    Please ensure these topics are relevant to the desired profession or desired job description, not the user's current skills.

    The "Current Job" and "Desired Role" results should only include the title of the role, not the company.
  `;

  const userInput = isJobDescription 
    ? `Analyze this job description: ${desiredProfession}. Based on this, provide a list of:
      1. Technical Skills
      2. Soft Skills
      3. Certifications or Courses
      4. Industry Knowledge
      5. Networking and Community
      Also, provide an introduction explaining how the user's current skills can be leveraged in this job.
      ` 
    : `These are my current skills: ${currentSkills}. This is my desired career: ${desiredProfession}. Based on this information, provide a list of:
      1. Technical Skills
      2. Soft Skills
      3. Certifications or Courses
      4. Industry Knowledge
      5. Networking and Community
      Also, provide an introduction explaining how my current skills relate to my desired career and how they can be leveraged for a successful transition.
      `;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { 
        role: 'system', 
        content: `${systemPrompt}. The JSON object should include:
          {
            "currentJob": "string",
            "desiredRole": "string",
            "report": {
              "introduction": "string",
              "technicalSkills": {id: "string", details: "string"}[],
              "softSkills": ["string"],
              "certificationsOrCourses": {id: "string", details: "string"}["string"],
              "industryKnowledge": ["string"],
              "networkingAndCommunity": ["string"],
              "transferableSkills": ["string"]
            },
          }`, 
      },
      { 
        role: 'user', 
        content: userInput, 
      },
    ],
    max_tokens: 2000,
    response_format: {
      'type': 'json_object'
    },
    temperature: 0.5,
    top_p: 1,
  });

  try {
    const completionContent = response.choices?.[0]?.message?.content ?? '';
    const parsedResponse = JSON.parse(completionContent) ?? {};
    
    const defaultSkills: SkillsNeeded = {
      currentJob: parsedResponse.currentJob || '',
      desiredRole: parsedResponse.desiredRole || '',
      report: {
        introduction: parsedResponse.report?.introduction ?? '',
        technicalSkills: parsedResponse.report?.technicalSkills ?? [],
        softSkills: parsedResponse.report?.softSkills ?? [],
        certificationsOrCourses: parsedResponse.report?.certificationsOrCourses ?? [],
        industryKnowledge: parsedResponse.report?.industryKnowledge ?? [],
        networkingAndCommunity: parsedResponse.report?.networkingAndCommunity ?? [],
        transferableSkills: parsedResponse.report?.transferableSkills ?? [],
      },
    };

    return NextResponse.json({ skillsNeeded: defaultSkills }, { status: 200 });
  } catch (error) {
    console.error('Error parsing response:', error);
    return NextResponse.json({ error: 'Failed to parse the response.' }, { status: 500 });
  }
}
