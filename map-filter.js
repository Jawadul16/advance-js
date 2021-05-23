const numbers = [ 5, 6, 7, 8]
// const output = []
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square (element){
//     return element * element;
// }
// numbers.map(function square (element, index, array){
//     console.log(element, index, array);
// });
// const result = numbers.map(function square (element){
//     return element * element;
// });

// const square = element => element * element;
// const result = numbers.map(square);
const result = numbers.map(x => x * x);
const larger = numbers.filter( x => x * x);
const isThere = numbers.find(x => x > 7);

console.log(isThere);