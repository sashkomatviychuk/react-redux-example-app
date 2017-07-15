const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * Webpack config
 */
const webpackConfig = {
    entry: [
        'webpack-hot-middleware/client',
        './src/index',
    ],
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js',
    },

    watch: NODE_ENV === 'development',

    devtool: NODE_ENV === 'development' ? 'cheap-module-eval-source-map' : undefined,

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: ['src', 'node_modules'],
    },

    module: {
        loaders: [
            {
                test: /\.(css|sass)$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                loader: [
                    'react-hot-loader',
                    'jsx-loader',
                    'babel-loader',
                ],
                include: path.join(__dirname, 'src'),
            },
            {
                test: /\.png$/, loader: 'url-loader?mimetype=image/png',
            },
            {
                test: /\.jpg$/, loader: 'url-loader?mimetype=image/jpg',
            },
            {
                test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml',
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/, loader: 'url-loader?limit=1',
            },
            {
                test: /\.json$/, loader: 'json-loader',
            },
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
};

module.exports = webpackConfig;
