const data = require('../data/zoo_data');

const separateWays = (entrants) => {
  const obj = { adult: 0, child: 0, senior: 0 };
  entrants.forEach((e) => {
    if (e.age < 18) {
      obj.child += 1;
    } if (e.age >= 18 && e.age < 50) {
      obj.adult += 1;
    } if (e.age >= 50) {
      obj.senior += 1;
    }
  });
  return obj;
};

const countEntrants = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  return separateWays(entrants);
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  const { adult, senior, child } = data.prices;
  const result = separateWays(entrants);
  const totalAdult = Object.values(result)[0] * adult;
  const totalChild = Object.values(result)[1] * child;
  const totalSenior = Object.values(result)[2] * senior;
  const total = totalAdult + totalSenior + totalChild;
  return parseFloat(total.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
