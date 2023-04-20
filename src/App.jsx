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

  async componentDidMount() {
    this.loadTodo('all')
  }

  loadTodo = async filterStatus => {
    try {
      let query = ''
      if (filterStatus !== 'all') {
        query = `?isDone=${filterStatus === 'completed'}`
      }
      const res = await fetch(`http://localhost:3000/todos${query}`)
      const json = await res.json()
      this.setState({ todoList: json, filterStatus })
    } catch (error) {}
  }

  addTodo = async event => {
    try {
      event.preventDefault()

      const data = {
        text: this.inputRef.current.value,
        isDone: false,
      }

      const res = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      const json = await res.json()

      // this.setState({todolist: [{ id: 1}]})
      this.setState(
        ({ todoList }) => ({
          todoList: [...todoList, json],
        }),
        () => {
          this.inputRef.current.value = ''
        },
      )
    } catch (error) {}
  }

  updateTodo = async todoItem => {
    try {
      const res = await fetch(`http://localhost:3000/todos/${todoItem.id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...todoItem, isDone: !todoItem.isDone }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })

      const json = await res.json()

      // this.setState({ todoList: newData })
      this.setState(({ todoList }) => {
        const index = todoList.findIndex(x => x.id === todoItem.id)
        return {
          todoList: [
            ...todoList.slice(0, index),
            json,
            ...todoList.slice(index + 1),
          ],
        }
      })
    } catch (error) {}
  }

  deleteTodo = async todoItem => {
    try {
      await fetch(`http://localhost:3000/todos/${todoItem.id}`, {
        method: 'DELETE',
      })
      // this.setState({ todoList: newData })
      this.setState(({ todoList }) => {
        const index = todoList.findIndex(x => x.id === todoItem.id)
        return {
          todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
        }
      })
    } catch (error) {}
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
        <TodoFilter filterTodo={this.loadTodo} />
      </div>
    )
  }
}
