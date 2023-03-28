import React, { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import Button from './components/Button'
import '../styles/global.css'

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
    <Button text="Sign In" />
    <Button text="Sign Up" />
  </>,
)
