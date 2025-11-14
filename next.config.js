/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return {
      beforeFiles: [
        // --- Proxy Endpoints ---
        {
          source: "/secureproxy.php",
          destination: "/route/secureproxy",
        },
        {
          source: "/route/secureproxy.php",
          destination: "/route/secureproxy",
        },

        // --- Homepage Mapping (hide index.html) ---
        {
          source: "/",
          destination: "/index.html",
        },

        // --- Normalize various /route index versions ---
        {
          source: "/route",
          destination: "/index.html",
        },
        {
          source: "/route/",
          destination: "/index.html",
        },
        {
          source: "/route/index.html",
          destination: "/index.html",
        },

        // --- Redirect all /route/* paths to root equivalents ---
        {
          source: "/route/:path*",
          destination: "/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
