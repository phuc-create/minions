import React from 'react'
import classnames from 'classnames'
import { colorsInfor as colors } from '../../Utils'
import './style.scss'

interface NotiFieldProps {
  type: 'error' | 'success' | 'warn',
  title: string
}

interface MyCustomCSS extends React.CSSProperties {
  '--notiSuccessColor': string,
  '--notiErrorColor': string,
  '--notiWarnColor': string
}
const NotiField: React.FC<NotiFieldProps> = ({ type, title }) => {
  const notiClass = classnames('notification', {
    'noti-error': type === 'error',
    'noti-success': type === 'success',
    'noti-warn': type === 'warn'
  })
  const styles = {
    '--notiSuccessColor': colors.noti.success,
    '--notiErrorColor': colors.noti.error,
    '--notiWarnColor': colors.noti.warn,
  } as MyCustomCSS
  return (
    <span className={notiClass} style={styles}>{title}</span>
  )
}

export default NotiField
