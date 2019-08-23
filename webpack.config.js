const path = require('path');

/**
 * @type import('webpack').Configuration
 */
const config1 = {
  mode: 'production',
  entry: path.join(__dirname, 'index.ts'),
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' } 
    ]
  },
  output: { filename: 'bundle.es2015.js' }
};

/**
 * @type import('webpack').Configuration
 */
const config2 = {
  mode: 'production',
  entry: path.join(__dirname, 'index.ts'),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
           loader: 'ts-loader',
           options: {
             compilerOptions: {
               module: 'commonjs'
              }
            }
        },
      } 
    ]
  },
  output: { filename: 'bundle.commonjs.js' }
};

module.exports = [config1, config2];
