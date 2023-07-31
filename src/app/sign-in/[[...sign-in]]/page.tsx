import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
  <section className="flex justify-center items-center pt-12">
    <SignIn />
  </section>
  )
}