import Mixpanel from 'mixpanel';
import { type NextRequest, NextResponse } from 'next/server';

const MIXPANEL_TOKEN = process.env.MIXPANEL_PROJECT_TOKEN!;

const mixpanel = Mixpanel.init(MIXPANEL_TOKEN, { geolocate: false });

export async function POST(request: NextRequest) {
  const { event, properties } = await request.json();

  mixpanel.track(event, properties);
  return NextResponse.json({ message:  `${event} tracked successfully!` });
}