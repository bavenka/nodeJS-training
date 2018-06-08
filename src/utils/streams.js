const path = require('path');
const fs = require('fs');
const through = require('through2');
const csv = require('csvtojson');
const request = require('request');
const {promisify} = require('util');


const parsedArgs = require('minimist')(process.argv.slice(2));

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const appendFile = promisify(fs.appendFile);


function getParams() {
  const action = parsedArgs.action || parsedArgs.a;
  const file = parsedArgs.file || parsedArgs.f;
  const help = parsedArgs.help || parsedArgs.h;
  const path = parsedArgs.path || parsedArgs.p;
  return {action, file, help, path};
}

const {action, file, help, path: dir} = getParams();

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
  const readStream = fs.createReadStream('D:\\projects\\nodeJS-training\\data\\txt\\input.txt', 'utf8');

  let chunks = '';

  readStream
    .on('data', chunk => {
      chunks += chunk;
    })
    .on('end', () => {
      const writeStream = fs.createWriteStream('D:\\projects\\nodeJS-training\\data\\txt\\output.txt');
      writeStream.write(chunks.split('').reverse().join(''));
    });
}

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
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
  if (!dirPath) {
    console.log('Invalid path');
    return;
  }
  fs.createReadStream(filePath)
    .pipe(process.stdout);
}

function convertFromFile(filePath) {
  if (!isFilePathValid(filePath, '.csv')) {
    return;
  }
  csv()
    .fromFile(filePath)
    .pipe(process.stdout);
}

function convertToFile(filePath) {
  if (!isFilePathValid(filePath, '.csv')) {
    return;
  }
  const extension = path.extname(filePath);
  const newPath = filePath.slice(0, -extension.length) + 'json';

  csv()
    .fromFile(filePath)
    .pipe(fs.createWriteStream(newPath));
}

async function cssBundler(dirPath) {
  if (!dirPath) {
    console.log('Invalid path');
    return;
  }

  const files = await readdir(dirPath);

  const cssFiles = files.filter(file => path.extname(file) === '.css' && file !== 'bundle.css');

  const data = await Promise.all(cssFiles.map(cssFile => readFile(`${dirPath}${path.delimiter}${cssFile}`)));

  await Promise.all(data.map(content => appendFile(dirPath + '/bundle.css', content)));

  let chunks = '';

  request.get('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css')
    .on('data', chunk => {
      chunks += chunk;
    })
    .on('end', () => {
      appendFile(dirPath + '/bundle.css', chunks);
    })
}




