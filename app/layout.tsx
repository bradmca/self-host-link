import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { getConfig } from '@/lib/config';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export async function generateMetadata(): Promise<Metadata> {
  const config = getConfig();
  const url = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  return {
    metadataBase: new URL(url),
    title: config.seo.title,
    description: config.seo.description,
    keywords: config.seo.keywords?.join(', '),
    authors: [{ name: config.name }],
    openGraph: {
      type: 'website',
      title: config.seo.title,
      description: config.seo.description,
      images: config.seo.ogImage ? [config.seo.ogImage] : [],
      siteName: config.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: config.seo.title,
      description: config.seo.description,
      images: config.seo.ogImage ? [config.seo.ogImage] : [],
    },
    icons: {
      icon: '/favicon.ico',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = getConfig();

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || '${config.theme.mode}';
                const resolved = theme === 'system' 
                  ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                  : theme;
                document.documentElement.classList.add(resolved);
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
        {config.analytics?.googleAnalyticsId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${config.analytics.googleAnalyticsId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${config.analytics.googleAnalyticsId}');
                `,
              }}
            />
          </>
        )}
        {config.analytics?.plausibleDomain && (
          <script
            defer
            data-domain={config.analytics.plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body>
        <ThemeProvider defaultTheme={config.theme.mode}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
