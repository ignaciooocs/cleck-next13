import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  ignoredRoutes: [process.env.ADD, process.env.GET],
  publicRoutes: ['/']
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
