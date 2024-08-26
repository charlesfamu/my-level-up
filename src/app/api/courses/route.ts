import { fetchCourses } from '@/services/udemy.services';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  // trim top 3 skill areas, don't pass all the skills in the certificationsOrCourses key
  // pass in array of skill areas
  // Promise.all on skill areas and call getCourses on each skill area

  const { searchParams } = new URL(request.url);
  const courseTitles = searchParams.get('course');
  if (courseTitles) {
    const coursesArray = courseTitles.split(',');

    const fetchAllCourses = async () => {
      try {
        const results = await Promise.all(coursesArray.map(fetchCourses));
        return results;
      } catch (error) {
        console.log('Error fetching course data:', error); 
      } 
    }

    fetchAllCourses();
  }
}