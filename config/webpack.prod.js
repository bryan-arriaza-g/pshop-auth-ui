/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const PORT = 5000;

const prodConfig = {
  mode: 'production',
  output: {
    filename: 'static/js/[name].[contenthash].js',
    publicPath: `http://localhost:${PORT}/`,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'authRemoteEntry.js',
      exposes: {
        './AuthApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new webpack.EnvironmentPlugin({
      AUTH_API: process.env.AUTH_API || 'http://localhost:5001',
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
