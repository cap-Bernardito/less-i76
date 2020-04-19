const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './app/app.js',
    devtool: 'sourcemap',
    mode: 'development',
    output: {
        filename: 'test.js',
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        },
                    },
                ],
            },
            { test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/, loader: 'file-loader?name=app/generated/[name].[ext]' },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./css/style.css"
        })
    ]
}