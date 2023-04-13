import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import Input from './components/Input'
import Button from './components/button'

const TodoForm = forwardRef(({ addTodo }, ref) => {
  console.log('Todo Form render')
  return (
    <form className="flex" onSubmit={addTodo}>
      <Input
        id="todoText"
        ref={ref}
        label="Todo Text"
        placeholder="Enter Todo Text"
        inputClassName="!rounded-r-none"
        required
      />
      <Button type="submit" text="Submit" className="w-fit rounded-l-none" />
    </form>
  )
})

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default memo(TodoForm)
