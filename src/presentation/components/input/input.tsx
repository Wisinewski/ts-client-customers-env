import React from 'react'
import Styles from './input-styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }
  return (
    <div className={Styles.inputWrapper}>
      <label htmlFor={props.name}>{props.title}</label>
      <input {...props} readOnly onFocus={enableInput} />
    </div>
  )
}

export default Input
