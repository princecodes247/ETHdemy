import styles from '../styles/dashboardLayout.module.css'

import SideMenu from './sideMenu'
import DashboardNav from './dashboardNav'

export default function DashboardLayout({ children }) {
    return <div className={styles.mainContainer}>
      <SideMenu></SideMenu>
      <main className={styles.main}>
        <DashboardNav></DashboardNav>
      {children}
      </main>
      </div>
  }
  