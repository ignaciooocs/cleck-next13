import { Skeleton } from '@mui/material'

const Loading = () => {
  return (
    <section>
      <article className='p-6 flex flex-col items-center w-full lg:p-none'>
        <div className='flex flex-col items-center gap-3 p-8 w-full md:h-3/4 sm:w-3/4 md:w-7/12'>
          <Skeleton variant="rounded" width='100%' height={20} />
          <Skeleton variant="rounded" width='100%' height={40} />
          <Skeleton variant="rounded" width='100%' height={40} />
        </div>
      </article>
    </section>
  )
}

export default Loading