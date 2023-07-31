import { Link } from "@mui/material"

const RouteLogout = (props: { class: string }) => {

  const routeslogout = [
    { title: 'Sign up', href: '/sign-up', style: 'bg-slate-100', color: 'rgb(59, 130, 246)'},
    { title: 'Sign in', href: '/sign-in', style: 'bg-blue-500', color: 'rgb(255,255,255)' }
  ]

  return (
    <ul className={`flex gap-4 items-center justify-center py-2 px-2 ${props.class}`}>
      {routeslogout.map((rute) => (
        <li className={`py-1 px-3 h-3/4 text-sm font-sans font-medium rounded-lg ${rute.style} text-white`} key={rute.title}>
          <Link underline="none" color={rute.color} href={rute.href}>{rute.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default RouteLogout