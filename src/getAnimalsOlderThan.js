const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animals = data.species.filter((e) => e.name === animal);
  return animals[0].residents.every((e) => e.age > age);
};

module.exports = getAnimalsOlderThan;
