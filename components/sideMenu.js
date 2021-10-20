
//   <li class="menu__item active">
//   <a href="./dashboard.html" target="_blank" rel="noopener noreferrer">
//       <div class="menu__icon">
//       <ion-icon name: "wallet-outline"></ion-icon>
//   </div>
//       <p>Dashboard</p>
//   </a>
// </li>
// <li class="menu__item">
//   <a href="./market.html" target="_blank" rel="noopener noreferrer">
//       <div class="menu__icon">
//       <ion-icon name: "stats-chart-outline"></ion-icon>
//   </div>
//       <p>Market</p>
//   </a>
// </li>
// <li class="menu__item">
//   <a href="./payment.html" target="_blank" rel="noopener noreferrer">
//       <div class="menu__icon">
//       <ion-icon name: "card-outline"></ion-icon>
//   </div>
//       <p>Deposit/Withdrawal</p>
//   </a>
// </li>
// <li class="menu__item">
//   <a href="./history.html" target="_blank" rel="noopener noreferrer">
//       <div class="menu__icon">
//       <ion-icon name: "calendar-outline"></ion-icon>
//   </div>
//       <p>Transactions History</p>
//   </a>
// </li>
// <li class="menu__item">
//   <a href="./accounts.html" target="_blank" rel="noopener noreferrer">
//       <div class="menu__icon">
//           <ion-icon name: "business-outline"></ion-icon>
//   </div>
//       <p>Accounts</p>
//   </a>
// </li>
// <li class="menu__item">
//   <a href="./profile.html" target="_blank" rel="noopener noreferrer">
//       <div class="menu__icon">
//       <ion-icon name: "settings-outline"></ion-icon>
//   </div>
//       <p>Settings</p>
//   </a>
// </li>

import styles from '../styles/sideMenu.module.css'
import SideMenuItem from './sideMenuItem'

  
export default function SideMenu() {
  const menuItems = [
    {
      name:"Dashboard",
      desc:"Dashboard",
      icon:"wallet"
    },
    {
      name: "Market",
     desc: "Market",
      icon: "wallet"
    },
    {
    name: "Funds", 
    desc: "Deposit/Withdraw",
    icon: "wallet"
    },
    {
      name: "History",
      desc: "Transaction History",
      icon: "wallet"
    },
    {
      name: "Accounts",
      desc: "Add Accounts",
      icon: "wallet"
    },
    {
      name: "Settings",
      desc: "Settings",
      icon: "wallet"
    }
  ]
  
    return <aside className= {styles.menuContainer}>
            <ul className= {styles.menu}>
             { menuItems.map(menuItem=>{
               let element = <SideMenuItem name={menuItem.name} desc={menuItem.desc} icon={menuItem.icon}/>
                  return element
            })}
   
            </ul>
        </aside>
    
  }
  