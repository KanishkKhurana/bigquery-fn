const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "none",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    iife: false, 
  },
  resolve:{
    fallback:{
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "url": require.resolve("url/"),
      "querystring": require.resolve("querystring-es3"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify"),
      "assert": require.resolve("assert/"),
      "vm": require.resolve("vm-browserify")



    }
  }
};
