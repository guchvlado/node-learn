const http = require('http');
const fs = require('fs');
const path = require('path');
const {
  writeFileAsync,
  readFileAsync,
  appendFileAsync,
  removeFileAsync,
} = require('./promises');

//writeFileAsync(path.resolve(__dirname, 'text.txt'), '1232131');
// writeFileAsync(path.resolve(__dirname, 'text.txt'), 'some text')
//   .then(() =>
//     appendFileAsync(path.resolve(__dirname, 'text.txt'), 'another text')
//   )
//   .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//   .then((data) => console.log(data));

const text = process.env.TEXT || '';
const pathFile = path.resolve(__dirname, 'tmpText.txt');

writeFileAsync(pathFile, text)
  .then(() => readFileAsync(pathFile))
  .then((data) => data.split(' ').length)
  .then((count) => writeFileAsync('count.txt', `Кол-во слов: ${count}`))
  .then(() => removeFileAsync(pathFile));
