#!/usr/bin/node
const http = require('http'),
      fs   = require('fs'),
      log  = console.log;


http.createServer((req,res)=>{
  if(req.url === '/favicon.ico') return;

  var fileName = __dirname + req.url;
  log(fileName);
  res.end(fs.readFileSync(fileName));
  /*res.end(fs.readFileSync(fileName).toString('utf8'));*/
}).listen(8080);
log(process.pid);
