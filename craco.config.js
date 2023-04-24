const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve('./src'),
            '@components': resolvePath('./src/components'),
            '@assets': resolvePath('./src/assets'),
        }
    },
}