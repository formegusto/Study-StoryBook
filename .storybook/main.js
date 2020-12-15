module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
    "@storybook/addon-docs"
  ],
  "use": [
    {
      "loader": require.resolve('babel-loader'),
      "options": {
        "presets": [['react-app', { flow: false, typescript: true }]]
      }
    }
  ]
}