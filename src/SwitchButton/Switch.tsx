import classnames from 'classnames'
import React from 'react'
interface SwitchProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  onChange?(v: string | number): void;
  values?: Array<string | number> | string | number;
  value?: string | number;
}
const Switch: React.FC<SwitchProps> = ({
  children,
  id,
  className,
  values,
  value,
  onChange
}) => {
  const btnClass = classnames('btn-ui', className, {
    'is-active': Array.isArray(values)
      ? values.includes(value)
      : values === value
  })
  const handleChangeBtn = () => {
    onChange(value)
  }
  return (
    <button id={id} className={btnClass} onClick={handleChangeBtn}>
      {children}
    </button>
  )
}

export default Switch
