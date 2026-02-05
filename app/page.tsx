import { getConfig } from '@/lib/config';
import { Avatar } from '@/components/Avatar';
import { LinkCard } from '@/components/LinkCard';
import { SocialLinks } from '@/components/SocialLinks';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  const config = getConfig();

  return (
    <>
      <div className="gradient-bg" aria-hidden="true" />
      <ThemeToggle />

      <main className="main-container">
        <div className="content-wrapper">
          {/* Profile Section */}
          <section className="profile-section">
            <Avatar src={config.avatar} alt={config.name} size={120} />
            <h1 className="profile-name">{config.name}</h1>
            <p className="profile-bio">{config.bio}</p>
          </section>

          {/* Social Links */}
          <SocialLinks social={config.social} />

          {/* Links Section */}
          <section className="links-section" aria-label="Links">
            {config.links.map((link, index) => (
              <LinkCard key={`${link.title}-${index}`} link={link} index={index} />
            ))}
          </section>

          {/* Footer */}
          <footer className="footer">
            <p>
              Powered by{' '}
              <a
                href="https://github.com/yourusername/self-host-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Self-Host-Link
              </a>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
