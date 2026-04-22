const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = "auto";
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "host",
          
          
          remotes: {
            common: "common@https://remotemf.netlify.app/remoteEntry.js",
          },
          shared: {
            react: { singleton: true },
            "react-dom": { singleton: true },
          },
        }),
      );
      return webpackConfig;
    },
  },
};
