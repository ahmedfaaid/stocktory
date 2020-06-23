import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faBoxes, faCreditCard, faTruckLoading } from '@fortawesome/free-solid-svg-icons'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.user_box}>
        <h2 className={styles.user_name}>Admin</h2>
      </div>
      <hr className={styles.separator} />
      <nav className={styles.navigation}>
        <ul className={styles.navigation_list}>
          <li className={styles.navigation_listItem}>
            <Link href='/'>
              <a className={styles.link}>
                <FontAwesomeIcon icon={faClipboard} className={styles.icon} />
                Dashboard
              </a>
            </Link>
          </li>
          <li className={styles.navigation_listItem}>
            <Link href='/products'>
              <a className={styles.link}>
                <FontAwesomeIcon icon={faBoxes} className={styles.icon} />
                Products
              </a>
            </Link>
          </li>
          <li className={styles.navigation_listItem}>
            <Link href='/sales'>
              <a className={styles.link}>
                <FontAwesomeIcon icon={faCreditCard} className={styles.icon} />
                Sales
              </a>
            </Link>
          </li>
          <li className={styles.navigation_listItem}>
            <Link href='/orders'>
              <a className={styles.link}>
                <FontAwesomeIcon icon={faTruckLoading} className={styles.icon} />
                Orders
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}