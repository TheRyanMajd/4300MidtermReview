function add(a, b){
    return a+b;
}

function higherOrder(callback, value) {
if (value > 0) {
    return callback(value, value*3);
} else {
    return callback(value, -value);
}
}
function repeat(n, action) { 
    for (let i = 0; i < n; i++) 
    { action(i); 
    }} 
    repeat(3, console.log); // Logs 0, 1, 2


console.log(higherOrder(add, 17)); // 68
console.log(higherOrder(add,-14)); // 0


//Arrow Function
const arrowFunction = () => (console.log(higherOrder(add,128)))
const multiply = (a, b) => a * b;
// for (let i = 0; i < 3; i++) {
//     arrowFunction();
// }

// Anonymous Function
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet('Puma')); // Output: Hello, Puma!

const a = 1; // final
var b; // function scoped variables
let c; // block scoped variables


var obby = Object.create(null);
obby.name = 'Puma';
obby.age = 23;
obby.greet = function() {
    return `Greetings, ${this.name}! You are ${this.age} years old.`;
};
console.log(obby.greet()); // Output: Hello, Puma!
let newHeading = 'Chapter 1'
let newTitle = 'The Beginning';
// document.querySelector('h1').textContent = newHeading;
// document.getElementById('title').textContent = newTitle;
// const elementsByClass = document.getElementsByClassName('class');
// const elementsByTag = document.getElementsByTagName('tag')

//CALLBACKS
function fetchData(callback) {
    setTimeout(() => {
        callback('Done!');
    }, 1500*2);
}

//PROIMISES
const promise = new Promise((resolve, reject) => { // Simulate async operation
    setTimeout(() => resolve('Data'), 1000); });
//ASYNC/AWAIT
async function fetchDataAsync() { 
    const data = await promise;
    console.log(data); 
}

//EVENT HANDALING

// document.getElementById('button').addEventListener('click', () => {
//     console.log('button was clicked n shit')
//     add(6,5);
// })

var array = [5, 24, -1894, 234, 35];
console.log(array); 

array = array.map(function(x) {
    return x / 2;
});

console.log(array); 

var evenArray = array.filter(function(x) {
    return x % 2 == 0;
});
console.log(evenArray); 

array.sort(function(a, b) {
    return a - b; 
});
console.log(array); // Sorted array

const ar = array.reduce(function(acc ,curr) {
    return acc + curr;
},1)
console.log(ar)

//callbacks, 
//promises - 3 states of a promise, how to chain, possible outcomes
//async/await
// handling async calls:
function getData() 
{ return new Promise(resolve => { 
    setTimeout(() => resolve('Some data'), 1000); 
}); } 
getData().then(data => console.log(data));