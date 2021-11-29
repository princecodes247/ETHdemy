
import Link from 'next/link'
import styles from '../styles/dashboardLayout.module.css'
import { useRouter } from 'next/router'
export default function DashboardOlItem(props) {

    return   <li className={styles.asset}>
        
    <div className={styles.asset__text}>
        <p className={styles.asset__name}>
            {props.item.name}
        </p>
        <p className={styles.asset__price}>{props.item.marketCap}</p>
    </div>
    <div className={styles.asset__change}>
        <p>+21%</p>
    </div>
    <div className={styles.asset__graph}>LLL</div>
</li>
  }