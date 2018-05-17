const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const patchconfig = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'lib'),
        libraryTarget: 'umd',
        globalObject: 'this'
    }
}

const plugins = {
    plugins: [
        new CleanWebpackPlugin(['lib'])
    ],
}

const modules = {
    module: {
        rules: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
          { test: /\.css$/, exclude: /node_modules/, use: ["style-loader", "css-loader"] }
        ]
    }
}


const config = {
    ...patchconfig,
    ...plugins,
    ...modules
}

module.exports = config;