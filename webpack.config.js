var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, 'dst');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    externals: {
        'Config': JSON.stringify(require('./config.json'))
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        inline: false,
        contentBase: "./dst",
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            { test: /\.css$/, use: ExtractTextPlugin.extract({ use: 'css-loader?minimize' }) },
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.js?/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};

module.exports = config;