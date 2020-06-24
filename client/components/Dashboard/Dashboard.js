import SummaryCard from '../SummaryCard/SummaryCard'
import styles from './Dashboard.module.css';

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
    <div>
      <div className={styles.dashboard_headingBox}>
        <h1 className={styles.dashboard_headingText}>My Dashboard</h1>
      </div>
      <div className={styles.dashboard_contentBox}>
        {cards.map(card => (
          <SummaryCard name={card.name} total={card.total} />
        ))}
      </div>
    </div>
  );
}
