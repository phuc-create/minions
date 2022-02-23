import React from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import './style.scss'

export interface AdvancedCardProps<T> {
  cardinfor: T;
  colors?: Array<string>;
  styled?: T;
}
const AdvancedCard: React.FC<AdvancedCardProps<
  Record<string, React.ReactNode>
>> = <T extends Record<string, React.ReactNode>>({
  cardinfor,
  colors,
  styled
}: AdvancedCardProps<T>): JSX.Element => {
    const color = colors
      ? colors
      : ['#0984e3', '#00b894', '#d63031', '#6c5ce7', '#EE5A24', '#ED4C67']
    const style = {
      '--progress': cardinfor.progress + '%',
      backgroundColor: color[Math.floor(Math.random() * color.length)]
    }
    return (
      <div className="list__bx" style={styled}>
        <FiMoreVertical className="list__bx--iconShowmore" />
        <div className="list__bx--head">
          <p>{cardinfor.time}</p>
          <FiMoreVertical className="list__bx--head-icon" />
        </div>
        <div className="list__bx--desc">
          <p className="list__bx--desc-title">{cardinfor.major}</p>
          <p className="list__bx--desc-type">{cardinfor.type}</p>
          <p className="list__bx--desc-datetime">{cardinfor.time}</p>
        </div>
        <div className="list__bx--progress">
          <p>Progress</p>
          <div className="list__bx--progress-line">
            <div className="list__bx--progress-line-offset" style={style}></div>
          </div>
          <span>{cardinfor.progress} %</span>
        </div>
        <div className="list__bx--time">
          <div className="list__bx--time-team">
            {cardinfor.team &&
              Array.isArray(cardinfor.team) &&
              cardinfor.team.map(
                (
                  t:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined,
                  i: React.Key | null | undefined
                ) => {
                  return <span key={i}>{t}</span>
                }
              )}
          </div>
          <div className="list__bx--time-deadline">
            {(cardinfor.deadline || 0) > 1
              ? cardinfor.deadline + ' days left'
              : cardinfor.deadline + ' day left'}
          </div>
        </div>
      </div>
    )
  }

export default AdvancedCard
