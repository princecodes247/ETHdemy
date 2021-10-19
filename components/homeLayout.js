import styles from '../styles/dashboardLayout.module.css'

export default function DashboardLayout({ children }) {
    return <div className={styles.container}>{children}</div>
  }
  