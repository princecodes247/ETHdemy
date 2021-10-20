import styles from '../styles/dashboardLayout.module.css'

import Link from 'next/link'

export default function DashboardNav({ children }) {
    return <header className={styles.dashboardNav}>
    <Link href="" passHref>
        <div className={styles.profile}>
        <div className={styles.profile__pic}></div>
        <div className={styles.profile__name}>
            <p>John Doe</p>
        </div>
        </div>
    </Link>
    <div className="waves-effect waves-light btn">Log Out</div>
</header>

    
  }