require('dotenv').config({ silent: true });

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    modify(config, { target, dev }, webpack) {
        const appConfig = config; // stay immutable here

        appConfig.plugins.push(
            new MiniCssExtractPlugin({
                filename: devMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            })
        );

        appConfig.module.rules.push({
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ]
        });

        return appConfig;
    }
}
