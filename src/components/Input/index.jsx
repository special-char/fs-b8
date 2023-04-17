import React, { forwardRef } from 'react'
import clsx from 'clsx'

const Input = forwardRef(
  (
    {
      id,
      label,
      placeholder,
      error,
      prefixIcon: PrefixIcon,
      suffixIcon: SuffixIcon,
      className,
      inputClassName,
      ...props
    },
    ref,
  ) => (
    <div className="w-full">
      <label className="sr-only" htmlFor={id}>
        {placeholder}
      </label>
      <div
        className={clsx('input-wrapper', {
          [className]: !!className,
        })}
      >
        {/* <CloseIcon height={24} width={24} fill="red" className="prefix-icon" /> */}
        <input
          id={id}
          ref={ref}
          placeholder={placeholder}
          className={clsx('input', {
            [inputClassName]: !!inputClassName,
          })}
          type="text"
          {...props}
        />
        {/* <CloseIcon height={24} width={24} fill="red" className="sufix-icon" /> */}
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  ),
)

export default Input

// import React from 'react'
// import CloseIcon from '../../../assets/icons/close.svg'

// function Input({ id, placeholder, error, ...props }) {
//   return (

//   )
// }

// export default Input
