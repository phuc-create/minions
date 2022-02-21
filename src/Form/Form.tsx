import React from 'react'
import classnames from 'classnames'
import { colorsInfor as colors } from '../Utils'
import './style.scss'
interface FormProps {
  children: JSX.Element | JSX.Element[],
  className: string,
  onSubmit: React.FormEventHandler,
  style: object
}

interface MyCustomCSS extends React.CSSProperties {
  '--formBackground': string,
  '--formShadow': string,
}

const Form: React.FC<FormProps> = ({ children, onSubmit, className, style }) => {
  const formClass = classnames('form-ui', className)

  const styles = {
    '--formBackground': colors.form.background,
    '--formShadow': colors.form.shadow,
    ...style
  } as MyCustomCSS

  return (
    <form onSubmit={onSubmit} className={formClass} style={styles}>{children}</form>
  )
}

export default Form
