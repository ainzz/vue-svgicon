const path = require('path')
const appEnv = process.env.APP_ENV

let libConfig = {
    outputDir: 'dist/components',
    configureWebpack: {
        output: {
            library: 'VueSvgIcon'
        }
    }
}

let demoConfig = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/vue-svgicon/' : '/',
    lintOnSave: undefined,
    outputDir: 'demo',
    configureWebpack: {
        resolve: {
            alias: {
                'vue-svgicon': path.resolve('src/components/SvgIcon.vue'),
                vue$: 'vue/dist/vue.common.js'
            }
        }
    },
    chainWebpack: config => {
        config
            .entry('app')
            .delete('./src/main.ts')
            .add('./src/main.tsx')
            .resolve.symlinks(false)
        config.entry('style').add('./src/style/app.scss')
    }
}

if (appEnv === 'lib') {
    module.exports = libConfig
} else {
    module.exports = demoConfig
}
