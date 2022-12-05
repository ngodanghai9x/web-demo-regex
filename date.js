var moment = require('moment')

moment.tz.setDefault("America/New_York");
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
var date1= new Date();
console.log({
  date1,
  date2: date1.toString(),
  date3: date1.toUTCString(),
  date4: date1.toISOString(),
  date5: date1.toUTCString(+7),

  timestamp1: new Date(date1).getTime(),
  timestamp2: new Date(date1.toUTCString()).getTime(),
  timestamp3: new Date(date1.toISOString()).getTime(),
  timestamp4: new Date(date1.toString()).getTime(),

  moment1: moment(date1),
  moment2: moment(date1).format('DD/MM/YYYY'),
  moment3: moment(date1.toUTCString()),
  moment4: moment(date1.toISOString()),
  moment5: moment(date1.toString()),
  moment6: moment(date1),

  a1: date1.toTimeString(),
  a2: date1.toLocaleTimeString(),
  a3: date1.toDateString(),
  a4: date1.toLocaleDateString(),
  a5: date1.toLocaleString(),
  a6: date1.toJSON(),

  b1: date1.getTimezoneOffset(),
});
var newDate = new Date(date);
// var isoDate = newDate.toISOString();
var isoDate = newDate.toUTCString();
var stringDate = '2020-02-30T00:00:00.000Z'
// console.log({
//   date,
//   newDate,
//   isoDate,
//   momentDate: moment(date),
//   isoMoment: moment(new Date(isoDate)),
//   isoMoment2: moment(isoDate),
//   isoMoment3: moment(stringDate),
//   isValid: moment(isoDate).isValid(),
// })
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

try {
  var newError = (code, message) => ({ code, message })
  console.log('start try catch');
  var a = 10;
  throw  newError(401, 'Lỗi');
} catch (error) {
  console.log(" ~ file: test.js ~ line 49 ~ error", error)
}