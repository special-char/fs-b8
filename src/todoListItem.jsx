import clsx from 'clsx'
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Button from './components/Button'

function TodoListItem({ todoItem, updateTodo, deleteTodo }) {
  return (
    <div className="flex items-center m-4">
      <input
        type="checkbox"
        checked={todoItem.isDone}
        onChange={() => updateTodo(todoItem)}
      />
      <p
        className={clsx('flex-1 px-4', {
          'line-through': todoItem.isDone,
        })}
      >
        {todoItem.text}
      </p>
      <Button
        text="Delete"
        className="w-fit"
        onClick={() => deleteTodo(todoItem)}
      />
    </div>
  )
}

TodoListItem.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    isDone: PropTypes.bool,
  }).isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default memo(TodoListItem)
