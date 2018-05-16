const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const patchconfig = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'out')
    }
}

const plugins = {
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Hello World!'
        })
    ],
}

const modules = {
    module: {
        rules: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}


const config = {
    ...patchconfig,
    ...plugins,
    ...modules
}

module.exports = config;