const { rmSync } = require('fs')
const { join } = require('path')
const cacheDir = join(__dirname, '..', '..', 'node_modules', '.cache')
rmSync(cacheDir, {
    recursive: true,
    force: true
})
