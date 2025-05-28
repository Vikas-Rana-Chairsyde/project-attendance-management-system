import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const resetLink = `http://localhost:3001/pages/reset?email=${encodeURIComponent(email)}&token=X9kQPykHM+g0qcqbQEZqFUg0n8A5V29RhxKfmj8lKX0=`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset Request',
      html: `
        <p>Hi,<p>
        <div>We have received a request to reset your password.</div>
        <div>Click this <a href="${resetLink}">link</a> to reset it.</div>
        <p>If you didn’t request a password reset, you can safely ignore this email.</p>

        <div>Thanks,  </div>
        <div>Team Schedura</div>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log(`Email successfully sent to ${email}`);

    return NextResponse.json({
      message: `Email successfully sent to ${email}`,
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
