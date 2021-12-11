

     import MenuList from './menuList'
import Link from 'next/link'
import hamMenuStyles from '../../styles/hamMenu.module.css'
export default function HamMenu({ state, setState, useMenu=false }) {
		let toggle = ()=>{
			setState(!state)
		}
    return   <div className="flex">

    	<div className={state ? hamMenuStyles.hamOpen : hamMenuStyles.ham}
    	onClick={toggle}
    >
    		<div className={hamMenuStyles.hamMenuLine}></div>
    		<div className={hamMenuStyles.hamMenuLine}></div>
    		<div className={hamMenuStyles.hamMenuLine}></div>

    </div>
    </div>
  }
