const fs = require('fs');

class Converter {
    #rulesPath = './rules.json'

    constructor() {
        let rulesJSON = fs.readFileSync(this.#rulesPath, 'utf8')
        this.rules = JSON.parse(rulesJSON)
    }

    Convert(from, to, val) {
        let result = null
        try {
            result = val * this.rules[from] / this.rules[to]
            result = Math.round(result * 100) / 100
        } catch (e) {
            console.log(e)
        }

        //console.log(`Value: ${val} ${from}, Result: ${result} ${to}`)
        return result
    }
}

module.exports = Converter