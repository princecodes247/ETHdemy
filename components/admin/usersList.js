import tableStyles from '../../styles/table.module.css'

import DashboardSection from '../dashboardSection'

import UsersListItem from './usersListItem'


export default function UsersList(props) {
    let mockUsersList = [
      {
        fullName:"John JOhn",
        country: "Austrailia",
        phone: "09011209823",
        deposits: "3002",
        balance: "8883"
          }
    ]
    mockUsersList = []


    return <div>
           <div className="w-full flex justify-between mb-3">
            <h6 className="whitespace-nowrap">Users</h6>
<select className="text-black p-2 rounded" name="" id="">
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Deposits">Most Deposits</option>
          <option value="Country">Country</option>
          <option value="Balance">Highest Balance</option>
        </select> 
          </div>
   

    <div className="p-3 max-w-sm overflow-x-scroll">
   
    <table className={tableStyles.table}>
          
    <thead>
    <th>
      
    </th>
    </thead>
          <tbody>
      {
        props.usersList.map(user => {
              return (<UsersListItem {...user}/>)
            })
          }
          </tbody>
           
   
  </table>
  </div>
 </div>  
 
  }
  