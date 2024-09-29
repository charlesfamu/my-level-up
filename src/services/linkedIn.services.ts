/* eslint-disable @typescript-eslint/no-unused-vars */
interface LinkedInProfileData {
  firstName?: {
    localized?: {
      [locale: string]: string;
    };
  };
  lastName?: {
    localized?: {
      [locale: string]: string;
    };
  };
  headline?: {
    localized?: {
      [locale: string]: string;
    };
  };
  summary?: string;
}

// https://api.linkedin.com/v2/people/(id:{person ID})
const LINKEDIN_PERSON_API = 'https://api.linkedin.com/v2/people';
const ACCESS_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN;

export async function getProfileData() {
  try {
    if (!ACCESS_TOKEN) {
      throw new Error('Access token is not defined');
    }

    const response = await fetch(LINKEDIN_PERSON_API, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error!`);
    }
    const data: LinkedInProfileData = await response.json();

    const firstName =
      data.firstName?.localized?.en_US ??
      data.firstName?.localized?.default ??
      '';
    const lastName =
      data.lastName?.localized?.en_US ??
      data.lastName?.localized?.default ??
      '';
    const headline =
      data.headline?.localized?.en_US ??
      data.headline?.localized?.default ??
      '';
    const summary = data.summary ?? '';

    return {
      firstName,
      lastName,
      headline,
      summary,
    };
  } catch (error) {
    // console.error(error);
  }
}
