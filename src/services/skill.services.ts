export async function uploadResume(formData: FormData) {
  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response instanceof Response && response.ok) {
      return await response.json();
    } else if (response instanceof Response) {
      // Handle non-OK HTTP responses
      throw new Error(`Error uploading file, ${response.statusText}`);
    } else {
      throw response;
    }
  } catch (error) {
    console.log(`Error uploading file, ${error}`);
    return null;
  }
}

export async function fetchSkills(body: string) {
  try {
    const response = await fetch('/api/skills', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });

    if (response instanceof Response && response.ok) {
      return response.json();
    } else if (response instanceof Response) {
      throw new Error(`Error fetching desired skills, ${response.statusText}`);
    } else {
      throw response;
    }
  } catch (error) {
    console.log(`Error fetching desired skills, ${error}`);
    return null;
  }
}