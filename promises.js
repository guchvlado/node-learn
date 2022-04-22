const fs = require('fs');

module.exports.writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, function (err) {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

module.exports.appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, data, function (err) {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

module.exports.readFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

module.exports.removeFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.rm(path, function (err) {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};
