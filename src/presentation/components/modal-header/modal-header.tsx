import React from 'react'
import CloseButton from '../close-button/close-button'
import Styles from './modal-header-styles.scss'

type Props = React.HTMLAttributes<HTMLElement>

const ModalHeader: React.FC<Props> = (props: Props) => {
  return (
    <header className={Styles.header}>
      <h1 {...props} className={Styles.title}>{props.title}</h1>
      <CloseButton />
    </header>
  )
}

export default ModalHeader
