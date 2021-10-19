{/* <li class="menu__item active">
<a href="./dashboard.html" target="_blank" rel="noopener noreferrer">
    <div class="menu__icon">
    <ion-icon name="wallet-outline"></ion-icon>
</div>
    <p>Dashboard</p>
</a>
</li> */}
import Link from 'next/link'
import styles from '../styles/sideMenu.module.css'

export default function SideMenuItem(props) {
    return <Link href="./dashboard.html" target="_blank" rel="noopener noreferrer">
    <li className={styles.menu__item}>
        <div className="menu__icon">
        <ion-icon name="{props.icon}-outline"></ion-icon>
    </div>
        <p>{props.name}</p>
    </li>
    </Link>
    
  }