const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, './dist');

const webpackConfig = {
	entry: {
		app: [
			path.resolve(__dirname, './src/index.js')
		]
	},
	output: {
		path: outputPath,
		filename: '[name].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: 'pre',
				use: 'eslint-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							babelrc: true,
							cacheDirectory: true
						}
					}
				]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							data: '@import "index.scss";',
							includePaths: [__dirname, './public/styles']
						}
					}
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				exclude: /node_modules/,
				loader: 'file-loader?name=fonts/[name].[ext]'
			},
			{
				test: /\.(jpg|png|ico|gif)$/,
				exclude: /node_modules/,
				loader: 'file-loader?name=images/[name].[ext]'
			}
		]
	}, 
	plugins: [ 
		new HtmlWebpackPlugin({
			favicon: './public/images/react.png',
			template: path.join(__dirname, './public/index.html'),
			filename: 'index.html',
			path: outputPath
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()	
	],
	devServer: {
		contentBase: outputPath,
		port: 8080,
		historyApiFallback: true,
		inline: true,
		hot: true,
		host: 'localhost'
	}
}

module.exports = webpackConfig;