import PageHeading from '../PageHeading/PageHeading'
import styles from './Products.module.css'

export default function Products() {
  return (
    <div className={styles.products_container}>
      <PageHeading heading='My Products' />
      <h2>Products</h2>
    </div>
  )
}