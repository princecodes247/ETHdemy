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
import { useRouter } from 'next/router'
export default function SideMenuItem(props) {
    const router = useRouter()
     const url = router.asPath
     const {id} = router.query
     let currPage = url.split("/")[3]
     currPage = currPage ? currPage : "dashboard"
     let target = props.name.toLowerCase()
     if (target === "dashboard") {
         target = ""
     }else if (target === "deposit/withdraw") {
        target = "funds"
    } else if (target === "transaction history") {
        target = "history"
    } else if (target === "add accounts") {
        target = "accounts"
    }
    return <Link href={{
            pathname: "/user/[id]/"+target,
            query: {id}
            }} passHref target="_blank" rel="noopener noreferrer">
    <li className={`${styles.menu__item} ${props.name.toLowerCase() === currPage.toLowerCase() ? styles.menu__item_active : ""}`}>
        <div className={styles.menu__icon}>
        <ion-icon name="{props.icon}-outline"></ion-icon>
    </div>
        <p>{props.desc}</p>
    </li>
    </Link>
    
  }