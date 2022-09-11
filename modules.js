//const xyz = required('./people');

const { people, ages } = required('./people');
console.log(xyz.people, xyz.ages);
//console.log(people);

const os = require('os');

console.log(os.platform(), os.homedir());
