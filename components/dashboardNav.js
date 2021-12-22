import styles from '../styles/dashboardLayout.module.css'
import HamMenu from './hamMenu'
import Link from 'next/link'
import AuthService from "../services/auth.service"
import AdminService from "../services/admin.service"
import { useRouter } from 'next/router'

export default function DashboardNav({menuIsOpen, setMenuIsOpen}) {
  const handleLogout = ( props ) => {
     const router = useRouter()

     if (props.admin) {
      AdminService.logout();
    } else {
    AuthService.logout();
    }
    router.replace("/")
  }
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