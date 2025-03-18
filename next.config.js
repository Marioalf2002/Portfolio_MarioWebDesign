/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // Configuración para manejar correctamente los módulos de react-email
    config.externals = [...(config.externals || []), { canvas: "canvas" }];

    return config;
  },
};

module.exports = nextConfig;
