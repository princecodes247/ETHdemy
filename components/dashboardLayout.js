import styles from '../styles/dashboardLayout.module.css'
 import { useState, useEffect } from "react"
import SideMenu from './sideMenu'
import DashboardNav from './dashboardNav'

export default function DashboardLayout({ children }) {
	let [menuIsOpen, setMenuIsOpen] = useState(false)
    return <div className={styles.mainContainer}>
      <SideMenu menuIsOpen={menuIsOpen}></SideMenu>
      <main className={styles.main}>
        <DashboardNav menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>
      {children}
      </main>
      </div>
  }
  