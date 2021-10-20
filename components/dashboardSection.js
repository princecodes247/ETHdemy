import styles from '../styles/dashboardLayout.module.css'

export default function DashboardSection(props, { children }) {
    return  <section className="sect sect--income_summary">
    <h3>{props.name}</h3>
    {children}
</section>
  }
  