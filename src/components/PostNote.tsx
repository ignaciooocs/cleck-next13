import { getCookie } from '@/utils/getCookie'
import { revalidateTag } from 'next/cache'

const PostNote = async () => {
  // funcion para añadir una nueva nota
  const addNotes = async (e: FormData) => {
    'use server'

    const userId = getCookie() 
    const title = e.get('title')?.toString()
    const content = e.get('content')?.toString()

    const newNote = {
      title,
      content,
      userId
    }
    if (typeof process.env.POST_NOTE !== 'string') throw new Error('La variable de entorno no se configuró correctamente')
    await fetch(process.env.POST_NOTE,{
      method: 'POST',
      body: JSON.stringify(newNote),
      headers: { 'Content-Type': 'application/json' }
    })

    revalidateTag('notes')
  }
  return (
    <section className='p-6 flex flex-col items-center w-full lg:p-none'>
      <form action={addNotes} className='flex flex-col items-center gap-3 border-2 p-8 w-full md:h-3/4 sm:w-3/4 md:w-7/12'>
        <label>Crear nota</label>
        <textarea className='p-4 border-2 w-full lg:w-11/12' name='title' placeholder='titulo jeje'/>
        <textarea className='p-4 border-2 w-full lg:w-11/12' name='content' placeholder='contenido de la nota' />
        <button>Guardar</button>
      </form>
    </section>
  )
}

export default PostNote