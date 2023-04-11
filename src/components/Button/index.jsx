import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

function Button({ text, variant, icon: Icon, className, ...rest }) {
  return (
    <button
      type="button"
      className={clsx('btn', {
        [variant]: !!variant,
        [className]: !!className,
      })}
      {...rest}
    >
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
