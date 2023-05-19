import { BuildOptions } from './types/config';
import { WebpackConfiguration } from 'webpack-cli';
import path from 'path';
import { buildPlugins } from './build-plugins';
import { buildLoaders } from './build-loaders';
import { buildResolvers } from './build-resolvers';

export function buildWebpackConfig(options: BuildOptions): WebpackConfiguration {
	const { paths, mode } = options;

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
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
	};
}
