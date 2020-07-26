const Router = require('express').Router;
const routes = new Router();
const fs = require('fs');
const path = require('path');
const controllerPath = process.cwd() + '/handlers/controllers/';
module.exports = (config, logger) => {
  function parseDirectories(folderName) {
    fs.readdirSync(folderName).forEach(function (file) {
      const fullName = path.join(folderName, file);
      const stat = fs.lstatSync(fullName);
      if (stat.isDirectory()) {
        parseDirectories(fullName);
      } else if (path.extname(file) === '.js') {
        let dirs = (fullName.split('.')[0]).split(path.sep);
        if (file === 'index.js') {
          dirs = folderName.split(path.sep);
        }
        dirs = dirs.splice(dirs.indexOf('controllers') + 1, dirs.length);
        const controller = require(fullName);
        console.log('registering routes', '/' + dirs.join('/').toLowerCase());
        routes.all('/' + dirs.join('/').toLowerCase(), (req, res) => {
          new controller(config, req, res, logger).procees_request();
        });
      }
    });
  }
  parseDirectories(controllerPath);
  return routes;
};