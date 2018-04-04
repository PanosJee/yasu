var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, 'dst');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/index.jsx',
    mode: 'development',
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
        contentBase: path.resolve(__dirname, '.'),
        hot: true
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
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: {
                    loader: 'url-loader'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;