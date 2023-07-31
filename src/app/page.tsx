import ButtonWelcome from "@/components/ButtonWelcome";
import { IoPlanetOutline } from "react-icons/io5";

const Home = async () => {
  return (
    <div className='flex flex-col gap-6 items-center h-full'>
      <section className='grid grid-cols-4 grid-rows-4 items-center border-2 px-8 py-12 w-full bg-slate-100'>
          <article className='row-start-1 row-end-3 col-start-1 col-end-3 p-4 flex justify-center items-center py-12'>
          <h2 className='text-center py-8 font-sans font-bold text-2xl firs-line:text-blue-500'><span className='text-blue-500'>Welcome to your</span> note space.  Save your ideas and thoughts</h2>
          </article>
          <article className='row-start-1 row-end-5 col-start-3 col-end-5  p-4 flex justify-center items-center py-12'>
            <IoPlanetOutline className='text-8xl text-blue-500 my-8' />
          </article>
          <ButtonWelcome />
      </section>
    </div>
  )
}

export default Home