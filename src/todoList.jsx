import React, { memo } from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './todoListItem'

function TodoList({ todoList, filterStatus, updateTodo, deleteTodo }) {
  console.log('Todo List render')
  return (
    <div className="w-full flex-1 overflow-scroll">
      {todoList.map(x => {
        if (
          (filterStatus === 'pending' && x.isDone === false) ||
          (filterStatus === 'completed' && x.isDone === true) ||
          filterStatus === 'all'
        ) {
          return (
            <TodoListItem
              key={x.id}
              todoItem={x}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          )
        }
        return null
      })}
    </div>
  )
}

TodoList.propTypes = {
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  filterStatus: PropTypes.oneOf(['all', 'pending', 'completed']).isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      isDone: PropTypes.bool,
    }),
  ).isRequired,
}

export default memo(TodoList)
