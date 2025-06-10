import Link from 'next/link'
import React from 'react'


export interface NavItemProps {
    id: number,
    title: string,
    slug: string
}

function NavItem({id,title,slug}:NavItemProps) {
    return (
        <li>
            <Link href={slug} >{title}</Link>
        </li>
    )
}

export default NavItem