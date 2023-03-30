import React from 'react'
import PropTypes from 'prop-types'

function Button({ text, variant, icon: Icon, ...rest }) {
  return (
    <button type="button" className={`btn ${variant}`} {...rest}>
      {Icon && <Icon height={24} width={24} />}
      {text && <span>{text}</span>}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['fill', 'outline']),
  icon: PropTypes.node,
}

Button.defaultProps = {
  variant: 'fill',
  icon: undefined,
}

export default Button
