import { BuildOptions } from './types/config';
import { WebpackConfiguration } from 'webpack-cli';
import { buildPlugins } from './build-plugins';
import { buildLoaders } from './build-loaders';
import { buildResolvers } from './build-resolvers';
import { buildDevServer } from './build-dev-server';

export function buildWebpackConfig(
	options: BuildOptions,
): WebpackConfiguration {
	const { paths, mode, isDev } = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash:8].js',
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}
