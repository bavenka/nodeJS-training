const path = require('path');
const fs = require('fs');
const through = require('through2');
const csv = require('csvtojson');
const request = require('request');
const { promisify } = require('util');


const parsedArgs = require('minimist')(process.argv.slice(2));

const readdir = promisify(fs.readdir);
process.stdin.setEncoding('utf8');

function getParams() {
    const action = parsedArgs.action || parsedArgs.a;
    const file = parsedArgs.file || parsedArgs.f;
    const help = parsedArgs.help || parsedArgs.h;
    const path = parsedArgs.path || parsedArgs.p;
    return { action, file, help, path };
}

const { action, file, help, path: dir } = getParams();

if (Object.keys(parsedArgs)[1] === 'help' || !action) {
    printHelpMessage();
    process.exit();
}

switch (action) {
    case 'reverse':
        reverse();
        break;
    case 'transform':
        transform();
        break;
    case 'outputFile':
        outputFile(file);
        break;
    case 'convertFromFile':
        convertFromFile(file);
        break;
    case 'convertToFile':
        convertToFile(file);
        break;
    case 'cssBundler':
        cssBundler(dir);
        break;
    default:
        console.log(`Unknown action: ${action}`)
}

function reverse() {
    process.stdout.write('Input text to reverse: ' + '\n');
    process.stdin.on('readable', () => {
        const chunk = process.stdin.read();
        if (chunk !== null) {
            process.stdout.write(`data: ${chunk.split('').reverse().join('')} \n`);
        }
    });

    process.stdin.on('end', () => {
        process.stdout.write('end');
    });
}

function write (buffer, encoding, next) {
    this.push('Transformed data: ' + buffer.toString().toUpperCase() + '\n');
    next();
}

function end (done) {
    done();
}

function transform() {
    process.stdout.write('Input text to transform: ');
    process.stdin
        .pipe(through(write, end))
        .pipe(process.stdout);
}

function printHelpMessage() {
    console.log('Usage: node streams.js --action=<action> | -a <action> --file=<file> | -f <file>');
}

function isFilePathValid(filePath, fileExtension) {
    if (!filePath) {
        console.log('Invalid path');
        return false;
    }
    const extension = path.extname(filePath);
    if (extension !== fileExtension) {
        console.log(`Invalid file extension. Use ${fileExtension} extension`);
    }
    return true;
}

function outputFile(filePath) {
    if(!dirPath) {
        console.log('Invalid path');
        return;
    }
    fs.createReadStream(filePath)
        .pipe(process.stdout);
}

function convertFromFile(filePath){
    if(!isFilePathValid(filePath, '.csv')) {
        return;
    }
    csv()
        .fromFile(filePath)
        .pipe(process.stdout);
}

function convertToFile(filePath){
    if(!isFilePathValid(filePath, '.csv')) {
        return;
    }
    const extension = path.extname(filePath);
    const newPath = filePath.slice(0, - extension.length) + 'json';

    csv()
        .fromFile(filePath)
        .pipe(fs.createWriteStream(newPath));
}

function cssBundler(dirPath) {
    if(!dirPath) {
        console.log('Invalid path');
        return;
    }
    readdir(dirPath)
        .then((files) => {
            const writeStream = fs.createWriteStream(dirPath + '/bundle.css');
            const cssFiles = files.filter(file => path.extname(file) === '.css' && file !== 'bundle.css');

            cssFiles.forEach((file) => {
                fs.createReadStream(`${dirPath}\\${file}`)
                  .on('data', (chunk) => writeStream.write(chunk))
                  .on('error', (error) => console.log(error))
            });

          request.get('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css')
            .on('data', (chunk) => writeStream.write(chunk))
            .on('error', (error) => console.log(error))
        })
      .catch(e => console.log(e));
}
