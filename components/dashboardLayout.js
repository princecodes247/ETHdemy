import styles from '../styles/dashboardLayout.module.css'

import SideMenu from './sideMenu'
import DashboardNav from './dashboardNav'

export default function DashboardLayout({ children }) {
    return <div className={styles.container}>
      <SideMenu></SideMenu>
      <main>
        <DashboardNav></DashboardNav>
      {children}
      </main>
      </div>
  }
  