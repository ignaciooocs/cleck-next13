import { authMiddleware } from '@clerk/nextjs'

if (typeof process.env.ADD !== 'string') throw new Error('La variable de entorno no se configuró correctamente')
if (typeof process.env.GET !== 'string') throw new Error('La variable de entorno no se configuró correctamente')

export default authMiddleware({

  ignoredRoutes: [process.env.ADD, process.env.GET],
  publicRoutes: ['/']
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
