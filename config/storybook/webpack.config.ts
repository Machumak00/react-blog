import type webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { DefinePlugin, type RuleSetRule } from 'webpack'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve.modules.unshift(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if (/svg/.test(rule.test)) {
            return { ...rule, exclude: /\.svg/i }
        }

        return rule
    })

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })
    config.module.rules.push(buildCssLoader(true))

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true
    }))

    return config
}
