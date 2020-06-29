import Layout from '../components/Layout'
import Orders from '../components/Orders/Orders'

export default function OrdersPage() {
  return (
    <Layout title='Orders' heading='My Orders'>
      <Orders />
    </Layout>
  )
}