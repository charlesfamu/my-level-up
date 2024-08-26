export async function fetchCourses(titles: string) {
  try {
    const url = `/api/courses?titles=${titles}`;
    const response = await fetch(url);
    if (response instanceof Response && response.ok) {
      const { courses } = await response.json();
      return courses;
    } else if (response instanceof Response) {
      // Handle non-OK HTTP responses
      throw new Error(`Error fetching courses from titles, ${response.statusText}`);
    } else {
      throw response;
    }
  } catch (error) {
    console.log(`Error fetching courses from titles, ${error}`);
    return null;
  }
  
}