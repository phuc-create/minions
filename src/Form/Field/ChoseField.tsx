import React from 'react'
import classnames from 'classnames'
import './style.scss'
type ConfigObject = {
  id: number,
  name: string,
  label: string,
  value: string | []
}

interface ChoseFieldProps {
  config: ConfigObject[],
  multiple?: boolean,
  onChange: (value?: string | number | Array<string | number>) => void,
  value: string | number | Array<string | number>,
  className?: string,
  size: 'small' | 'medium' | 'large'
}

const ChoseField: React.FC<ChoseFieldProps> = ({ config, multiple, onChange, value, className, size }) => {

  const chooseFieldClass = classnames('checkbox-ui', className)

  const onChangeValue = (v: string) => {
    onChange(v)
  }
  const onChangeMultValue = (v: string | number) => {
    if (!onChange) {
      return
    }
    if (Array.isArray(value)) {
      const index = value && value.indexOf(v)
      let setValue = []

      if (index >= 0) {
        setValue = value && value.filter((el: string | number) => el !== v)
      } else {
        setValue = value && [...value, v]
      }

      onChange(setValue)
    }
  }

  const ChangeOnType = (multiple ? onChangeMultValue : onChangeValue)
  if (Array.isArray(config)) {
    return (
      <div className={chooseFieldClass}>
        {config && config.map(cb => {
          // <div className="filter" key={cb.id}>
          //   <input type="checkbox" id={cb.id.toString()} name={cb.name} value={cb.value} onChange={onChange}/>
          //   <label htmlFor={cb.name}>{cb.label}</label>
          // </div>
          return (
            <ChooseOption cb={cb} key={cb.id} onChange={ChangeOnType} value={value} size={size} />
          )
        })}
      </div>
    )
  }
  return <></>

}

export default ChoseField

interface ChooseOptionProps {
  cb: ConfigObject,
  onChange(value?: string | Array<string | number>): void,
  value: string | number | Array<string | number>,
  size: string
}

interface MyCustomCSS extends React.CSSProperties {
  '--size': string,
  '--widthBefore': string,
  '--widthAfter': string,
  '--heightBefore': string,
  '--heightAfter': string,
}
const ChooseOption: React.FC<ChooseOptionProps> = ({ cb, onChange, value, size }) => {
  const active = Array.isArray(value) ? value.find(v => v === cb.value) : value === cb.value

  const handleChange = () => {
    onChange(cb.value)
  }
  // React.useEffect(() => {
  //   setActive(Array.isArray(value) ? value.find(v => v === cb.value) : value === cb.value)
  // }, [])
  const styles = {
    '--size': size === 'small' ? '30px' : size === 'medium' ? '40px' : '50px',
    '--heightAfter': size === 'small' ? '4px' : size === 'medium' ? '5px' : '5px',
    '--widthAfter': size === 'small' ? '19px' : size === 'medium' ? '25px' : '30px',
    '--heightBefore': size === 'small' ? '4px' : size === 'medium' ? '5px' : '5px',
    '--widthBefore': size === 'small' ? '12px' : size === 'medium' ? '17px' : '22px'
  } as MyCustomCSS
  return (
    <div className={active ? 'checkbox-bx active' : 'checkbox-bx'} key={cb.id} style={styles}>
      <input style={styles} className='checkbox-bx__input' type="checkbox" id={cb.id.toString()} name={cb.name} value={cb.value} onChange={handleChange} />
      <label className='checkbox-bx__label' htmlFor={cb.id.toString()}>{cb.label}</label>
    </div>
  )
}
