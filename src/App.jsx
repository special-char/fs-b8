import React, { Component, createRef } from 'react'
import TodoForm from './todoForm'
import TodoList from './todoList'
import TodoFilter from './todoFilter'

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

  filterTodo = filterStatus => {
    this.setState({ filterStatus })
  }

  render() {
    const { todoList, filterStatus } = this.state

    return (
      <div className="flex flex-col items-center bg-outline h-screen">
        <h1 className="text-4xl font-bold my-8">Todo App</h1>
        <TodoForm addTodo={this.addTodo} ref={this.inputRef} />
        <TodoList
          todoList={todoList}
          filterStatus={filterStatus}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
        <TodoFilter filterTodo={this.filterTodo} />
      </div>
    )
  }
}
