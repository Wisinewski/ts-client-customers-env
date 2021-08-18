import React from 'react'
import Styles from './create-button-styles.scss'

const CreateButton: React.FC = () => {
  return (
    <button className={Styles.createButton}>
      <i className="fas fa-plus-circle"></i>
    </button>
  )
}

export default CreateButton
