

     
import Link from 'next/link'
import tableStyles from '../styles/table.module.css'
export default function AccountsTableItem(props) {

    return   <tr className={tableStyles.tr}>
    <td className={tableStyles.td}>{props.accountNumber}</td>
    <td className={tableStyles.td}>{props.accountName}</td>
    <td className={tableStyles.td}>{props.bankName}</td>
    <td className={tableStyles.td}>{props.routingNumber == "" ? "Unavailable" : props.routingNumber}</td>
  </tr>
 
  }
