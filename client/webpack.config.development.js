var webpack = require("webpack");
var path = require("path");

var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

var config = {
    devtool: "inline-source-map",
    entry: [
        'webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr',
        "./app/index"
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: 'http://localhost:9000/dist/',
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ["node_modules", "src"],
        extensions: ["", ".js"]
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./app/components/**/*.scss")]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
