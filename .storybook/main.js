module.exports = {
  stories: [
    "../docs/**/*.stories.mdx",
    "../packages/components/src/**/*.stories.@(ts|tsx|mdx)",
    "../packages/forms/src/**/*.stories.@(ts|tsx|mdx)",
    "../packages/layout/src/**/*.stories.@(ts|tsx|mdx)",
    "../packages/s2/src/**/*.stories.@(ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        transcludeMarkdown: true,
      },
    },
    "@storybook/addon-controls",
  ],
  babel: async (options) => {
    options.presets.splice(2,1, [
      "@babel/preset-react",
      {
        "runtime": "classic" // defaults to classic
      }
    ])
    console.log(options.presets)
    console.log("---------------")
    console.log(options.plugins)
    options.plugins.push([
      "@babel/plugin-transform-react-jsx",
      {
        "runtime": "classic" // defaults to classic
      }
    ])
    return options;
  },
};


