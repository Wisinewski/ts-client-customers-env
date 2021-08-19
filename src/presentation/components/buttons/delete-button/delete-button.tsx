import React, { memo } from 'react'
import Styles from './delete-button-styles.scss'

const DeleteButton: React.FC = () => {
  return (
    <button className={Styles.deleteButton}>
      <i className="fas fa-trash-alt"></i>
    </button>
  )
}

export default memo(DeleteButton)
