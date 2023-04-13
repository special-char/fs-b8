import React, { memo } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Button from './components/button'

function TodoListItem({ todoItem, updateTodo, deleteTodo }) {
  console.log('todo list item')
  return (
    <div className="flex items-center m-2">
      <input
        type="checkbox"
        name=""
        id=""
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
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todoItem: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    isDone: PropTypes.bool,
  }).isRequired,
}

export default memo(TodoListItem)
