import PostNote from '@/components/PostNote'
import NoteList from '@/components/NoteList'


const Dashboard = () => {
  return (
    <div className='flex flex-col items-center lg:grid grid-cols-2'>
      <PostNote />
      <NoteList />
    </div>
  )
}
export default Dashboard