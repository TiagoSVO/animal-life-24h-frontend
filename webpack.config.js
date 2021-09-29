const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UgligyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: modoDev ? 'development' : 'production',
    resolve: {
      fallback: {
        "buffer": false
      }
    },
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000
    },
    optimization: {
        minimizer: [
            new UgligyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        // Run postcss actions
                        loader: 'postcss-loader',
                        options: {
                          // `postcssOptions` is needed for postcss 8.x;
                          // if you use postcss 7.x skip the key
                          postcssOptions: {
                            // postcss plugins, can be exported to postcss.config.js
                            plugins: function () {
                              return [
                                require('autoprefixer')
                              ];
                            }
                          }
                        }
                      },
                    'sass-loader'
                    
                ]
            },
            {
                test: /.js[x]?$/,
                exclude: '/node_modules/',
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]'
                }
            }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html',
          inject: 'body',
          minify: false
        }),
        new MiniCssExtractPlugin({
          filename: 'styles.css'
        })
      ]
}