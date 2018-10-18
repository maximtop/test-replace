const data = reqiure('./data.json');
const secondData = require('./second-data.json');

const dataElement = document.querySelector('#dataName');
const secondDataElement = document.querySelector('#secondDataName');

dataElement.textContent = data;
secondDataElement.textContent = secondData;