const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
		index: "./src/index.js"
	},
	mode: "development",
  output: {
		filename: "js/[name].js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/"
	},
  devServer: {
    contentBase: path.join(__dirname, "/"),
    compress: true,
		port: 8082,
		watchContentBase: true,
    stats: {
      children: false, // Hide children information
      maxModules: 0 // Set the maximum number of modules to be shown
    }
  },
  module: {
    rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: './index.html'
		})
  ]
};
