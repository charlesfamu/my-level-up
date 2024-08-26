const UDEMY_COURSES_ENDPOINT = 'https://www.udemy.com/api-2.0/courses';
const timeout = (ms: number) => new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out')), ms));

export async function fetchCourses(courseTitle: string) {
  const params = new URLSearchParams({
    search: courseTitle,
    is_affiliate_agreed: 'True',
    ordering: 'highest-rated',
  });

  const url = `${UDEMY_COURSES_ENDPOINT}/?${params.toString()}`;
  try {
    const response = await Promise.race([
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Authorization': process.env.UDEMY_BEARER_TOKEN ?? '',
          'Content-Type': 'application/json',
        }
      }),
      timeout(5000)
    ]);

    if (response instanceof Response && response.ok) {
      const {results} = await response.json();
      // return first element in data array
      return results?.[0] ?? [];
    } else if (response instanceof Response) {
      // Handle non-OK HTTP responses
      throw new Error(`Failed to fetch course: ${courseTitle} - ${response.statusText}`);
    } else {
      throw response;
    }

  } catch (error) {
    console.log('Error fetching course data:', error);
    return null;
  }
}
