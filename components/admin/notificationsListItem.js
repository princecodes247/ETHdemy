
import DashboardSection from '../dashboardSection'

import tableStyles from '../../styles/table.module.css'

export default function UsersListItem(props) {



    return <tr className={tableStyles.tr}>
    <a href={`/admin/view?id=${props._id}`}>
      <td className={tableStyles.td}>
      <p className="whitespace-nowrap text-center">{props.fullName}</p>
      <p  className="whitespace-nowrap text-xs text-center">Full Name</p>
    </td>
     <td className={tableStyles.td}>
      <p className="whitespace-nowrap text-center">${props.deposits}</p>
      <p  className="whitespace-nowrap text-xs text-center">Deposits</p>
    </td>
     <td className={tableStyles.td}>
      <p className="whitespace-nowrap text-center">${props.balance.currBalance}</p>
      <p  className="whitespace-nowrap text-xs text-center">Balance</p>
    </td>
    <td className={tableStyles.td}>
      <p className="whitespace-nowrap text-center">{props.phone}</p>
      <p  className="whitespace-nowrap text-xs text-center">Phone Number</p>
    </td>
     <td className={tableStyles.td}>
      <p className="whitespace-nowrap text-center">{props.country}</p>
      <p  className="whitespace-nowrap text-xs text-center">Country</p>
    </td>
    </a>
    
  </tr>
 
  }
  