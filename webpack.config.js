const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    // Criando regras:
    module: {
        rules: [
            {
                test: /\.js$/, // Indica expressão regular (com . indica o qualquer caractere, já com \ indica o .)
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
              test: /.*\.(gif|png|jpe?g)$/i,
              use: {
                  loader: 'file-loader',
              }
            }
        ]
    }
}