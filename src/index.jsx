import React, { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import Button from './components/Button'
import '../styles/global.css'
import Xyz from './components/Input'
import Input from './components/Input'

// first letter of element should be capital letter
// return single element from component
// inline style should be object and properties should in camel case
// instead of class use classname
// function App(props) {
//   return (
//     <>
//       <h1 className="title">{props.title}</h1>
//       <h2>{props.desc}</h2>
//       <input type="radio" />
//     </>
//   )
// }

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <>
    <Button text="Learn" number={10} />
    <Button text="Sign Up" />
    <Input
      id="firstName"
      name="firstName"
      placeholder="First Name"
      autoComplete="given-name"
    />

    <Input
      id="lastName"
      name="lastName"
      placeholder="Last Name"
      autoComplete="family-name"
      type="password"
      error="Something went wrong..."
    />

    <Input name="isMarried" type="checkbox" />
  </>,
)
