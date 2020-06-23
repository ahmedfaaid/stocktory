import styles from './Layout.module.css'
import Sidebar from './Sidebar/Sidebar'

export default function Layout({ children }) {
  return (
    <div className={styles.layout_container}>
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}