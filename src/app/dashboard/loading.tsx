import { Skeleton } from '@mui/material'

const Loading = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='p-6 flex flex-col items-center w-full lg:p-none'>
        <form className='bg-gray-100 flex flex-col items-center gap-3 p-8 w-full md:h-3/4 sm:w-3/4 md:w-7/12'>
          <Skeleton variant="rectangular" width={50} height={20} />
          <Skeleton variant="rounded" width={310} height={40} />
          <Skeleton variant="rounded" width={310} height={40} />
        </form>
      </div>
      <ul className='p-4 flex flex-col items-center justify-center gap-3 py-3 w-full px-4 sm:w-3/4 md:w-7/12'>
        <li className='flex flex-col gap-2 p-6 border-2 w-full'>
          <Skeleton variant="rounded" width={310} height={10} />
          <Skeleton variant="rounded" width={310} height={20} />
        </li>
        <li className='flex flex-col gap-2 p-6 border-2 w-full'>
          <Skeleton variant="rounded" width={310} height={10} />
          <Skeleton variant="rounded" width={310} height={20} />
        </li>
      </ul>
    </div>
  )
}

export default Loading