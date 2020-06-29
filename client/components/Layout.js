import Head from 'next/head'
import styles from './Layout.module.css'
import Sidebar from './Sidebar/Sidebar'
import PageHeading from './PageHeading/PageHeading'

export default function Layout({ children, title, heading }) {
  return (
    <>
      <Head>
        <title>{title} | Stocktory</title>
      </Head>
      <div className={styles.layout_container}>
        <Sidebar />
        <main className={styles.layout_main}>
          <PageHeading heading={heading} />
          {children}
        </main>
      </div>
    </>
  )
}