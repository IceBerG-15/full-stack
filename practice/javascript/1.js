console.log('hello World');
let name='Hello'; //string literal
console.log(name);
let inter = 0.3; //number literal
inter = 1;
console.log(inter);
let isChecked = false; //boolean literal
let age = null; //null literal
let r = undefined; //undefined literal
//Object
let person = {name: 'John', age:30};
//dot notation
person.name = 'Robert'; 
//bracket notation
person['name'] = 'Russian';
console.log(person);
//array
let arr = ['red', 'green', 'blue'];
arr[3]='yellow';
arr[4]=10;
arr.unshift('purple');
arr.pop();
console.log(arr,arr.length);
//performing a task function
function fun(name){
    console.log('Hello '+name);
}
fun('John'); // function call
//calculating the value
function square(value){
    return value*value;
}
console.log(square(7)); // function call
let array = [4,5,6,7,7,5]
// let total = array.reduce((sum,array)=>sum+array,0);ṇ
// console.log('total: ' +total);
let s = 0;
for (var i=0; i<array.length; i++){
    s += array[i];
}
console.log('s: '+s);




