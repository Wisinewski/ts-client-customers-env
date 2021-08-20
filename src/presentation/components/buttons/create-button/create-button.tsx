import React from 'react'
import Styles from './create-button-styles.scss'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const CreateButton: React.FC<Props> = (props: Props) => {
  return (
    <button {...props} data-testid="createButton" className={Styles.createButton}>
      <i className="fas fa-plus-circle"></i>
    </button>
  )
}

export default CreateButton
