import { getCookie } from '@/utils/getCookie'

interface INote {
  title: string
  content: string
  _id: string
  userId: string
}

const NoteList = async () => {
  const fetchapi = async () => {
    'use server'
    const userId = getCookie()

    const res = await fetch(`${process.env.GET_NOTES}${userId}`, { cache: 'no-cache', next: { tags: ['notes'] } })
    const data = await res.json()
    return data
  }
  const data = await fetchapi()

  return (
    <ul className='flex flex-col items-center gap-3 py-3 w-full px-4 sm:w-3/4 md:w-7/12'>
      <h2 className='font-bold text-xl font-sans w-full'>Mis notas</h2>
      {data.reverse().map((note: INote) => (
        <li className='p-6 border-2 w-full' key={note._id}>
          <h2 className='font-bold'>{note.title}</h2>
          <p>{note.content}</p>
        </li>
      ))}
    </ul>
  )
}

export default NoteList