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
    highlight any transferrable skills.
  `;

  const userInput = isJobDescription 
    ? `Analyze this job description: ${desiredProfession}. Based on this, provide a list of:
      1. Technical Skills
      2. Soft Skills
      3. Certifications or Courses
      4. Industry Knowledge
      5. Networking and Community
      ` 
    : `These are my current skills: ${currentSkills}. This is my desired career: ${desiredProfession}. Based on this information, provide a list of:
      1. Technical Skills
      2. Soft Skills
      3. Certifications or Courses
      4. Industry Knowledge
      5. Networking and Community
      `;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { 
        role: 'system', 
        content: `${systemPrompt}. Please provide the response in JSON format with clearly defined keys in camelCase, including an "Introduction" key with the initial paragraph as its value.`, 
      },
      { 
        role: 'user', 
        content: userInput, 
      },
    ],
    max_tokens: 1000,
    response_format: {
      'type': 'json_object',
    },
    temperature: 0.5,
    top_p: 1,
  });

  return NextResponse.json({ skillsNeeded: response.choices?.[0].message?.content ?? '' }, { status: 200 });
}