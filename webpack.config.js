const fs = require("fs")
const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');

let entry = {}
let files = fs.readdirSync("./src")
for(let i = 0; i < files.length; i ++){
    if (fs.statSync(`./src/${files[i]}`).isDirectory()){
        entry[files[i]] = `./src/${files[i]}/index.js`
    }
}
entry["index"] = "./src/index.js"

const patchconfig = {
    entry: entry,
    output: {
        filename: '[name]/index.js',
        path: path.resolve(__dirname, 'dist')
    }
}

const plugins = {
    plugins: [
        new CleanWebpackPlugin(['dist'])
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