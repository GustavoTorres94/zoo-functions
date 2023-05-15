const { species } = require('../data/zoo_data');

const verifySex = (animal) => {
  const bicho = species.find((e) => e.name === animal.species);
  const macho = bicho.residents.filter((e) => e.sex === 'male');
  const femea = bicho.residents.filter((e) => e.sex === 'female');
  return animal.sex === macho ? macho.length : femea.length;
};

const countAnimals = (animal) => {
  if (!animal) {
    return species.reduce((acc, curr) => ({ ...acc, [curr.name]: curr.residents.length }), {});
  }
  if (animal.species && animal.sex) {
    return verifySex(animal);
  }
  if (animal.species) {
    const bicho = species.find((e) => e.name === animal.species);
    return bicho.residents.length;
  }
};

module.exports = countAnimals;
