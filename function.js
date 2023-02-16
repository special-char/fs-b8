// Name
//  age
// gender

function PrintUser(user) {
  console.log(user.name);
  console.log(user.age);
  console.log(user.gender);
}

const user1 = {
  name: "Rohit",
  age: 32,
  gender: "male",
};

PrintUser(user1);

const user2 = {
  name: "Virat",
  age: 30,
  gender: "male",
};

PrintUser(user2);

function add(a, b) {
  return a + b;
}

const result = add(1, 2);

console.log(result);
