const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('core', resolve('src/modules/core'))
            .set('home', resolve('src/modules/home'))
            .set('shared', resolve('src/modules/shared'))
            .set('subreddit', resolve('src/modules/subreddit'))
    },
}
