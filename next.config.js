/* eslint-disable @typescript-eslint/no-var-requires */
const withLinaria = require("next-linaria");

module.exports = withLinaria({
  future: {
    webpack5: true,
  },
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
});
