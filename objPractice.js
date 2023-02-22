const obj = {
  a: 1,
  b: 2,
  c: 3,
};

// delete obj.c;

// console.log(obj);

// Destructure

const { a, c, b, ...rest } = obj;

console.log(rest);

console.log(obj);

// console.log(a);
// console.log(b);

// Dot Notation

console.log(obj.c);
console.log(obj.a);
console.log(obj.b);

// Array Notation

const key = "a";

console.log(obj[key]);
console.log(obj["b"]);
console.log(obj["c"]);

// CRUD

// C -> Create
// R -> Read
// U -> Update
// D -> Delete

// Mutable approch

// obj.c = 3;

// console.log(obj);

// obj.a = 5;

// console.log(obj);

// immutable approch

const newObj = { ...obj, c: 3, a: 5 };

console.log(newObj);

console.log(obj);
