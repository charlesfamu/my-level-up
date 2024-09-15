export const trackEvent = async (event: string, properties: Record<string, any> = {}) => {
  const response = await fetch('/api/mixpanel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ event, properties }),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Failed to track event');
  }
}