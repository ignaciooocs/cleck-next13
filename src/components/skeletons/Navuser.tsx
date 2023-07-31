import { Skeleton } from '@mui/material'

const Navuser = () => {
  return (
    <article className='flex h-full gap-4 pr-4 items-center'>
      <Skeleton variant="rounded" width={120} height={20} />
      <Skeleton variant="circular" width={30} height={30} />
    </article>
  )
} 

export default Navuser