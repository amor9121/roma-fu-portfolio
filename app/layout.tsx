import { assetPath } from '@/lib/assets';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Roma Fu — Data & Software Engineer',
  description: 'Enterprise software experience meets data engineering. Explore Roma Fu’s conservation lakehouse research, software work, and freelance capabilities.',
  icons: { icon: assetPath('/favicon.svg') },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
