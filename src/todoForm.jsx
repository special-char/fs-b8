import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import Input from './components/Input'
import Button from './components/Button'

const TodoForm = forwardRef(({ addTodo }, ref) => {
  console.log('Todo Form')
  return (
    <form className="flex" onSubmit={addTodo}>
      <Input ref={ref} inputClassName="!rounded-r-none" required />
      <Button
        text="Add Todo"
        type="submit"
        className="w-fit whitespace-nowrap rounded-l-none"
      />
    </form>
  )
})

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default memo(TodoForm)
