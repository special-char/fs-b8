import React, { memo } from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './todoListItem'

function TodoList({ todoList, updateTodo, deleteTodo }) {
  return (
    <div className="w-full flex-1 overflow-auto">
      {todoList.map(x => (
        <TodoListItem
          key={x.id}
          todoItem={x}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}

TodoList.propTypes = {
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      isDone: PropTypes.bool,
    }).isRequired,
  ).isRequired,
}

export default memo(TodoList)
