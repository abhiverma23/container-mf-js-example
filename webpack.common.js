const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};
