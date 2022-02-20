import React from 'react'
import classnames from 'classnames'
import './style.scss'

interface ButtonProps {
  id: string
  type?: 'button' | 'submit' | 'reset'
  className?: string
  children: React.ReactNode
  disabled?: boolean
  link?: string
  style?: object,
  onClick?: () => void,
  width?: number,
  height?: number
}

interface MyCustomCSS extends React.CSSProperties {
  '--buttonColor': string;
  '--width': string;
  '--height': string;
}

const Button: React.FC<ButtonProps> = ({
  id,
  type,
  className,
  children,
  disabled,
  link,
  style,
  onClick,
  width,
  height
}) => {
  const buttonClass = classnames('button-ui', className)

  const styles = {
    '--buttonColor': '#ea2027',
    '--width': width ? width : '300px',
    '--height': height ? height : 'auto',
    ...style,
  } as MyCustomCSS

  if (link) {
    return (
      <a
        href={link}
        onClick={onClick}
        className={buttonClass}
        id={id}
        style={styles}
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
      style={styles}
    >
      {children}
    </button>
  )
}

export default Button

const defaultProps = {
  disabled: false,
  style: {}
}

Button.defaultProps = defaultProps
