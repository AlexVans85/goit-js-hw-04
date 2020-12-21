// // function showThis () {
// //     console.log('this in showThis: ', this);
// // }

// // showThis()

// // const user = {name: 'Mango'}

// // user.showContext = showThis 

// // user.showContext()


// const printNessage = function (message) {
//     console.log(message);
// }

// const higerOrderFunction = function(callback) {
//     const string = 'HOCs are awesome'
//     callback(string)
// }

// higerOrderFunction(printNessage)

// const greet = function (name) {
//     console.log(`Hello ${name}`);
// }

// // greet ('Mango!!!!!!');

// const greetWithName = function (callback) {
//     const name = 'Panda'
//     callback(name)
// }

// // greet(greetWithName)

// greetWithName (greet)



// const show = function (a,b) {
//     const x = (a+b)*2
//     console.log(x);
// }
// show(2,3)


// for (let i = 0; i < 10; i += 1) {
//     console.log(i);

// }


// const repeatLog = function(n) {
//     for (let i = 0; i <= n; i += 1){
//         console.log(i);
//     }

// }
// repeatLog(5)

//=================================================

// const printValue = function(value) {
//     console.log(value);
// };

// const prettyPrint = function(value) {
//     console.log('Loggin value: ' , value);
// }


// const repeat = function(n, action) {
//     for (let i = 0; i < n; i += 1) {
//         action (i)
//     }
// console.log(action);
// }


// repeat (5, printValue)

// repeat (3, prettyPrint)

//===============================================

// const repeat = function(n, action) {
//     for (let i = 0; i < n; i += 1) {

//         action(i)
//     }
// };

// const labels = []

// repeat (5, value => {
//     labels.push(`Label ${value+1}`)
// })

// console.log(labels);


//================================================

console.log('adf');

// const filter = function(array, test) {

//     const filteredElement = []
//     for (const element of array){
//         const passed = test(element)

//         if (passed){
//             filteredElement.push(element)
//         }
//     }

//     return filteredElement
// }

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
//   ];

//   const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithAmount); // массив с объектами apples и grapes


// const greet = function (z) {
//     console.log(`hello: ${z}`);
// }

// const greetWithName = function (callback) {
// const z = 'Kitty'
// callback(z )

// }

// greetWithName(greet)




const greet = function (z) {
    console.log(`Good day ${z}`);
}


const greetWithName = function (callback){
const z = 'Adam'
callback (z)
}

greetWithName(greet)














