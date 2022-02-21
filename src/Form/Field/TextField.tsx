import React from 'react'
import classnames from 'classnames'
import './style.scss'
import { colorsInfor as colors } from '../../Utils'
interface TextFieldProps {
  style?: object,
  type: string,
  className?: string,
  name?: string,
  onBlur?: () => void,
  onChange: React.FormEventHandler,
  placeholder?: string,
  value: string
}

interface MyCustomCSS extends React.CSSProperties {
  '--inputFieldBg': string,
  '--inputFieldColor': string
}

const TextField: React.FC<TextFieldProps> = ({ type, className, name, onBlur, style, placeholder, onChange, value }) => {
  const textFieldClass = classnames('textField-ui', className)

  const styles = {
    '--inputFieldBg': colors.form.input.background,
    '--inputFieldColor': colors.form.input.color,
    ...style
  } as MyCustomCSS

  return (
    <input
      type={type}
      name={name}
      onBlur={onBlur}
      style={styles}
      className={textFieldClass}
      placeholder={placeholder ? placeholder : 'hello world'}
      onChange={onChange}
      value={value}
    />
  )
}

export default TextField
