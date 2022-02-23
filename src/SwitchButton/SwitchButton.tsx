import React from 'react'
import Switch from './Switch'
import './style.scss'
import classnames from 'classnames'

interface SwitchButtonProps<T> {
  children: JSX.Element | JSX.Element[];
  className?: string;
  multiple: boolean;
  values: Array<string | number> | string | number;
  onChange: (value: Array<string | number> | string | number) => void;
}
interface ChildrenParams<T> {
  type: T;
}
const SwitchButton: React.FC<SwitchButtonProps<
  Array<string | number> | string | number
>> = <T extends Array<string | number> | string | number>({
  children,
  className,
  multiple,
  values,
  onChange
}: SwitchButtonProps<T>) => {
    const switchClass = classnames('switch-ui', className)
    const handleChange = (v: string | number): any => {
      if (!onChange) {
        return null
      }
      onChange(v)
    }
    const handleChangeMult = (v: string | number): any => {
      if (!onChange) {
        return null
      }
      if (Array.isArray(values)) {
        let newValue = []
        const checker = values.indexOf(v)
        if (checker >= 0) {
          newValue =
            values && values.filter((value: string | number) => value !== v)
        } else {
          newValue = values && [...values, v]
        }
        onChange(newValue)
      }
    }
    const renderSwitch = () => {
      return React.Children.map(
        children,
        (child: ChildrenParams<unknown>, index: number) => {
          if (child.type === Switch) {
            return React.cloneElement(child as React.ReactElement, {
              onChange: (multiple ? handleChangeMult : handleChange),
              selectedValue: 'value',
              name: 'abc',
              idx: index.toString(),
              multiple: multiple,
              values: values
            })
          }
        }
      )
    }
    return <div className={switchClass}>{renderSwitch()}</div>
  }

export default SwitchButton
