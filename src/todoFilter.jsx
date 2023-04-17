import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Button from './components/Button'

function TodoFilter({ filterTodo }) {
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
        text="Competed"
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
