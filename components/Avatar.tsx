'use client';

import Image from 'next/image';
import { useState } from 'react';

interface AvatarProps {
  src?: string;
  alt: string;
  size?: number;
}

export function Avatar({ src, alt, size = 120 }: AvatarProps) {
  const [error, setError] = useState(false);

  // Generate initials from name
  const initials = alt
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  if (!src || error) {
    return (
      <div
        className="avatar avatar-fallback"
        style={{ width: size, height: size }}
      >
        <span className="avatar-initials">{initials}</span>
      </div>
    );
  }

  return (
    <div className="avatar" style={{ width: size, height: size }}>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="avatar-image"
        onError={() => setError(true)}
        priority
      />
    </div>
  );
}
