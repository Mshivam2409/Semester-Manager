const merge = require("webpack-merge");

const Json5LoaderConfiguration = {
  test: /\.json5$/i,
  use: {
    loader: "json5-loader",
  },
  type: "javascript/auto",
};

const SVGLoaderConfiguration = {
  test: /\.svg/,
  use: {
    loader: "svg-url-loader",
    options: {},
  },
};

const createExpoWebpackConfig = require("@expo/webpack-config");
module.exports = function (env, argv) {
  env.mode = "development";
  return merge(createExpoWebpackConfig(env, argv), {
    module: {
      rules: [Json5LoaderConfiguration, SVGLoaderConfiguration],
    },
  });
};
