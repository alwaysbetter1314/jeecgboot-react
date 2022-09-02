// craco.config.js ： 配置webpack相关的东西
const path = require('path')
const  resolve = (dir) => path.join(__dirname, dir);
const cracoLessPlugin = require('craco-less')
const { loaderByName } = require('@craco/craco')

module.exports = {
    webpack: {
        // 项目目录别名
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            "@view": resolve('src/views'),
            "@assets": resolve('src/assets'),
        },
        configure: (webpackConfig, { env, paths }) => {
            // paths.appPath='public'
            paths.appBuild = 'dist'
            webpackConfig.output = {
                ...webpackConfig.output,
                path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
                publicPath: './'  // 修改publicPath
            }
            return webpackConfig
        }
    },
    plugins: [
        // 配置less相关
        {
            plugin: cracoLessPlugin,
            options: {
                // 配置ant design主题色
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#479eff'
                        },
                        javascriptEnabled: true
                    }
                },
                modifyLessModuleRule(lessModuleRule, context) {
                    // Configure the file suffix
                    lessModuleRule.test = /\.module.less$/

                    // Configure the generated local ident name.
                    const cssLoader = lessModuleRule.use.find(loaderByName('css-loader'))
                    cssLoader.options.modules = {
                        localIdentName: '[local]_[hash:base64:5]',
                    }
                    return lessModuleRule
                },
                modifyLessRule(lessRule, context) {
                    // You have to exclude these file suffixes first,if you want to modify the less module's suffix
                    lessRule.exclude = /\.less$/;
                    return lessRule;
                },
            },
        },
    ]
}
