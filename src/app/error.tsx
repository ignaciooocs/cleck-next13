'use client'
import { IoAlertCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import Link from 'next/link'

const Error = () => {
  return (
    <div className='flex flex-col gap-6 items-center h-full'>
      <section className='grid grid-cols-4 grid-rows-4 items-center border-2 px-8 py-12 w-full bg-slate-100'>
        <article className='row-start-1 row-end-3 col-start-1 col-end-3 p-4 flex justify-center items-center py-12'>
          <h2 className='text-center py-8 font-sans font-bold text-2xl firs-line:text-blue-500'><span className='text-red-500'>Ocurrio un error inesperado.</span> Por favor, vuelva a intentarlo</h2>
        </article>
        <article className='row-start-1 row-end-5 col-start-3 col-end-5  p-4 flex justify-center items-center py-12'>
          <IoAlertCircleOutline className='text-9xl text-red-500 my-8' />
        </article>
        <Link href='/' className='relative z-10 flex items-center gap-2 bg-red-500 text-white rounded-lg px-4 py-2'>
          <IoArrowBackCircleOutline className='text-xl' />
          Volver
        </Link>
      </section>
    </div>
  )
}

export default Error