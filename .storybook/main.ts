import type { StorybookConfig } from '@storybook/react-webpack5';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-webpack5-compiler-swc', '@storybook/addon-docs', '@storybook/addon-onboarding'],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    webpackFinal: async (config) => {
        // 기존 플러그인 배열에 Vanilla Extract 플러그인 추가
        if (config.plugins) {
            config.plugins.push(new VanillaExtractPlugin());
        } else {
            config.plugins = [new VanillaExtractPlugin()];
        }
        return config;
    },
};
export default config;
