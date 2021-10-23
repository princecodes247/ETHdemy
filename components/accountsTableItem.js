

     
import Link from 'next/link'
import tableStyles from '../styles/table.module.css'
export default function AccountsTableItem(props) {

    return   <tr className={tableStyles.tr}>
    <td className={tableStyles.td}>{props.id}</td>
    <td className={tableStyles.td}>{props.type}</td>
    <td className={tableStyles.td}>{props.option}</td>
    <td className={tableStyles.td}>{props.routing == "" ? "Unavailable" : props.routing}</td>
  </tr>
 
  }