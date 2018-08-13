const path = require('path');

module.exports = {
    modify(config, { target, dev }, webpack) {
        const appConfig = config; // stay immutable here
        
        appConfig.module.rules.push({
            test: /\.html$/,
            loader: 'handlebars-template-loader',
            options: {
                includePaths: [path.resolve(__dirname, '../node_modules')]
            }
        });

        appConfig.node = {
            fs: 'empty'
        };

        return appConfig;
    }
}
