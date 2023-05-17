const data = require('../data/zoo_data');

const { species, employees } = data;

const getSpecies = (emp) => species.filter((a) => emp.responsibleFor.includes(a.id));

const paramName = (eN) => {
  const finderName = employees.find((e) => eN === e.firstName || eN === e.lastName);
  if (!finderName) {
    throw new Error('Informações inválidas');
  }
  return finderName;
};

const paramId = (eI) => {
  const finderId = employees.find((e) => e.id === eI);
  if (!finderId) {
    throw new Error('Informações inválidas');
  }
  return finderId;
};

const baraban = () => employees.map((emp) => ({
  id: emp.id,
  fullName: `${emp.firstName} ${emp.lastName}`,
  species: getSpecies(emp).map((a) => a.name),
  locations: getSpecies(emp).map((a) => a.location),
}));

const getEmployeesCoverage = (param) => {
  if (!param) {
    return baraban();
  }
  if (param.name) {
    const employee = paramName(param.name);
    return baraban().find((e) => e.id === employee.id);
  }
  if (param.id) {
    const employee = paramId(param.id);
    return baraban().find((e) => e.id === employee.id);
  }
};
module.exports = getEmployeesCoverage;
