import { ResumeProvider } from '@/context/ResumeContext';
import clsx from 'clsx';
import { DM_Sans, Space_Mono } from 'next/font/google';
import './globals.css';

const fontHeading = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '700'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(
        'antialiased',
        fontHeading.variable,
        fontBody.variable,
      )}>
        <ResumeProvider>
          {children}
        </ResumeProvider>
      </body>
    </html>
  );
}
