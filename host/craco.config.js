const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = "auto";
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "host",
          
          
          remotes: {
            common: "common@http://localhost:3001/remoteEntry.js",
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
