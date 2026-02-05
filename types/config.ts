export interface Link {
  title: string;
  url: string;
  icon?: string;
  description?: string;
}

export interface Theme {
  mode: 'light' | 'dark' | 'system';
  primaryColor: string;
  accentColor: string;
  gradientStart: string;
  gradientEnd: string;
}

export interface Social {
  twitter?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
  email?: string;
  tiktok?: string;
  discord?: string;
  twitch?: string;
  spotify?: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

export interface Analytics {
  googleAnalyticsId?: string;
  plausibleDomain?: string;
}

export interface Config {
  name: string;
  bio: string;
  avatar?: string;
  theme: Theme;
  social: Social;
  links: Link[];
  seo: SEO;
  analytics?: Analytics;
}
