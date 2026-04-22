const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    devMiddleware: {
      publicPath: "http://localhost:3001/",
    },
  },

  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = "auto";
      webpackConfig.output.uniqueName = "common";

      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "common",
          filename: "remoteEntry.js",
          exposes: {
            "./Button": "./src/Components/Button",
            "./Card": "./src/Components/Card",
          },
          shared: {
            react: { singleton: true },
            "react-dom": { singleton: true },
          },
        })
      );

      return webpackConfig;
    },
  },
};