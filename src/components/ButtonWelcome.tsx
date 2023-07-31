'use client'
import { IoExitOutline } from "react-icons/io5"
import { useState } from 'react'
import RouteLogout from "./routeLogout"
import { useUser } from '@clerk/nextjs'
import { Link } from "@mui/material"

const ButtonWelcome = () => {
  const [active, setactive] = useState(false)
  const user = useUser()

  return (
    <div className='flex justify-center row-start-3 row-end-5 col-start-1 col-end-3'>
      <button onClick={() => setactive(!active)} className='relative z-10 flex items-center gap-2 bg-blue-500 text-white rounded-lg px-4 py-2'>
        Comenzar
        <IoExitOutline className='text-md font-bold' />
        {active &&
        <div className="shadow-md shadow-slate-300 flex justify-center items-center bg-white rounded-lg py-4 px-3 absolute bottom-12 -right-16">
        {!user.isSignedIn ? <RouteLogout class='flex-col' /> : <Link href='/dashboard' color='rgb(255,255,255)' underline='none' className='bg-blue-500 text-white rounded-lg px-4 py-2'>my space</Link>}
        </div>
        }
      </button>
    </div>
  )
}

export default ButtonWelcome