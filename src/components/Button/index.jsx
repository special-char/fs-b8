import React from 'react'
import PropTypes from 'prop-types'

function Button({ text, number }) {
  return <button className="btn">{`${text} ${number}`}</button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
}

export default Button
