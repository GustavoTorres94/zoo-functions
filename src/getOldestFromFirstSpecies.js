const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const { species } = data;
  const employeeRespons = data.employees.find((e) => e.id === id).responsibleFor
    .find((e) => e.responsibleFor === species.id);
  const finder = species.find((e) => e.id === employeeRespons).residents;
  const maior = finder.reduce((acc, curr) => {
    if (curr.age > acc.age) {
      return curr;
    }
    return acc;
  });
  return Object.values(maior);
};
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

module.exports = getOldestFromFirstSpecies;
