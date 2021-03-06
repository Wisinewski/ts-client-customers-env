import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }
  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    if (props.type === 'checkbox') {
      setState({
        ...state,
        [event.target.name]: !state[props.name]
      })
    } else {
      setState({
        ...state,
        [event.target.name]: event.target.value
      })
    }
  }

  const getStatus = (): string => {
    if (props.type === 'checkbox') return 'ℹ️'
    if (state[props.name] === '') return 'ℹ️'
    return error ? '❌' : '✔️'
  }

  const getTitle = (): string => {
    return error || 'OK'
  }

  return (
    <div className={Styles.inputWrapper}>
      <label htmlFor={props.name}>{props.title}</label>
      <input {...props} data-testid={props.name} readOnly onFocus={enableInput} onChange={handleChange} />
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input
