import styles from './Header.module.css'
import HamMenu from '../hamMenu'
import DropDownMenu from '../DropDownMenu'
import { useState, useEffect } from "react"
  const Header = (props) => {
let [menuIsOpen, setMenuIsOpen] = useState(false)
    return <header className={styles.header}>
          <div className={styles.nav}>
            <div className="flex-1">ETHdemy</div>
            <ul className={"gap-8 hidden md:flex"}>
              <li className
              ={styles.nav_link}>Home</li>
              <li className={styles.nav_link}>Home</li>
              <li className={styles.nav_link}>Home</li>
            </ul>
          </div>
          <div className="hidden md:flex gap-5">
            <a href="/login" className="px-2 py-2 rounded">Sign In</a>
            <a href="/signup" className="px-2 py-2 bg-primary-accent rounded">Sign Up</a>
          </div>
          <div className="hidden md:flex gap-5">
            <a href="/login" className="px-2 py-2 rounded">P</a>
            
          </div>
          <div className="md:flex gap-5">
            <a href="/login" className="px-2 py-2 rounded">C</a>
            
          </div>
          <HamMenu state={menuIsOpen} setState={setMenuIsOpen} />
          <DropDownMenu state={menuIsOpen} />
        </header>
  }

  export default Header;