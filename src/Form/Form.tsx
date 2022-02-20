import React from 'react'
import classnames from 'classnames'

interface FormProps {
  children: React.ReactChild,
  className: string,
  onSubmit: () => void
}
const Form: React.FC<FormProps> = ({ children, onSubmit, className }) => {
  const formClass = classnames('form-ui', className)
  return (
    <form onSubmit={onSubmit} className={formClass}>{children}</form>
  )
}

export default Form
