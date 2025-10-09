/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Configuración de calidades permitidas para optimización de imágenes
    // Esto es requerido en Next.js 16+ para quality values específicos
    qualities: [75, 100],
    formats: ["image/webp", "image/avif"],
  },
  // Optimización para producción
  compress: true,
  // Mejorar el chunking para evitar errores de carga
  webpack: (config, { isServer, dev }) => {
    // Configuración para manejar correctamente los módulos de react-email
    config.externals = [...(config.externals || []), { canvas: "canvas" }];

    // Optimización de chunks para evitar timeouts en desarrollo
    if (!isServer && !dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            default: false,
            vendors: false,
            // Chunk de vendor para librerías grandes
            framework: {
              chunks: "all",
              name: "framework",
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true,
            },
            lib: {
              test(module) {
                return (
                  module.size() > 160000 &&
                  /node_modules[/\\]/.test(module.identifier())
                );
              },
              name(module) {
                const hash = require("crypto").createHash("sha1");
                hash.update(module.identifier());
                return hash.digest("hex").substring(0, 8);
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
            commons: {
              name: "commons",
              minChunks: 2,
              priority: 20,
            },
          },
        },
      };
    }

    return config;
  },
};

module.exports = nextConfig;
