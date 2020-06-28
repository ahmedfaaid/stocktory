import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import moment from 'moment'
import { dateArray } from '../../util'
import styles from './LineChart.module.css'

// TODO: Make selection for different time ranges

export default function LineChart({ series }) {
  const [data, setData] = useState([])

  const salesData = [11, 5, 4, 18, 8, 14, 6]
  const stockData = [131, 117, 104, 106, 150, 93, 118]

  useEffect(() => {
    if (series === 'sales') {
      setData(salesData)
    }
  
    if (series === 'stock') {
      setData(stockData)
    }
  }, [series])

  const dates = dateArray()
  
  const chartConfig = {
    options: {
      chart: {
        id: 'basic-line',
        toolbar: {
          show: false
        }
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: dates
      },
      yaxis: {
        min: 0
      }
    },
    series: [
      {
        name: series,
        data
      }
    ]
  }

  return (
    <div className={styles.chart_container}>
      <h3 className={styles.chart_heading}>{`${series.toUpperCase()} CHART`}</h3>
      <Chart
        options={chartConfig.options}
        series={chartConfig.series}
        type='line'
      />
    </div>
  )
}