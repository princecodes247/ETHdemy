
import styles from '../styles/sideMenu.module.css'
import SideMenuItem from './sideMenuItem'

import AdminService from "../services/admin.service"
import AuthService from "../services/auth.service"

import { useRouter } from 'next/router'
  



export default function SideMenu(props) {
  const router = useRouter()
  const handleLogout = () => {
    if (props.admin) {
      AdminService.logout();
    } else {
    AuthService.logout();
    }
    router.replace("/")
  }
  let menuItems = [
    {
      name:"Dashboard",
      desc:"Dashboard",
      icon:"wallet"
    },
    {
      name: "Market",
     desc: "Buy Bitcoins",
      icon: "wallet"
    },
    {
    name: "Withdraw", 
    desc: "Withdraw",
    icon: "wallet"
    },
    {
    name: "Deposit", 
    desc: "Deposit",
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
  if (props.admin) {
     menuItems = [
    {
      name:"Dashboard",
      desc:"Dashboard",
      icon:"wallet"
    },
    {
      name:"Settings",
      desc:"General Settings",
      icon:"wallet"
    },
    ]
  }
    return <aside className={`${styles.menuContainer} ${props.menuIsOpen ? styles.open: ""}`}>
            <ul className= {styles.menu}>
             { menuItems.map(menuItem=>{
               let element = <SideMenuItem name={menuItem.name} desc={menuItem.desc} icon={menuItem.icon}/>
                  return element
            })}
        
    <li className={`${styles.menu__item}`}
      onClick={handleLogout}
    >
        <div className={styles.menu__icon}>
        <ion-icon name="-outline"></ion-icon>
    </div>
        <p>Logout</p>
    </li>

            </ul>
        </aside>
    
  }
  