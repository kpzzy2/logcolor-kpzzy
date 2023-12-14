class logcolor_kpzzy {
    red (text) {
        console.log('\x1b[31m%s\x1b[0m', text)
    }

    green (text) {
        console.log('\x1b[32m%s\x1b[0m', text)
    }

    yellow (text) {
        console.log('\x1b[33m%s\x1b[0m', text)
    }

    blue (text) {
        console.log('\x1b[34m%s\x1b[0m', text)
    }

    magenta (text) {
        console.log('\x1b[35m%s\x1b[0m', text)
    }

    cyan (text) {
        console.log('\x1b[36m%s\x1b[0m', text)
    }
}

module.exports = logcolor_kpzzy