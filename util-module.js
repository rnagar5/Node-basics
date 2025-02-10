const util = require('util');
const str = util.format('Hello %s, its %d day of learning', 'Riddhi', 2);
console.log(str);

console.log(util.types.isDate(new Date())); 
const obj={
    name:'Riddhi',
    age:22,
    address:{
    city:"ratlam",
    country:"India"}
}
console.log(util.inspect(obj));