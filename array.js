const arr = [
  {
    name: "Pruthvish",
  },
  {
    name: "Ankita",
  },
  {
    name: "Aesha",
  },
  {
    name: "nilesh",
  },
];

const newArr = [{ name: "ajay" }, ...arr];

console.log(newArr);

console.log(arr[2].name);

// mutable

// arr.push({ name: 'ajay' })

// arr.pop()

// arr.unshift({ name: 'ajay'})

// arr.shift()

// console.log(arr);
