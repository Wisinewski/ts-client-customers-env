import React, { memo } from 'react'
import Styles from './update-button-styles.scss'

const UpdateButton: React.FC = () => {
  return (
    <button className={Styles.updateButton}>
      <i className="fas fa-edit"></i>
    </button>
  )
}

export default memo(UpdateButton)
