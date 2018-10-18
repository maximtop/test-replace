const dataUrl = 'src/data.json';
const secondDataUrl= 'src/second-data.json';

const dataElement = document.querySelector('#dataName');
const secondDataElement = document.querySelector('#secondDataName');

const updateData = async() => {
  const data = await fetch(dataUrl).then(response => response.json());

  const secondData = await fetch(secondDataUrl).then(response => response.json());

  dataElement.textContent = JSON.stringify(data);
  secondDataElement.textContent = JSON.stringify(secondData);
};

updateData();



