import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders (options: BuildOptions): RuleSetRule[] {
    const { isDev } = options

    const codeBabelLoader = buildBabelLoader({ isTsx: false })
    const tsxCodeBabelLoader = buildBabelLoader({ isTsx: true })

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
