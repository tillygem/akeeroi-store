import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { WelcomeEmail } from '@/components/email/WelcomeEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });
    }

    // Send Welcome Email
    await resend.emails.send({
      from: 'Akee-roi Collections <orders@akeeroi.com>',
      to: email,
      replyTo: 'akeeroicollections@gmail.com',
      subject: 'Welcome to the Club',
      react: <WelcomeEmail />,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter Error:", error);
    return NextResponse.json({ success: false, error: 'Failed to subscribe' }, { status: 500 });
  }
}