import React from 'react'
import classnames from 'classnames'
import { colorsInfor as colors } from '../Utils/Colors'
import './style.scss'

interface ButtonProps {
  id: string
  type?: 'button' | 'submit' | 'reset',
  color?: string,
  bg?: string,
  variant?: 'primary' | 'secondary' | 'error' | 'success' | 'warn',
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
  '--buttonBackground': string;
  '--width': string;
  '--height': string;
  '--backgroundPrimary': string;
  '--backgroundSecondary': string;
  '--backgroundSuccess': string;
  '--backgroundError': string;
  '--backgroundWarn': string;

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
  height,
  variant,
  color,
  bg
}) => {
  const buttonClass = classnames('button-ui', className, {
    'btn-primary': variant === 'primary',
    'btn-secondary': variant === 'secondary',
    'btn-error': variant === 'error',
    'btn-success': variant === 'success',
    'btn-warn': variant === 'warn'
  })

  // const { colors } = React.useContext(ColorsCtx)

  const styles = {
    '--buttonColor': color ? color : '#fff',
    '--buttonBackground': bg ? bg :
      (variant === 'primary' ? colors.button.primary
        : variant === 'secondary' ? colors.button.secondary
          : variant === 'success' ? colors.button.success
            : variant === 'error' ? colors.button.error
              : variant === 'warn' ? colors.button.warn
                : '#ea2027'),
    '--width': width ? width : '200px',
    '--height': height ? height : 'auto',
    '--backgroundPrimary': colors.button.primary,
    '--backgroundSecondary': colors.button.secondary,
    '--backgroundSuccess': colors.button.success,
    '--backgroundError': colors.button.error,
    '--backgroundWarn': colors.button.warn,
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
  } else {
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
}

export default Button

const defaultProps = {
  disabled: false,
  style: {},
}

Button.defaultProps = defaultProps
