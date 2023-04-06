import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import Button from './components/Button'
import '../styles/global.css'
import Xyz from './components/Input'
import Input from './components/Input'
import CloseIcon from '../assets/icons/close.svg'
import LockIcon from '../assets/icons/lock.svg'
import ShowIcon from '../assets/icons/show.svg'
import App from './App'
import Try from './components/try'

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

// let number = 1

// function Counter() {
//   return (
//     <div>
//       <Button
//         variant="outline"
//         text="+"
//         onClick={() => {
//           number = number + 1
//           console.log(number)
//         }}
//       />
//       <span id="number">{number}</span>
//       <Button variant="outline" text="-" />
//     </div>
//   )
// }

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
