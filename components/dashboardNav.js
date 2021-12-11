import styles from '../styles/dashboardLayout.module.css'
import HamMenu from './hamMenu'
import Link from 'next/link'
import authApi2 from "../services/auth.service"

  const handleLogout = () => {
    authApi2.logOut();
  }
export default function DashboardNav({menuIsOpen, setMenuIsOpen}) {
    return <header className={`${styles.dashboardNav} ${menuIsOpen ? styles.open : ""}`}>
    <Link href="" passHref>
        <div className={ styles.profile}>
            <div className={styles.profile__pic}></div>
            <div className={styles.profile__name}>
                <p>John Doe</p>
            </div>
        </div>
    </Link>
    <div className="waves-effect waves-light btn btn--log_out"
        onClick={handleLogout}
    >Log Out</div>
    <HamMenu state={menuIsOpen} setState={setMenuIsOpen}/>
</header>

    
  }