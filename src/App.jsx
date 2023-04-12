import React, { Component, createRef } from 'react'
import clsx from 'clsx'
import Input from './components/Input'
import Button from './components/button'

export default class App extends Component {
  state = {
    todoList: [],
    filterStatus: 'all',
  }

  inputRef = createRef()

  addTodo = event => {
    event.preventDefault()
    // const inputText = document.getElementById('todoText')
    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          {
            text: this.inputRef.current.value,
            id: new Date().valueOf(),
            isDone: false,
          },
        ],
      }),
      () => {
        this.inputRef.current.value = ''
      },
    )
  }

  updateTodo = todoItem => {
    const { todoList } = this.state
    const index = todoList.findIndex(y => y.id === todoItem.id)
    const newTodoList = [
      ...todoList.slice(0, index),
      { ...todoItem, isDone: !todoItem.isDone },
      ...todoList.slice(index + 1),
    ]
    this.setState({ todoList: newTodoList })
  }

  deleteTodo = todoItem => {
    const { todoList } = this.state
    const index = todoList.findIndex(y => y.id === todoItem.id)
    const newTodoList = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1),
    ]
    this.setState({ todoList: newTodoList })
  }

  render() {
    const { todoList, filterStatus } = this.state
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
          {todoList.map(x => {
            if (
              (filterStatus === 'pending' && x.isDone === false) ||
              (filterStatus === 'completed' && x.isDone === true) ||
              filterStatus === 'all'
            ) {
              return (
                <div key={x.id} className="flex items-center m-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={x.isDone}
                    onClick={() => this.updateTodo(x)}
                  />
                  <p
                    className={clsx('flex-1 px-4', {
                      'line-through': x.isDone,
                    })}
                  >
                    {x.text}
                  </p>
                  <Button
                    text="Delete"
                    className="w-fit"
                    onClick={() => this.deleteTodo(x)}
                  />
                </div>
              )
            }
            return null
          })}
        </div>
        <div className="flex w-full">
          <Button
            text="All"
            className="rounded-none"
            onClick={() => this.setState({ filterStatus: 'all' })}
          />
          <Button
            text="Pending"
            className="rounded-none"
            onClick={() => this.setState({ filterStatus: 'pending' })}
          />
          <Button
            text="Completed"
            className="rounded-none"
            onClick={() => this.setState({ filterStatus: 'completed' })}
          />
        </div>
      </div>
    )
  }
}
