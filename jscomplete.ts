const set = new Set();

console.log(set);

set.add(1);

set.add(2);

for (const iterator of set) {
  console.log(iterator);
}

const weakSet = new WeakSet();

const obj = { a: 1 };
weakSet.add(obj);

const map = new Map();

map.set("yagnesh", { a: 1 });

for (const [key, value] of map) {
  console.log(key);
  console.log(value);
}

const weakMap = new WeakMap();
const obj1 = { a: 1 };

weakMap.set(obj1, { a: 1 });

// weakSet.delete(obj);

// console.log(weakSet.has(obj));

// set.delete(1);

// console.log(set);
