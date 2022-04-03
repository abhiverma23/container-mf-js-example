const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new ModuleFederationPlugin({
      name: 'root-container',
      remotes: {
        ic01: 'innercontainer01@https://project.vabhishek.com/micro-frontend/js/ic01/remoteEntry.js',
        ic02: 'innercontainer02@https://project.vabhishek.com/micro-frontend/js/ic02/remoteEntry.js',
      },
    }),
  ],
});
