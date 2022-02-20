import classnames from 'classnames'
import React from 'react'

interface TextFieldProps {
  style: object,
  type: string,
  className: string,
  name: string,
  onBlur: () => void,
}
const TextField: React.FC<TextFieldProps> = ({ type, className, name, onBlur, style }) => {
  const textFieldClass = classnames('textField-ui', className)
  return (
    <input type={type} name={name} onBlur={onBlur} style={style} />
  )
}

export default TextField
