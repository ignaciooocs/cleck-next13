'use client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
const queryClient = new QueryClient()

interface Children {
  children: React.ReactNode
}

const QueryProvider = ({ children }: Children) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default QueryProvider