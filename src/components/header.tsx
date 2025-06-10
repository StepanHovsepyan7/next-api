import Link from 'next/link'
import React from 'react'
import Nav from './nav'
import Search from './search'

function Header() {
    return (
        <div className='w-full m-auto'>
            <div className='flex justify-around items-center text-[20px] bg-black w-full text-white h-[50px]'>
                <div>
                    <Link href={'/'}>Logo</Link>
                </div>
                <Nav />
            </div>
            
        </div>
    )
}

export default Header