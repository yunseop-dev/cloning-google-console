const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devtool: 'inline-source-map',
    entry: './src/index.tsx',
    module: {
        rules: [{
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
            {
                test: /\.tsx?/,
                exclude: /node_modules/,
                use: ['ts-loader'],

            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                    },
                }, ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',

        }),
    ],
    output: {
        filename: 'bundle.[hash].js',
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
};