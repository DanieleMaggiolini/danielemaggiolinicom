/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Non bloccare la build di produzione per warning di lint.
    // Il lint resta attivo in sviluppo (npm run dev / npm run lint).
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.higgsfield.ai",
      },
      {
        protocol: "https",
        hostname: "upload.higgsfield.ai",
      },
      {
        protocol: "https",
        hostname: "d8j0ntlcm91z4.cloudfront.net",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
