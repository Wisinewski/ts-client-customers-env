import React from 'react'
import Styles from './close-button-styles.scss'

const CloseButton: React.FC = () => {
  return (
    <button className={Styles.closeButton}>
      <i className="fas fa-times"></i>
    </button>
  )
}

export default CloseButton
