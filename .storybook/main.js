module.exports = {
  stories: [
    "../packages/components/src/**/*.stories.@(ts|tsx|mdx)",
    "../packages/layout/src/**/*.stories.@(ts|tsx|mdx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
