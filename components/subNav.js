import styles from '../styles/dashboardLayout.module.css'

export default function SubNav(props, { children }) {

    return  <nav>
        {
            props.items.map(item=>{

                <div className="sub_nav__item">{item.name}</div>
            })
        }
    </nav>
  }
  