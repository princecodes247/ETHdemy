
import Link from 'next/link'
import styles from '../styles/dashboardLayout.module.css'
import { useRouter } from 'next/router'
export default function HistoryListItem(props) {

    return   <li className={styles.asset}>
        
    <div className={styles.asset__text}>
        <p className={styles.asset__name}>
            {props.item.targetAcc}
        </p>
        <p className={styles.asset__price}>
            {props.item.transDate}
        </p>
    </div>    
    <div className={styles.asset__text}>
        <p className={styles.asset__name}>
            {props.item.transType}
        </p>
        
    </div>
    <div className={styles.asset__change}>
        <p>{props.item.amount}</p>
        <p>{props.item.status}</p>
    </div>
    
</li>
  }