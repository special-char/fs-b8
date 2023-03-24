import './styles/global.css'

const data = require('./app')
// hello

const user = {
  a: 1,
}

console.log(user)

const str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  '

console.log(str)

const sum = (num1, num2) => num1 + num2

const greet = name => `Hello ${name}`

console.log(sum(data.a, data.b))

console.log(greet('Yagnesh'))
