const path = require("path");

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias["src"] = path.resolve(__dirname, "../src/");
    return config;
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
};
