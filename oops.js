// 1. Encapsulation
// 2. absract
// 3. polyMorphism
// 4. inheritance

function add(a, b) {
  return a + b;
}

function add(a, b, c) {
  console.log("hello");
  return a + b + c;
}

add(1, 2, 3);

const u1 = {
  firstName: "yagnesh",
  lastName: "modh",
  gender: "male",
  fullName: function () {
    return `MR. ${this.firstName} ${this.lastName}`;
  },
};

const u2 = {
  firstName: "virat",
  lastName: "kohli",
  gender: "male",
  fullName: function () {
    return `Mr. ${this.firstName} ${this.lastName}`;
  },
};

const str = "hello";

console.log(str[0].toUpperCase());

console.log(str.slice(1));

console.log(`${str[0].toUpperCase()}${str.slice(1)}`);

class User {
  gender = "male";

  static age = 18;

  constructor(firstName, lastName, age) {
    console.log(firstName);
    console.log(lastName);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(value) {
    this._firstName = User.nameCase(value);
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(value) {
    this._lastName = User.nameCase(value);
  }

  get lastName() {
    return this._lastName;
  }

  static nameCase(value) {
    console.log(this.age);
    return `${value[0].toUpperCase()}${value.slice(1)}`;
  }

  fullName() {
    console.log(this.#getAge());
    return `Mr. ${this.firstName} ${this.lastName}`;
  }

  #getAge() {
    return this.age;
  }

  changeFirstName(name) {
    this.firstName = name;
  }
}

class SuperUser extends User {
  constructor() {
    super("Mighty", "Good", 33);
  }

  giveLife() {
    console.log("hello world");
  }

  fullName() {
    return super.fullName();
  }
}

console.log(User.nameCase("hello"));

console.log(User.age);

const su = new SuperUser();

console.log(su.age);
console.log(su.fullName());

const user1 = new User("yagnesh", "modh", 33);

const user2 = new User("virat", "kohli", 30);

console.log(user1);

console.log(user1.firstName);

console.log(user1.fullName());

console.log(user2);
