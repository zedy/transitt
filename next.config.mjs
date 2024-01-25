/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'fr', 'de'],
    defaultLocale: 'en-US',    
  },
};

export default nextConfig;