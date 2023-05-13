const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids) {
    const emptyArr = [];
    return emptyArr;
  } if (ids) {
    const singleId = data.species.filter((animal) => ids.includes(animal.id));
    return singleId;
  }
};
getSpeciesByIds('ef3778eb-2844-4c7c-b66c-f432073e1c6b');

module.exports = getSpeciesByIds;
