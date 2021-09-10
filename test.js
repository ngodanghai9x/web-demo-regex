var moment = require('moment')


// console.log({
//   date: moment(new Date()).format('YYYY-MM-DD HH:mm:ss').toString()
// })

var date = '2020-02-30';
var date1 = '2020/02/30';
var date2 = '30/02/2020';
var date3 = '30-02-2020';
console.log({
  // moment: moment(date),
  // moment1: moment(date1),
  // moment2: moment(date2),
  // moment3: moment(date3),
})
var newDate = new Date(date);
var isoDate = newDate.toISOString();
var stringDate = '2020-02-30T00:00:00.000Z'
console.log({
  date,
  newDate,
  isoDate,
  momentDate: moment(date),
  isoMoment: moment(new Date(isoDate)),
  isoMoment2: moment(isoDate),
  isoMoment3: moment(stringDate),
  isValid: moment(isoDate).isValid(),
})
// console.log({
//   isoMoment1: moment(0), // Moment<1970-01-01T08:00:00+08:00>
//   isoMoment2: moment(''), // Moment<Invalid date>
//   isoMoment3: moment(+''), // Moment<1970-01-01T08:00:00+08:00>
//   isoMoment4: moment('1222222'), // Moment<1222-08-10T00:00:00+07:06>
//   isoMoment5: moment(1222222), //Moment<1970-01-01T08:20:22+08:00>
// })
// console.log(JSON.stringify({
//   date,
//   newDate,
//   isoDate,
//   isoMoment: moment(new Date(isoDate)),
// }))
