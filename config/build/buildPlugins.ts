import HtmlWebpackPlugin from 'html-webpack-plugin'
import { DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, type WebpackPluginInstance } from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new HotModuleReplacementPlugin(),
        new ReactRefreshPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    ]
}
