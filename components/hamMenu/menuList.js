 
import Link from 'next/link'
import hamMenuStyles from '../../styles/hamMenu.module.css'
export default function MenuList({ state }) {
		
    return   <div className={state ? hamMenuStyles.menuOpen : hamMenuStyles.menu}>

    		<ul>
    			<li>Home</li>
    			<li>About</li>
    			<div className="p-1 bg-white w-full"></div>
    			<li>Sign Up</li>
    			<li>Log In</li>
    		</ul>	
    </div>
 
  }
