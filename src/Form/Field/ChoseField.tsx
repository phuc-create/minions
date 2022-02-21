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
  multiple: boolean,
  onChange: (value?: string | Array<string | number>) => void;
  value: Array<string | number>
}
const CbDemo: ConfigObject[] = [
  {
    id: 1,
    name: 'checkbox',
    label: 'Eating',
    value: 'eat'
  },
  {
    id: 2,
    name: 'checkbox',
    label: 'Watching',
    value: 'watch'
  },
  {
    id: 3,
    name: 'checkbox',
    label: 'Talking',
    value: 'talk'
  },
  {
    id: 4,
    name: 'checkbox',
    label: 'Walking',
    value: 'walk'
  }, {
    id: 5,
    name: 'checkbox',
    label: 'Sleeping',
    value: 'sleep'
  }
]
const ChoseField: React.FC<ChoseFieldProps> = ({ config, multiple, onChange, value }) => {
  const [checkBox, setCheckBox] = React.useState([])
  const onChangeValue = (v: string) => {
    onChange(v)
  }
  const onChangeMultValue = (v: string | number) => {
    if (!onChange) {
      return
    }

    const index = value && value.indexOf(v)
    let newValue = []

    if (value && index >= 0) {
      newValue = value && value.filter(el => el !== v)
    } else {
      newValue = value && [...value, v]
    }

    onChange(newValue)
  }

  return (
    <div className='choose-field-ui'>
      <div className="filter-something">
        {config && config.map(cb => {
          // <div className="filter" key={cb.id}>
          //   <input type="checkbox" id={cb.id.toString()} name={cb.name} value={cb.value} onChange={onChange}/>
          //   <label htmlFor={cb.name}>{cb.label}</label>
          // </div>
          <ChooseOption cb={cb} key={cb.id} onChange={() => (multiple ? onChangeMultValue : onChangeValue)} />
        })}
        {/* <div className="filter">
          <input type="checkbox" id="watch" name="checkbox" />
          <label htmlFor="watch">Watching</label>
        </div>
        <div className="filter">
          <input type="checkbox" id="walk" name="checkbox" />
          <label htmlFor="walk">Walking</label>
        </div>
        <div className="filter">
          <input type="checkbox" id="play" name="checkbox" />
          <label htmlFor="play">Playing</label>
        </div> */}
      </div>
    </div>
  )
}

export default ChoseField

interface ChooseOptionProps {
  cb: ConfigObject,
  onChange: (value?: string | Array<string | number>) => void
}
export const ChooseOption: React.FC<ChooseOptionProps> = ({ cb, onChange }) => {

  const handleChange = () => {
    onChange(cb.value)
  }
  return (
    <div className="filter" key={cb.id}>
      <input type="checkbox" id={cb.id.toString()} name={cb.name} value={cb.value} onChange={handleChange} />
      <label htmlFor={cb.name}>{cb.label}</label>
    </div>
  )
}
