/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Serve homepage without writing /index.html
      { source: '/', destination: '/index.html' },

      // PHP-style endpoints mapped to Next.js routes
      { source: '/secureproxy.php', destination: '/route/secureproxy' },
      { source: '/route/secureproxy.php', destination: '/route/secureproxy' },

      // Auto-load /route/index.html without writing the filename
      { source: '/route', destination: '/route/index.html' },
      { source: '/route/', destination: '/route/index.html' },

      // Auto-load HTML files inside /route without typing .html
      { source: '/route/:path*', destination: '/route/:path*.html' },
    ];
  },
};

module.exports = nextConfig;
