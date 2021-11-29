import styles from '../styles/dashboardLayout.module.css'

import DashboardSection from './dashboardSection'
import HistoryListItem from './historyListItem'
export default function HistoryList(props) {
	let listItems = props.listItems || ["text"]
    return <ol className={styles.asset_list}>

            { listItems.map(item=>{
               let element =  <HistoryListItem item={item}/>
                  return element
            })}
	

   
   
</ol>
      
  }
  