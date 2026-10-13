/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site statique : "npm run build" crée le dossier "out", hébergeable gratuitement
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
