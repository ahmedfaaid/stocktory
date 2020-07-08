import styles from './Products.module.css'
import products from '../../productData'

export default function Products() {
  return (
    <div className={styles.products_container}>
      <div className={styles.products_list}>
        <table className={styles.products_table}>
          <thead>
            <tr className={styles.table_head}>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map(product => (
                <tr>
                  <td>{product.id}</td>
                  <td>{product.productName}</td>
                  <td>{product.price.toFixed(2)}</td>
                  <td>{product.quantity}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      {/* {products.map(product => (
        <div key={product.id} className={styles.products_card}>
          <h3 className={styles.productName}>{product.productName}</h3>
          <div className={styles.detail_box}>
            <p className={styles.price}>Unit Price: <span className={styles.value}>${product.price}</span></p>
            <p className={styles.quantity}>Quantity: <span className={styles.value}>{product.quantity}</span></p>
          </div>
        </div>
      ))} */}
    </div>
  )
}