
import Link from 'next/link'
import styles from '../styles/sideMenu.module.css'
import { useRouter } from 'next/router'
export default function SideMenuItem(props) {
    const router = useRouter()
     const url = router.asPath
     let currPage = url.split("/")[2]
     currPage = currPage ? currPage : "dashboard"
     let target = props.name.toLowerCase()
     if (target === "dashboard") {
         target = ""
     }else if (target === "deposit") {
        target = "deposit"
    }else if (target === "withdraw") {
        target = "withdraw"
    }
     else if (target === "transaction history") {
        target = "history"
    } else if (target === "add accounts") {
        target = "accounts"
    }
    return <Link href={{
            pathname: "/user/"+target
            }} passHref target="_blank" rel="noopener noreferrer">
    <li className={`${styles.menu__item} ${props.name.toLowerCase() === currPage.toLowerCase() ? styles.menu__item_active : ""}`}>
        <div className={styles.menu__icon}>
        <ion-icon name="{props.icon}-outline"></ion-icon>
    </div>
        <p>{props.desc}</p>
    </li>
    </Link>
    
  }