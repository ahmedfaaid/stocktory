import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxes,
  faCreditCard,
  faTruckLoading,
} from '@fortawesome/free-solid-svg-icons';
import styles from './SummaryCard.module.css'

export default function SummaryCard({ name, total }) {
  const [cardColor, setCardColor] = useState('')
  const [cardIcon, setCardIcon] = useState()

  useEffect(() => {
    if (name === 'products') {
      setCardColor(styles.card_green)
      setCardIcon(faBoxes)
    }
  
    if (name === 'sales') {
      setCardColor(styles.card_blue)
      setCardIcon(faCreditCard)
    }
  
    if (name === 'orders') {
      setCardColor(styles.card_orange)
      setCardIcon(faTruckLoading)
    }
  }, [name])

  return (
    <div className={`${styles.summary_card} ${cardColor}`}>
      <div className={styles.summary_cardData}>
        <span className={styles.card_number}>{total}</span>
        <span className={styles.card_text}>{name}</span>
      </div>
      <FontAwesomeIcon icon={cardIcon} className={styles.card_icon} />
    </div>
  )
}