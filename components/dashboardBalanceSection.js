import styles from '../styles/dashboardLayout.module.css'

import DashboardSection from './dashboardSection'

export default function DashboardBalanceSection(props) {
    return <DashboardSection name="Wallet Details" sect="income_summary">
    <div className={styles.summary}>
         <div className={styles.summary__details}>
          <p>Investments: $1399</p>
          <p>Today{`'`}s Profit: $1399</p>
         </div>
          <div className={styles.summary__balance}>
              <p>Your Balance is </p>
              <p className={styles.summary__balance_big}>$140</p>
          </div>
      </div>
</DashboardSection>
      
  }
  