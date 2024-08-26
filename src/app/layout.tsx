import { ResumeProvider } from '@/context/ResumeContext';
import clsx from 'clsx';
import { DM_Sans, Space_Mono } from 'next/font/google';
import Link from 'next/link';
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

function ArrowTrendUpIcon(props: any) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    fill="currentColor"
    {...props}
  >
    <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32h160c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32s-32-14.3-32-32v-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z" />
  </svg>
  );
}

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
          <header className="px-4 lg:px-6 h-14 flex items-center bg-muted sticky top-0 z-50">
            <Link href="/" className="flex items-center justify-center" prefetch={false}>
              <ArrowTrendUpIcon className="h-6 w-6" />
              <span className="sr-only">A Level Up</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">

            </nav>
          </header>
            {children}
          <footer
            id="contact"
            className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
          >
            <p className="text-xs text-muted-foreground">&copy; 2024 A Level Up. All rights reserved.</p>
          </footer>  
        </ResumeProvider>
      </body>
    </html>
  );
}
