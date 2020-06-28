import styles from './PageHeading.module.css'

export default function PageHeading({ heading }) {
  return (
    <div className={styles.heading_box}>
      <h1 className={styles.heading_text}>{heading}</h1>
    </div>
  )
}