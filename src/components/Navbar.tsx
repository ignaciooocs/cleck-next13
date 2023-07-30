import Link from 'next/link'
import { UserButton } from "@clerk/nextjs"
import { IoPlanetOutline } from "react-icons/io5";

const routes = [
  { title: 'Home', href: '/' },
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'About', href: '/about' }
]

const Navbar = () => {
  return (
    <header className='border-2 fixed w-full t-0 transparent'>
      <nav className='flex justify-between'>
        <div className='p-4'>
          <IoPlanetOutline className='text-3xl text-blue-500 font-bold' />
        </div>
        <ul className='flex gap-4 items-center font-sans font-medium'>
          {routes.map((rute) => (
            <li key={rute.title}>
              <Link href={rute.href}>{rute.title}</Link>
            </li>
          ))}
        <div className='p-4'>
        <UserButton />
        </div>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar