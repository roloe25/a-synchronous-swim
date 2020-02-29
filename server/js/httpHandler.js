const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {

  if (req.method === "OPTIONS")  {
    res.writeHead(200, headers);
    res.end();
    next();
  }

  if (req.method === "GET") {
    const commands = ['left', 'right', 'up', 'down']
    console.log('Serving request type ' + req.method + ' for url ' + req.url);
    var index = Math.floor(Math.random() * commands.length)
    res.end(commands[index]);
    next();
  }

};
