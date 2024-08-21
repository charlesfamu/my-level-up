import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  const { currentSkills, desiredProfession } = await request.json();
  const systemPrompt = `
    You are a career transition advisor with expertise in identifying skills and qualifications needed 
    for various professions. Your task is to analyze a user's current skill set and desired career field to provide 
    a comprehensive list of skills, certifications, and knowledge areas required for a successful transition. Also
    highlight any transferrable skills.
  `;

  const userInput = `
    These are my current skills: ${currentSkills}. This is my desired career: ${desiredProfession}. 
    Based on this information, provide a list of:
    1. Technical Skills: Programming languages, tools, or technologies relevant to the new field.
    2. Soft Skills: Key interpersonal and management skills needed in the new profession.
    3. Certifications or Courses: Recommended certifications, online courses, or training programs.
    4. Industry Knowledge: Additional industry-specific knowledge or experience required.
    5: Networking and Community: Key professional groups, forums, or networking opportunities to explore.
  `;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { 
        role: 'system', 
        content: systemPrompt, 
      },
      { 
        role: 'user', 
        content: userInput, 
      },
    ],
    max_tokens: 500,
    temperature: 0.5,
    top_p: 1,
  });

  return NextResponse.json({ skillsNeeded: response.choices?.[0].message?.content ?? '' }, { status: 200 });
}