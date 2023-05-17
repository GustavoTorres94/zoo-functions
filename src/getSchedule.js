const data = require('../data/zoo_data');

// const weekDays = {
//   monday: {
//     officeHour: '',
//     exhibition: '',
//   },
//   tuesday: {
//     officeHour: '',
//     exhibition: '',
//   },
//   wednesday: {
//     officeHour: '',
//     exhibition: '',
//   },
//   thursday: {
//     officeHour: '',
//     exhibition: '',
//   },
//   friday: {
//     officeHour: '',
//     exhibition: '',
//   },
//   saturday: {
//     officeHour: '',
//     exhibition: '',
//   },
//   sunday: {
//     officeHour: '',
//     exhibition: '',
//   },
// };

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) {
    return 'asd';
  }
  if (scheduleTarget) {
    return data.species
      .find((e) => e.name === scheduleTarget).availability;
  }
};
getSchedule('lions');

module.exports = getSchedule;
