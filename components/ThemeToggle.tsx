'use client';

import { useTheme } from './ThemeProvider';
import { SunIcon, MoonIcon, MonitorIcon } from './Icons';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light' as const, icon: SunIcon, label: 'Light' },
    { value: 'dark' as const, icon: MoonIcon, label: 'Dark' },
    { value: 'system' as const, icon: MonitorIcon, label: 'System' },
  ];

  return (
    <div className="theme-toggle-container">
      <div className="theme-toggle">
        {themes.map(({ value, icon: Icon, label }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`theme-toggle-btn ${theme === value ? 'active' : ''}`}
            aria-label={`Switch to ${label} theme`}
            title={label}
          >
            <Icon size={16} />
          </button>
        ))}
      </div>
    </div>
  );
}
