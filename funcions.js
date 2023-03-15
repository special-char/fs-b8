// const add = (...props) => {
//     return props.reduce((p, c) => p + c, 0)
//     // return a + b + c;
// }

// console.log(add(1,2, 3, 4, 5, 6));
const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const div = (a, b) => c;

console.log(add(1, 2));

const calc = (a, b) => {
  return (operation) => {
    return operation(a, b);
  };
};

console.log(calc(1, 2)(add));
console.log(calc(1, 2)(sub));
// console.log(calc(1,2)(div));

// const calc = (a, b, operation) => {
// //     if(operatio === '/') {
// //     return a / b;
// // }

//   if (operation === "+") {
//     return a + b;
//   }
//   if (operation === "-") {
//     return a - b;
//   }
//   return 0
// };

// console.log(calc(1, 2, "-"));
