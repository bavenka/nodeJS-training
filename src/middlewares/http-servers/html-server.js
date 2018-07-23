const http = require('http');
const fs = require('fs');
const through = require('through2');

function write(buffer, encoding, next) {
  this.push(buffer.toString().replace('{message}', 'Hello World'));
  next();
}

function end(done) {
  done();
}

http.createServer()
  .on('request', (req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    fs.createReadStream('../../../data/index.html')
      .pipe(through(write, end))
      .pipe(res);
  })
  .listen(3000);
