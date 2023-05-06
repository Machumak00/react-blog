import path from 'path';

import type webpack from 'webpack';
import { DefinePlugin, type RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { type BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };

    if (config.resolve) {
        config.resolve.modules?.unshift(paths.src);
        config.resolve.extensions?.push('.ts', '.tsx');
        config.resolve.alias = {
            '@': path.resolve(__dirname, '..', '..', 'src'),
        };
    }

    if (config.module) {
        const rules = config.module?.rules as RuleSetRule[];

        config.module.rules = rules.map((rule: RuleSetRule) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            if (/svg/.test(rule.test)) {
                return { ...rule, exclude: /\.svg/i };
            }

            return rule;
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        config.module.rules.push(buildCssLoader(true));
    }

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
