'use client';

import React from 'react';
import { Link } from '@/types/config';
import { getIcon, ExternalLinkIcon } from './Icons';

interface LinkCardProps {
  link: Link;
  index: number;
}

export function LinkCard({ link, index }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="link-card-content">
        <div className="link-card-icon">
          {React.createElement(getIcon(link.icon || 'link'), { size: 20 })}
        </div>
        <div className="link-card-text">
          <span className="link-card-title">{link.title}</span>
          {link.description && (
            <span className="link-card-description">{link.description}</span>
          )}
        </div>
        <div className="link-card-arrow">
          <ExternalLinkIcon size={16} />
        </div>
      </div>
    </a>
  );
}
