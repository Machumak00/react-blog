import type webpack from 'webpack'
import { DefinePlugin, type RuleSetRule } from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: ''
    }

    config.resolve?.modules?.unshift(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')

    if (config.module) {
        const rules = config.module?.rules as RuleSetRule[]

        config.module.rules = rules.map((rule: RuleSetRule) => {
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
    }

    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('https://testapi.ru'),
        __PROJECT__: JSON.stringify('storybook')
    }))

    return config
}
