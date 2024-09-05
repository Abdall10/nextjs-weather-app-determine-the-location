/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'openweathermap.org',
          pathname: '/img/wn/**', // Allow all paths under /img/wn/
        },
      ],
    },
  };
  
  export default nextConfig;
  