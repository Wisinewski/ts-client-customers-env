import React, { memo } from 'react'
import Styles from './add-button-styles.scss'

const AddButton: React.FC = () => {
  return (
    <button className={Styles.addButton}>
      <i className="fas fa-plus"></i>
    </button>
  )
}

export default memo(AddButton)
