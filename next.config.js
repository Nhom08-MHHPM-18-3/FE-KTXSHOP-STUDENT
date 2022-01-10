const withImages = require('next-images');

module.exports = withImages({
    webpack(config, options) {
        return config
    },
    env: {
        WEB_HOST: process.env.WEB_HOST,
        API_HOST: process.env.API_HOST
    },
});