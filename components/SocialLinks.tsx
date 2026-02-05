'use client';

import { Social } from '@/types/config';
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
  MailIcon,
  TikTokIcon,
  DiscordIcon,
  TwitchIcon,
  SpotifyIcon,
} from './Icons';

interface SocialLinksProps {
  social: Social;
}

const socialConfig = [
  { key: 'twitter' as const, Icon: TwitterIcon, baseUrl: 'https://twitter.com/', label: 'Twitter' },
  { key: 'github' as const, Icon: GitHubIcon, baseUrl: 'https://github.com/', label: 'GitHub' },
  { key: 'linkedin' as const, Icon: LinkedInIcon, baseUrl: 'https://linkedin.com/in/', label: 'LinkedIn' },
  { key: 'instagram' as const, Icon: InstagramIcon, baseUrl: 'https://instagram.com/', label: 'Instagram' },
  { key: 'youtube' as const, Icon: YouTubeIcon, baseUrl: 'https://youtube.com/@', label: 'YouTube' },
  { key: 'tiktok' as const, Icon: TikTokIcon, baseUrl: 'https://tiktok.com/@', label: 'TikTok' },
  { key: 'discord' as const, Icon: DiscordIcon, baseUrl: 'https://discord.gg/', label: 'Discord' },
  { key: 'twitch' as const, Icon: TwitchIcon, baseUrl: 'https://twitch.tv/', label: 'Twitch' },
  { key: 'spotify' as const, Icon: SpotifyIcon, baseUrl: 'https://open.spotify.com/user/', label: 'Spotify' },
  { key: 'email' as const, Icon: MailIcon, baseUrl: 'mailto:', label: 'Email' },
];

export function SocialLinks({ social }: SocialLinksProps) {
  const activeSocials = socialConfig.filter(({ key }) => social[key]);

  if (activeSocials.length === 0) return null;

  return (
    <div className="social-links">
      {activeSocials.map(({ key, Icon, baseUrl, label }) => {
        const value = social[key];
        const href = value?.startsWith('http') || value?.includes('@') 
          ? (key === 'email' ? `mailto:${value}` : value)
          : `${baseUrl}${value}`;

        return (
          <a
            key={key}
            href={href}
            target={key === 'email' ? undefined : '_blank'}
            rel={key === 'email' ? undefined : 'noopener noreferrer'}
            className="social-link"
            aria-label={label}
            title={label}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
