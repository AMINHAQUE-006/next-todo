// src/lib/emotion-cache.ts
// MUI uses Emotion for styling. For Next.js SSR (Server Side Rendering),
// we need to set up a custom cache to avoid style flickering on page load.
// This is a standard MUI + Next.js SSR setup requirement.

'use client';

import createCache from '@emotion/cache';

export function createEmotionCache() {
  return createCache({ key: 'mui' });
}
