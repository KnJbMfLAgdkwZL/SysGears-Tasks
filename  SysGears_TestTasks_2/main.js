const fs = require('fs');

const DataFilter = require('./DataFilter');
let dataFilter = new DataFilter()

let inputFolder = './input'
let outputFolder = './output'

let inputFiles = fs.readdirSync(inputFolder)

for (let file of inputFiles) {
    try {
        let filePath = `${inputFolder}/${file}`
        if (!fs.lstatSync(filePath).isFile()) {
            continue
        }

        let dataIn = fs.readFileSync(filePath, 'utf8')
        let objIn = JSON.parse(dataIn)

        let objOut = dataFilter.filter(objIn.data, objIn.condition)
        let dataOut = JSON.stringify(objOut, null, 2);


        fs.writeFileSync(`${outputFolder}/${file}`, dataOut, 'utf8')
    } catch (e) {
        console.log(e)
    }
}