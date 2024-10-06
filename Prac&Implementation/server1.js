/**  
var fs = require('fs');
var os = require('os');


var user = os.userInfo();
console.log(user);
console.log(user.username);
*/
/**  
var a = fs.appendFile('vardhan.txt', "hello",()=>{
    console.log("the file is been created !!");
});
*/
/** 
var a = fs.appendFile('vardhan2.txt', "hello" + user.username + '!\n',()=>{
    console.log("the file is been created !!");
});


console.log(os);
*/

const bhai = require('./bhai.js');

console.log(bhai);

var age = bhai.age;

var res = bhai.func(age+15,2);
console.log(age);
console.log(res);

