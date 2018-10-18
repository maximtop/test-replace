const data = 'data.json';
const secondData = 'data.json';

const updateData = async() => {
  const response = await fetch(data);
  console.log(response.json());

  const response2 = await fetch(secondData);
  console.log(response2.json());
};

updateData();


// const dataElement = document.querySelector('#dataName');
// const secondDataElement = document.querySelector('#secondDataName');
//
// dataElement.textContent = JSON.stringify(data);
// secondDataElement.textContent = JSON.stringify(secondData);
