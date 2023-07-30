import { IoPlanetOutline } from "react-icons/io5";

const Home = async () => {
  return (
    <div className='flex flex-col gap-6 items-center h-full'>
      <section className='grid grid-cols-2 grod-rows-1 items-center border-2 px-8 py-12 h-96 w-full bg-slate-100'>
          <article className='p-4 flex justify-center items-center py-12'>
          <h2 className='py-8 font-sans font-bold text-2xl firs-line:text-blue-500'><span className='text-blue-500'>Welcome to your</span><br /> note space.<br />  Save your ideas <br />and thoughts</h2>
          </article>
          <article className='p-4 flex justify-center items-center py-12'>
            <IoPlanetOutline className='text-8xl text-blue-500 my-8' />
          </article>
      </section>
    </div>
  )
}

export default Home