import React from 'react'

interface FormProps {
  children: React.ReactChild,
  onSubmit: () => void
}
const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>{children}</form>
  )
}

export default Form
