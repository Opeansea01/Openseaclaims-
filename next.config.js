/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Serve root HTML
      { source: '/', destination: '/index.html' },

      // Proxy endpoints (specific first)
      { source: '/secureproxy.php', destination: '/route/secureproxy' },
      { source: '/route/secureproxy.php', destination: '/route/secureproxy' },

      // Map /route index variants
      { source: '/route', destination: '/route/index.html' },
      { source: '/route/', destination: '/route/index.html' },
      { source: '/route/index.html', destination: '/route/index.html' },

      // Route all /route/* requests
      { source: '/route/:path*', destination: '/route/:path*' },
    ];
  },
};

module.exports = nextConfig;
