const path = require('path');

// console.log(__dirname);
// console.log(__filename);

// console.log(path.basename(__dirname));
// console.log(path.basename(__filename));

// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));
console.log(path.join('f1','f2','main.js'));

console.log(path.join(__dirname,"data.json"));

console.log(path.resolve('f1','f2','main.js'));