import { menuItems } from '@/lib/menu-tems'
import React from 'react'
import NavItem from './nav-item'

function Nav() {
  return (
    <div>
        <nav>
            <ul className='flex justify-center mb-6'>
                {menuItems.map((e)=>{
                    return(
                        <NavItem key={e.id} {...e}/>
                    )
                })}
            </ul>
        </nav>
    </div>
  )
}

export default Nav