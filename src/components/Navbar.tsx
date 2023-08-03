'use client'

import Link from 'next/link'
import { UserButton, useUser } from "@clerk/nextjs"
import { IoPlanetOutline } from "react-icons/io5"
import Navuser from './skeletons/Navuser'
import RouteLogout from './routeLogout'

const Navbar = () => {
  const user = useUser()
  return (
    <nav className='flex justify-between items-center'>
      <Link href='/' className=' flex gap-2 p-4 items-center'>
        <IoPlanetOutline className='text-3xl text-blue-500 font-bold' />
        <h1 className='font-bold text-blue-500'>NoteSpace</h1>
      </Link>
      {!user.isLoaded
        ? <Navuser />
        : (user.isSignedIn
          ? <ul className='flex gap-2 items-center font-sans font-medium'>
            <li>
              <Link href='/dashboard'>Dashboard</Link>
            </li>
            <li className='p-4'>
              <UserButton afterSignOutUrl='/' />
            </li>
          </ul>
          : <RouteLogout class='' />
        )
      }
    </nav>
  )
}

export default Navbar