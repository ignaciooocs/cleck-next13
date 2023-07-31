import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  ignoredRoutes: ['/api/add', '/api/notes/:id'],
  publicRoutes: ['/']
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
