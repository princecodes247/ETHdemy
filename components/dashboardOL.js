import styles from '../styles/dashboardLayout.module.css'

import DashboardSection from './dashboardSection'
import DashboardOlItem from './dashboardOlItem'
export default function DashboardOL(props) {
    return <ol className={styles.asset_list}>

            { props.listItems.map(item=>{
               let element =  <DashboardOlItem item={item}/>
                  return element
            })}

   
   
</ol>
      
  }
  