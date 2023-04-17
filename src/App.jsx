import React, { Component, createRef } from 'react'
import TodoForm from './todoForm'
import TodoList from './todoList'
import TodoFilter from './todoFilter'

export default class App extends Component {
  inputRef = createRef()

  state = {
    todoList: [],
    filterStatus: 'all',
  }

  addTodo = event => {
    event.preventDefault()

    // this.setState({todolist: [{ id: 1}]})
    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          {
            id: new Date().valueOf(),
            text: this.inputRef.current.value,
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
    // this.setState({ todoList: newData })
    this.setState(({ todoList }) => {
      const index = todoList.findIndex(x => x.id === todoItem.id)
      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...todoList[index], isDone: !todoList[index].isDone },
          ...todoList.slice(index + 1),
        ],
      }
    })
  }

  deleteTodo = todoItem => {
    // this.setState({ todoList: newData })
    this.setState(({ todoList }) => {
      const index = todoList.findIndex(x => x.id === todoItem.id)
      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      }
    })
  }

  filterTodo = filterStatus => {
    this.setState({ filterStatus })
  }

  render() {
    return (
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-4xl font-bold my-8">Todo App</h1>
        <TodoForm addTodo={this.addTodo} ref={this.inputRef} />
        <TodoList
          {...this.state}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
        <TodoFilter filterTodo={this.filterTodo} />
      </div>
    )
  }
}
