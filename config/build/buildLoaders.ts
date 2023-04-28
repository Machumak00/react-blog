import { type RuleSetRule } from 'webpack'

import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildCssLoader } from './loaders/buildCssLoader'
import { type BuildOptions } from './types/config'

export function buildLoaders (options: BuildOptions): RuleSetRule[] {
    const { isDev } = options

    const codeBabelLoader = buildBabelLoader({
        isTsx: false,
        isDev
    })
    const tsxCodeBabelLoader = buildBabelLoader({
        isTsx: true,
        isDev
    })

    const cssLoader = buildCssLoader(isDev)

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    return [
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoader,
        svgLoader,
        fileLoader
    ]
}
