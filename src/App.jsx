import React, { Component, createRef } from 'react'
import Input from './components/Input'
import Button from './components/button'

export default class App extends Component {
  state = {
    todoList: [],
  }

  inputRef = createRef()

  addTodo = event => {
    event.preventDefault()
    // const inputText = document.getElementById('todoText')
    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          { text: this.inputRef.current.value, id: new Date().valueOf() },
        ],
      }),
      () => {
        this.inputRef.current.value = ''
      },
    )

    // this.setState(({ todoText, todoList }) => ({
    //   todoList: [...todoList, todoText],
    //   todoText: '',
    // }))
  }

  render() {
    const { todoList } = this.state
    console.log('render')

    return (
      <div className="flex flex-col items-center bg-outline h-screen">
        <h1 className="text-4xl font-bold my-8">Todo App</h1>
        <form className="flex" onSubmit={this.addTodo}>
          <Input
            id="todoText"
            ref={this.inputRef}
            label="Todo Text"
            placeholder="Enter Todo Text"
            inputClassName="!rounded-r-none"
          />
          <Button
            type="submit"
            text="Submit"
            className="w-fit rounded-l-none"
          />
        </form>
        <div className="w-full flex-1 overflow-scroll">
          {todoList.map(x => (
            <div key={x.id} className="flex items-center m-2">
              <input type="checkbox" name="" id="" />
              <p className="flex-1 px-4">{x.text}</p>
              <Button text="Delete" className="w-fit" />
            </div>
          ))}
        </div>
        <div className="flex w-full">
          <Button text="All" className="rounded-none" />
          <Button text="Pending" className="rounded-none" />
          <Button text="Completed" className="rounded-none" />
        </div>
      </div>
    )
  }
}
