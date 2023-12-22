class logcolor_kpzzy {
    red (text) {
        const redText = '\x1b[31m%s\x1b[0m';

        const textFormatter = JSON.stringify(text, null, 2);

        for(let line of textFormatter.split('\n')){
            console.log(redText, line)
        }
    }

    green (text) {
        const greenText = '\x1b[32m%s\x1b[0m';

        const textFormatter = JSON.stringify(text, null, 2);

        for(let line of textFormatter.split('\n')){
            console.log(greenText, line)
        }
    }

    yellow (text) {
        const yellowText = '\x1b[33m%s\x1b[0m';

        const textFormatter = JSON.stringify(text, null, 2);

        for(let line of textFormatter.split('\n')){
            console.log(yellowText, line)
        }
    }

    blue (text) {
        const blueText = '\x1b[34m%s\x1b[0m';

        const textFormatter = JSON.stringify(text, null, 2);

        for(let line of textFormatter.split('\n')){
            console.log(blueText, line)
        }
    }

    magenta (text) {
        const magentaText = '\x1b[35m%s\x1b[0m';

        const textFormatter = JSON.stringify(text, null, 2);

        for(let line of textFormatter.split('\n')){
            console.log(magentaText, line)
        }
    }

    cyan (text) {
        const cyanText = '\x1b[36m%s\x1b[0m';

        const textFormatter = JSON.stringify(text, null, 2);

        for(let line of textFormatter.split('\n')){
            console.log(cyanText, line)
        }
    }
}

module.exports = logcolor_kpzzy