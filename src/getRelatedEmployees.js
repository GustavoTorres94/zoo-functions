const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((e) => e.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  try {
    const employees = data.employees
      .filter((e) => e.managers.includes(managerId))
      .map((e) => `${e.firstName} ${e.lastName}`);
    return employees;
  } catch (err) {
    return err.message;
  }
};

// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
