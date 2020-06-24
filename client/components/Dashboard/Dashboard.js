import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxes,
  faCreditCard,
  faTruckLoading,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  return (
    <div>
      <div className={styles.dashboard_headingBox}>
        <h1 className={styles.dashboard_headingText}>My Dashboard</h1>
      </div>
      <div className={styles.dashboard_contentBox}>
        <div className={`${styles.dashboard_card} ${styles.card_green}`}>
          <div className={styles.dashboard_cardData}>
            <span className={styles.card_number}>15</span>
            <span className={styles.card_text}>Products</span>
          </div>
          <FontAwesomeIcon icon={faBoxes} className={styles.card_icon} />
        </div>
        <div className={`${styles.dashboard_card} ${styles.card_blue}`}>
          <div className={styles.dashboard_cardData}>
            <span className={styles.card_number}>3</span>
            <span className={styles.card_text}>Sales</span>
          </div>
          <FontAwesomeIcon icon={faCreditCard} className={styles.card_icon} />
        </div>
        <div className={`${styles.dashboard_card} ${styles.card_orange}`}>
          <div className={styles.dashboard_cardData}>
            <span className={styles.card_number}>6</span>
            <span className={styles.card_text}>Orders</span>
          </div>
          <FontAwesomeIcon icon={faTruckLoading} className={styles.card_icon} />
        </div>
      </div>
    </div>
  );
}
