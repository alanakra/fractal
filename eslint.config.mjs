import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';

const config = [
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
            ecmaVersion: 2018,
            sourceType: 'module',
            globals: {
                browser: true,
                node: true,
                es6: true,
                jest: true,
            },
        },
        plugins: {
            import: importPlugin,
            prettier: prettierPlugin,
            react: reactPlugin,
        },
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx'],
                    moduleDirectory: ['node_modules', 'core', 'fractal', 'handlebars', 'mandelbrot', 'nunjucks', 'react', 'twig', 'web'],
                },
            },
        },
        rules: {
            ...eslintConfigPrettier.rules,
            ...importPlugin.configs.recommended.rules,
            'import/no-unresolved': [
                'error',
                {
                    commonjs: true,
                },
            ],
            'import/no-extraneous-dependencies': 'error',
        },
    },
    {
        files: ['*.spec.js'],
        languageOptions: {
            globals: {
                jest: true,
            },
        },
    },
    {
        files: ['**/*.jsx'],
        settings: {
            react: {
                version: 'detect',
            },
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
        },
    },
];

export default config;
