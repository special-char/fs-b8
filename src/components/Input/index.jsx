import React from 'react'
import CloseIcon from '../../../assets/icons/close.svg'

function Input({ id, placeholder, error, ...props }) {
  console.log(props)
  return (
    <div>
      <label className="sr-only" htmlFor={id}>
        {placeholder}
      </label>
      <div className="input-wrapper">
        <CloseIcon height={24} width={24} fill="red" className="prefix-icon" />
        <input
          id={id}
          placeholder={placeholder}
          className="input"
          type="text"
          {...props}
        />
        <CloseIcon height={24} width={24} fill="red" className="sufix-icon" />
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default Input
