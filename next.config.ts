import withPWA from 'next-pwa';

const isDev = process.env.NODE_ENV !== 'production';

export default withPWA({
  dest: 'public',
  disable: isDev,
  register: true,
  skipWaiting: true,
})({
  experimental: { optimizePackageImports: ['framer-motion', 'zustand'] },
  images: { formats: ['image/avif', 'image/webp'] }
});
