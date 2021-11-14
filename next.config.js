/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['fi-FI', 'en-US'],
    defaultLocale: 'fi-FI',
  },
  images: {
      domains: ["images.ctfassets.net"],
  },
}
