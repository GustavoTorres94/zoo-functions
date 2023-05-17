const data = require('../data/zoo_data');

const { species, employees } = data;

const paramName = (eN) => {
  const findName = employees.filter((e) => e.firstName === eN.name || e.lastName === eN.name)[0];
  return {
    id: findName.id,
    fullName: `${findName.firstName} ${findName.lastName}`,
    species: findName.responsibleFor,
    locations: '',
  };
};
paramName({ name: 'Sharonda' });

const getSpecies = (animalId) => {
  const arr = [];
  const animal = species.find((e) => e.id === animalId).location;
  console.log(animal);
  return console.log(arr.push(animal));
};
getSpecies('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae');

const getEmployeesCoverage = () => 'as ';

module.exports = getEmployeesCoverage;

// { name: 'Sharonda' };
