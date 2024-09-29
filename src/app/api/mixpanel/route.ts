import Mixpanel from 'mixpanel';
import { type NextRequest, NextResponse } from 'next/server';

const MIXPANEL_TOKEN = process.env.MIXPANEL_PROJECT_TOKEN!;

const mixpanel = Mixpanel.init(MIXPANEL_TOKEN);

export async function POST(request: NextRequest) {
  const { event, properties } = await request.json();
  const ip = request.headers.get('x-forwarded-for') || request.ip;

  mixpanel.track(event, {
    ...properties,
    ip: ip ?? 1,
  });

  return NextResponse.json({ message: `Tracked ${event} successfully!` });
}
