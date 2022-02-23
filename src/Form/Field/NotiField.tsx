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
  '--notiWarnColor': string,
  '--notiSuccessColorBg': string,
  '--notiErrorColorBg': string,
  '--notiWarnColorBg': string
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
    '--notiSuccessColorBg': colors.noti.success + '70',
    '--notiErrorColorBg': colors.noti.error + '70',
    '--notiWarnColorBg': colors.noti.warn + '70',
  } as MyCustomCSS
  return (
    <span className={notiClass} style={styles}>{title}</span>
  )
}

export default NotiField
