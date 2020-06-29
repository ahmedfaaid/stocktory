import SummaryCard from '../SummaryCard/SummaryCard'
import LineChart from '../LineChart/LineChart'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  const cards = [
    {
      name: 'products',
      total: 15
    },
    {
      name: 'sales',
      total: 3
    },
    {
      name: 'orders',
      total: 6
    }
  ]

  return (
    <div className={styles.dashboard_container}>
      <div className={styles.dashboard_contentBox}>
        {cards.map(card => (
          <SummaryCard key={card.name} name={card.name} total={card.total} />
        ))}
      </div>
      <div className={styles.dashboard_chart}>
        <LineChart series='sales' />
        <LineChart series='stock' />
      </div>
    </div>
  );
}
