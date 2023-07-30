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

    await fetch('http://localhost:4000/api/add',{
      method: 'POST',
      body: JSON.stringify(newNote),
      headers: { 'Content-Type': 'application/json' }
    })

    revalidateTag('notes')
  }
  return (
    <div className='p-6 flex flex-col items-center w-full lg:p-none lg:items-start'>
      <form action={addNotes} className='flex flex-col items-center gap-3 border-2 p-8 w-full md:h-3/4 md:w-3/4 lg:w-full'>
        <label>Crear nota</label>
        <input className='p-4 border-2 w-3/4 lg:w-11/12' type='text' name='title' placeholder='titulo jeje'/>
        <input className='p-4 border-2 w-3/4 lg:w-11/12' type='text' name='content' placeholder='contenido de la nota' />
        <button>Guardar</button>
      </form>
    </div>
  )
}

export default PostNote