import React from 'react'

function Input({ id, placeholder, error, ...props }) {
  console.log(props)
  return (
    <div>
      <label htmlFor={id}>{placeholder}</label>
      <input
        id={id}
        placeholder={placeholder}
        style={{
          padding: '10px 4px',
          margin: '1rem',
          width: '100%',
        }}
        type="text"
        {...props}
      />
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default Input
