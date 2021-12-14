

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
    		      <svg class={`w-6 h-6 ${state ? "text-primary-accent" : "text-white"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>

    </div>
    </div>
  }
