const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    const obj = {};
    return obj;
  } if (employeeName) {
    const employee = data.employees
      .filter((e) => e.firstName === employeeName || e.lastName === employeeName);
    return employee[0];
  }
};

module.exports = getEmployeeByName;
