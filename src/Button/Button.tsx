import React from 'react'
import classnames from 'classnames'
import "./style.scss"
interface ButtonProps {
  id: string
  type: 'button' | 'submit' | 'reset'
  className?: string
  children: React.ReactNode
  disabled?: boolean
  link?: string
  style?: object
  onClick?: () => void
}
const Button: React.FC<ButtonProps> = ({
  id,
  type,
  className,
  children,
  disabled,
  link,
  style,
  onClick
}) => {
  const buttonClass = classnames('button-ui', className)
  if (link) {
    return (
      <a
        href={link}
        onClick={onClick}
        className={buttonClass}
        id={id}
        style={style}
      >
        {children}
      </a>
    )
  }
  return (
    <button
      onClick={onClick}
      type={type}
      id={id}
      disabled={disabled}
      className={buttonClass}
      style={style}
    >
      {children}
    </button>
  )
}

export default Button

const defaultProps = {
  disabled: false
}

Button.defaultProps = defaultProps
