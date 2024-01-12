const path = require('path');
const {
    VueLoaderPlugin
} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[contenthash].js',
        clean: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 1001,
      },
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: 'tsconfig.json',
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        ts: 'ts-loader'
                    },
                    esModule: true
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        }),
        new VueLoaderPlugin(),
        new Dotenv({
            path: './.env.development'
        })
    ]
};