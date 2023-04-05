import React, { Component } from 'react'
import CloseIcon from '../../../assets/icons/close.svg'

export default class Input extends Component {
  state = {
    text: '',
  }

  render() {
    const {
      id,
      placeholder,
      error,
      prefixIcon: PrefixIcon,
      suffixIcon: SuffixIcon,
      ...props
    } = this.props
    return (
      <div>
        <label className="sr-only" htmlFor={id}>
          {placeholder}
        </label>
        <div className="input-wrapper">
          {PrefixIcon && (
            <PrefixIcon height={24} width={24} className="prefix-icon" />
          )}
          <input
            id={id}
            placeholder={placeholder}
            className="input"
            type="text"
            value={this.state.text}
            onChange={event => {
              // this.setState({ text: event.target.value })
              this.setState({ text: event.target.value })
            }}
            style={{
              borderColor: this.state.text.length > 20 ? 'red' : 'gray',
              outlineColor: this.state.text.length > 20 ? 'red' : 'gray',
            }}
            {...props}
          />
          {SuffixIcon && (
            <SuffixIcon height={24} width={24} className="sufix-icon" />
          )}
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    )
  }
}

// import React from 'react'
// import CloseIcon from '../../../assets/icons/close.svg'

// function Input({ id, placeholder, error, ...props }) {
//   return (
//     <div>
//       <label className="sr-only" htmlFor={id}>
//         {placeholder}
//       </label>
//       <div className="input-wrapper">
//         <CloseIcon height={24} width={24} fill="red" className="prefix-icon" />
//         <input
//           id={id}
//           placeholder={placeholder}
//           className="input"
//           type="text"
//           {...props}
//         />
//         <CloseIcon height={24} width={24} fill="red" className="sufix-icon" />
//       </div>
//       {error && <p className="error">{error}</p>}
//     </div>
//   )
// }

// export default Input
