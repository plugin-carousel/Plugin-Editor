const webpack = require('webpack');
const command = process.argv[process.argv.length - 1];
module.exports = {
    output: {
        publicPath: command === 'build' ? '/Plugin-Editor/' : '/',
    },
    plugins: [
        new webpack.DefinePlugin({
            BASENAME: command === 'build' ? '/Plugin-Editor/' : '/',
        }),
    ],
};
