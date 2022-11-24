const fs = require('fs');
const Converter = require('./Converter');

let converter = new Converter()

let inputFolder = './input'
let outputFolder = './output'

let inputFiles = fs.readdirSync(inputFolder)

for (let file of inputFiles) {
    try {
        let data = fs.readFileSync(`${inputFolder}/${file}`, 'utf8')
        let input = JSON.parse(data)

        let from = input['distance']['unit']
        let val = input['distance']['value']
        let to = input['convert_to']

        let res = converter.Convert(from, to, val)
        if (res) {
            let outputObj = {unit: to, value: res}
            let output = JSON.stringify(outputObj, null, 2);
            fs.writeFileSync(`${outputFolder}/${file}`, output, 'utf8')
        }
    } catch (e) {
        console.log(e)
    }
}