const { resolve } = require('path')

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('about', resolve(__dirname, 'src/modules/about'))
            .set('core', resolve(__dirname, 'src/modules/core'))
            .set('home', resolve(__dirname, 'src/modules/home'))
            .set('shared', resolve(__dirname, 'src/modules/shared'))
    },
}
