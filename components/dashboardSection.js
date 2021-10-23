import styles from '../styles/dashboardLayout.module.css'

export default function DashboardSection(props) {
    return  <section className={`${styles.sect} ${styles[`sect_${props.sect}`]}`} >
    <h3>{props.name}</h3>
    {props.children}
</section>
  }
  