var _ = require('lodash')
var arr =[2,"hello","nothing",3,5,7,2,'A'];
console.log(arr);

var filter = _.uniq(arr);
console.log(filter);