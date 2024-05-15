import withPWA from 'nextjs-pwa';

const nextConfig = {
  images: {
    domains: ["localhost", "rickandmortyapi.com"],
  },
  // Add this section to enable Tailwind CSS
  css: {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: ['tailwindcss'],
      },
    },
  },
};

export default withPWA({
  dest: "public",
  cacheOnFrontendNav: true,
  aggressiveFrontendNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disabled: false,
  workboxOptions: {
    disableDevLogs: true,
  },
})(nextConfig);