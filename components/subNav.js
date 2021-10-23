import styles from '../styles/sub_nav.module.css'

export default function SubNav(props, { children }) {

    return  <nav className={styles.sub_nav}>
        {
            props.items.map(item=>{

                let element = <div className={styles.sub_nav__item}>{item.name}</div>
                return element
            })
        }
    </nav>
  }
  