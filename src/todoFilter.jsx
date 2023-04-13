import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Button from './components/button'

function TodoFilter({ filterTodo }) {
  console.log('Todo Filter render')
  return (
    <div className="flex w-full">
      <Button
        text="All"
        className="rounded-none"
        onClick={() => filterTodo('all')}
      />
      <Button
        text="Pending"
        className="rounded-none"
        onClick={() => filterTodo('pending')}
      />
      <Button
        text="Completed"
        className="rounded-none"
        onClick={() => filterTodo('completed')}
      />
    </div>
  )
}

TodoFilter.propTypes = {
  filterTodo: PropTypes.func.isRequired,
}

export default memo(TodoFilter)
