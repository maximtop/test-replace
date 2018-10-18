import data from './data.json';

import secondData from './second-data.json';

const dataElement = document.querySelector('#dataName');
const secondDataElement = document.querySelector('#secondDataName');

dataElement.textContent = JSON.stringify(data);
secondDataElement.textContent = JSON.stringify(secondData);
