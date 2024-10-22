/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mov)$/,
      type: "asset/resource", // Allows Webpack to handle these as assets
      generator: {
        filename: "static/media/[name].[hash][ext]", // Customize output path
      },
    });

    return config;
  },
};

export default nextConfig;
