import React from 'react'
import './style.scss'
interface CardProps {
  infors: {
    id: number | string,
    img: string,
    name: string,
    content: string,
    city: string,
    time: string,
  }
  children?: JSX.Element | JSX.Element[]
}
const Card: React.FC<CardProps> = ({ infors, children }) => {
  return (
    <div className="l-tab__bx">
      <div className="l-tab__bx--head">
        <div className="img-wrap">
          <img src={infors.img} alt="Hello World" />
        </div>
        <div className="name-person">{infors.name}</div>
      </div>
      <div className="l-tab__bx--content">{infors.content}</div>
      <div className="l-tab__bx--extra">
        <div className="extra-l">
          {infors.city}
          {children}
        </div>
        <div className="extra-r">
          {infors.time}
        </div>
      </div>
    </div>
  )
}

export default Card
