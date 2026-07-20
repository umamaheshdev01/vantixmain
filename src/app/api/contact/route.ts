import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { CONTACT_EMAIL } from '@/constants/navigation';

// Server-side sender. The API key never reaches the browser.
const resend = new Resend(process.env.RESEND_API_KEY);

// `from` must be a domain verified in Resend. Falls back to Resend's shared
// test sender so the route works before your own domain is verified.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'VantixGrowth <onboarding@resend.dev>';

// Where enquiries are delivered. Kept separate from CONTACT_EMAIL (the address
// shown publicly on the site) so the two can differ.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? CONTACT_EMAIL;

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Email is not configured. Set RESEND_API_KEY.' },
      { status: 500 },
    );
  }

  let body: {
    name?: string;
    company?: string;
    email?: string;
    tier?: string;
    need?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = (body.name ?? '').trim();
  const company = (body.company ?? '').trim();
  const email = (body.email ?? '').trim();
  const tier = (body.tier ?? '').trim();
  const need = (body.need ?? '').trim();

  if (!name || !company || !email || !need) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const subject = `New enquiry — ${name}${company ? ` (${company})` : ''}`;
  const text = [
    `Name: ${name}`,
    `Company: ${company}`,
    `Work email: ${email}`,
    `Tier: ${tier}`,
    '',
    'What they need:',
    need,
  ].join('\n');

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      text,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to send.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
